<?php
require_once 'secure/auth.php';
require_login();
require_once 'secure/db_connect.php';

// Handle new blog post submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['title'], $_POST['content'])) {

    $title = trim($_POST['title']);
    $content = trim($_POST['content']);
    $meta_title = trim($_POST['meta_title'] ?? $title);
    $meta_description = trim($_POST['meta_description'] ?? substr(strip_tags($content),0,160));
    $meta_keyword = trim($_POST['meta_keyword'] ?? '');
    $category_id = intval($_POST['category_id'] ?? 0);
    $post_status = $_POST['post_status'] ?? 'draft';
    $slug = strtolower(preg_replace('/[^A-Za-z0-9-]+/', '-', $title));

    $image_path = '';
    if (isset($_FILES['image']) && $_FILES['image']['tmp_name']) {
        $upload_dir = __DIR__ . '/../images/blogs/';  // Corrected path based on checklist
        if (!file_exists($upload_dir)) mkdir($upload_dir, 0755, true);

        // Sanitize filename
        $raw_name = pathinfo($_FILES['image']['name'], PATHINFO_FILENAME);
        $ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
        $clean_name = preg_replace('/[^a-zA-Z0-9_-]/', '', $raw_name);
        $img_name = time() . '_' . $clean_name . '.' . $ext;
        
        $target_file = $upload_dir . $img_name;
        if (move_uploaded_file($_FILES['image']['tmp_name'], $target_file)) {
            $image_path = 'images/blogs/' . $img_name; // Stored as relative to website root? 
            // Previous walkthrough said "../images/blogs". 
            // If the front end is in website/ and admin is in website/user-admin/, 
            // then images are in website/images/blogs/.
            // The DB should probably store 'images/blogs/filename' if the frontend uses it from root.
        }
    }

    $schema_data = trim($_POST['schema_data'] ?? '');

    $stmt = $conn->prepare("INSERT INTO posts 
        (post_title, post_content, post_slug, category_id, meta_title, meta_description, meta_keyword, image_path, schema_data, post_status, created_at, updated_at, published_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)");
    
    $published_at = $post_status === 'published' ? date('Y-m-d H:i:s') : null;
    $stmt->bind_param("sssisssssss", 
        $title, $content, $slug, $category_id, $meta_title, $meta_description, $meta_keyword, $image_path, $schema_data, $post_status, $published_at
    );

    if ($stmt->execute()) {
        $post_id = $stmt->insert_id;

        // Handle tags (comma separated)
        if (!empty($_POST['tags'])) {
            $tags = array_map('trim', explode(',', $_POST['tags']));
            foreach ($tags as $tag_name) {
                if (!$tag_name) continue;
                $tag_slug = strtolower(preg_replace('/[^A-Za-z0-9-]+/', '-', $tag_name));
                $tag_stmt = $conn->prepare("SELECT tag_id FROM tags WHERE tag_slug = ?");
                $tag_stmt->bind_param("s", $tag_slug);
                $tag_stmt->execute();
                $tag_stmt->store_result();

                if ($tag_stmt->num_rows > 0) {
                    $tag_stmt->bind_result($tag_id);
                    $tag_stmt->fetch();
                } else {
                    $insert_tag = $conn->prepare("INSERT INTO tags (tag_name, tag_slug) VALUES (?, ?)");
                    $insert_tag->bind_param("ss", $tag_name, $tag_slug);
                    $insert_tag->execute();
                    $tag_id = $insert_tag->insert_id;
                }
                $post_tag = $conn->prepare("INSERT INTO post_tags (post_id, tag_id) VALUES (?, ?)");
                $post_tag->bind_param("ii", $post_id, $tag_id);
                $post_tag->execute();
            }
        }

        echo "<script>alert('Blog posted successfully!'); window.location.href='create-blog';</script>";
        exit;
    } else {
        echo "Error: " . $stmt->error;
        exit;
    }
}

// Handle AJAX: Upload Content Images
if (isset($_POST['ajax']) && $_POST['ajax'] === 'upload_content_images') {
    header('Content-Type: application/json');
    $uploaded = [];
    if (isset($_FILES['content_images'])) {
        $upload_dir = __DIR__ . '/../images/blogs/';
        if (!file_exists($upload_dir)) mkdir($upload_dir, 0755, true);
        $alts = $_POST['alts'] ?? [];
        
        $files = $_FILES['content_images'];
        $count = count($files['name']);
        for ($i = 0; $i < $count; $i++) {
            if ($files['error'][$i] === UPLOAD_ERR_OK) {
                $tmp = $files['tmp_name'][$i];
                $name = $files['name'][$i];
                $ext = pathinfo($name, PATHINFO_EXTENSION);
                $clean_name = preg_replace('/[^a-zA-Z0-9_-]/', '', pathinfo($name, PATHINFO_FILENAME));
                $img_name = time() . '_' . $i . '_' . $clean_name . '.' . $ext;
                $target = $upload_dir . $img_name;
                
                if (move_uploaded_file($tmp, $target)) {
                    $alt = isset($alts[$i]) ? trim($alts[$i]) : '';
                    $uploaded[] = [
                        'url' => 'images/blogs/' . $img_name,
                        'alt' => $alt
                    ];
                }
            }
        }
    }
    echo json_encode(['success' => true, 'images' => $uploaded]);
    exit;
}

// Handle AJAX: Add Category
if (isset($_POST['ajax']) && $_POST['ajax'] === 'add_category') {
    $cat_name = trim($_POST['category_name'] ?? '');
    if ($cat_name) {
        $cat_slug = strtolower(preg_replace('/[^A-Za-z0-9-]+/', '-', $cat_name));
        $stmt = $conn->prepare("INSERT INTO category (category_name, category_slug) VALUES (?, ?)");
        $stmt->bind_param("ss", $cat_name, $cat_slug);
        if ($stmt->execute()) {
            echo json_encode(['success'=>true, 'id'=>$stmt->insert_id, 'name'=>$cat_name]);
        } else {
            echo json_encode(['success'=>false, 'msg'=>'Category exists or error']);
        }
    } else {
        echo json_encode(['success'=>false, 'msg'=>'Category name required']);
    }
    exit;
}

// Handle AJAX: Add Tag
if (isset($_POST['ajax']) && $_POST['ajax'] === 'add_tag') {
    $tag_name = trim($_POST['tag_name'] ?? '');
    if ($tag_name) {
        $tag_slug = strtolower(preg_replace('/[^A-Za-z0-9-]+/', '-', $tag_name));
        $stmt = $conn->prepare("INSERT INTO tags (tag_name, tag_slug) VALUES (?, ?)");
        $stmt->bind_param("ss", $tag_name, $tag_slug);
        if ($stmt->execute()) {
            echo json_encode(['success'=>true, 'id'=>$stmt->insert_id, 'name'=>$tag_name]);
        } else {
            echo json_encode(['success'=>false, 'msg'=>'Tag exists or error']);
        }
    } else {
        echo json_encode(['success'=>false, 'msg'=>'Tag name required']);
    }
    exit;
}

// Fetch categories for the dropdown
$categories = [];
$cat_res = $conn->query("SELECT * FROM category ORDER BY category_name ASC");
if ($cat_res) {
    while ($row = $cat_res->fetch_assoc()) {
        $categories[] = $row;
    }
}

// Fetch tags for the dropdown
$tags = [];
$tag_res = $conn->query("SELECT * FROM tags ORDER BY tag_name ASC");
if ($tag_res) {
    while ($row = $tag_res->fetch_assoc()) {
        $tags[] = $row;
    }
}
?>

<?php require_once 'header.php'; ?>
<?php require_once 'side-bar.php'; ?>

<!-- Include Quill CSS/JS here -->
<link href="https://cdn.quilljs.com/1.3.7/quill.snow.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> <!-- jQuery for AJAX -->
<script src="https://cdn.quilljs.com/1.3.7/quill.min.js"></script>

<main class="main-content">
    <div class="container-fluid">
        <h3 class="mb-4 fw-bold">Create New Blog Post</h3>
        
        <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
                <form method="POST" action="" enctype="multipart/form-data" id="blogForm">
                    
                    <div class="mb-3">
                        <label class="form-label fw-bold">Title</label>
                        <input type="text" name="title" class="form-control" required placeholder="Enter blog title">
                    </div>

                    <div class="mb-3">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <label class="form-label fw-bold mb-0">Content</label>
                            <div class="btn-group btn-group-sm">
                                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#insertTableModal">
                                    <i class="fas fa-table me-1"></i> Insert Table
                                </button>
                                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#insertImageModal">
                                    <i class="fas fa-images me-1"></i> Insert Images (with Alt Text)
                                </button>
                            </div>
                        </div>
                        <div id="quill-editor" style="height: 300px;"></div>
                        <input type="hidden" name="content" id="content">
                    </div>

                    <div class="row align-items-end mb-3">
                        <div class="col-md-9 mb-2 mb-md-0">
                            <label class="form-label fw-bold">Category</label>
                            <select name="category_id" class="form-select" id="categorySelect">
                                <option value="0">Select Category</option>
                                <?php foreach($categories as $cat): ?>
                                    <option value="<?= $cat['category_id'] ?>"><?= htmlspecialchars($cat['category_name']) ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#addCategoryModal">
                                <i class="fas fa-plus me-1"></i> Add Category
                            </button>
                        </div>
                    </div>

                    <div class="row align-items-end mb-3">
                        <div class="col-md-9 mb-2 mb-md-0">
                            <label class="form-label fw-bold">Tags</label>
                            <div id="tagsCheckboxes" class="form-control" style="min-height: 50px; height: auto;">
                                <?php foreach($tags as $tag): ?>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input tag-checkbox" type="checkbox" id="tag_<?= $tag['tag_id'] ?>" value="<?= htmlspecialchars($tag['tag_name']) ?>">
                                        <label class="form-check-label" for="tag_<?= $tag['tag_id'] ?>"><?= htmlspecialchars($tag['tag_name']) ?></label>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                            <input type="hidden" name="tags" id="tagsInput">
                        </div>
                        <div class="col-md-3">
                             <button type="button" class="btn btn-outline-secondary w-100" data-bs-toggle="modal" data-bs-target="#addTagModal">
                                <i class="fas fa-tag me-1"></i> Add Tag
                            </button>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label fw-bold">Featured Image</label>
                        <input type="file" name="image" class="form-control" accept="image/*">
                        <div class="form-text">Recommended size: 1200x630 px.</div>
                    </div>

                    <hr class="my-4">
                    <h5 class="fw-bold mb-3">SEO Settings (Optional)</h5>

                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label class="form-label">Meta Title</label>
                            <input type="text" name="meta_title" class="form-control" placeholder="SEO Title">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Meta Keywords</label>
                            <input type="text" name="meta_keyword" class="form-control" placeholder="Keywords (comma separated)">
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <label class="form-label">Meta Description</label>
                        <input type="text" name="meta_description" class="form-control" placeholder="Short description for search engines">
                    </div>

                    <hr class="my-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h5 class="fw-bold mb-0">Dynamic Schema Markup (JSON-LD)</h5>
                            <small class="text-muted">Add structured data schemas (e.g., FAQPage, Article or Custom JSON-LD) for SEO</small>
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-primary" id="addSchemaBtn">
                            <i class="fas fa-plus me-1"></i> Add Schema
                        </button>
                    </div>
                    <div id="schemaContainer" class="mb-4"></div>
                    <input type="hidden" name="schema_data" id="schemaDataInput">

                    <div class="d-flex justify-content-between align-items-center">
                        <a href="dashboard.php" class="btn btn-light text-muted">Cancel</a>
                        <div class="d-flex gap-2">
                            <button type="submit" class="btn btn-secondary" name="post_status" value="draft">Save Draft</button>
                            <button type="submit" class="btn btn-primary px-4" name="post_status" value="published">Publish Post</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</main>

<!-- Insert Table Modal -->
<div class="modal fade" id="insertTableModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Insert Table</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row mb-3">
            <div class="col-6">
                <label class="form-label">Rows</label>
                <input type="number" id="tblRows" class="form-control" value="3" min="1" max="20">
            </div>
            <div class="col-6">
                <label class="form-label">Columns</label>
                <input type="number" id="tblCols" class="form-control" value="3" min="1" max="10">
            </div>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="tblHeader" checked>
            <label class="form-check-label" for="tblHeader">Include Table Header</label>
        </div>
        <div class="mb-3">
            <label class="form-label">Table Style</label>
            <select id="tblStyle" class="form-select">
                <option value="table table-bordered table-striped">Bordered & Striped</option>
                <option value="table table-bordered">Bordered</option>
                <option value="table table-striped">Striped</option>
                <option value="table table-hover">Hoverable</option>
            </select>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" id="btnConfirmInsertTable">Insert Table</button>
      </div>
    </div>
  </div>
</div>

<!-- Insert Images with Alt Text Modal -->
<div class="modal fade" id="insertImageModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Insert Images with Alt Text</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
            <label class="form-label fw-bold">Select Image(s)</label>
            <input type="file" id="contentImageFiles" class="form-control" multiple accept="image/*">
            <div class="form-text">Choose one or more images to insert into your content.</div>
        </div>
        <div id="imageAltList" class="mt-3"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" id="btnUploadContentImages">Upload & Insert Images</button>
      </div>
    </div>
  </div>
</div>

<!-- Add Category Modal -->
<div class="modal fade" id="addCategoryModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <form id="addCategoryForm" class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add New Category</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" name="category_name" class="form-control" placeholder="Category Name" required>
        <div id="catMsg" class="text-danger mt-2 small"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Add Category</button>
      </div>
    </form>
  </div>
</div>

<!-- Add Tag Modal -->
<div class="modal fade" id="addTagModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <form id="addTagForm" class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add New Tag</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" name="tag_name" class="form-control" placeholder="Tag Name" required>
        <div id="tagMsg" class="text-danger mt-2 small"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-secondary">Add Tag</button>
      </div>
    </form>
  </div>
</div>

<!-- Bootstrap 5 JS Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<script>
    // Initialize Quill
    var quill = new Quill('#quill-editor', {
        theme: 'snow',
        placeholder: 'Write something amazing...',
        modules: {
            toolbar: [
                [{ 'header': [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['link', 'image'],
                ['clean']
            ]
        }
    });

    // Sync content on submit
    document.querySelector('form#blogForm').onsubmit = function() {
        document.querySelector('#content').value = quill.root.innerHTML;
        // Also sync tags
        var selected = [];
        $('.tag-checkbox:checked').each(function() {
            selected.push($(this).val());
        });
        $('#tagsInput').val(selected.join(','));
        // Sync schema data
        $('#schemaDataInput').val(collectSchemaData());
    };

    // Table Insertion Handler
    $('#btnConfirmInsertTable').click(function(){
        var rows = parseInt($('#tblRows').val()) || 3;
        var cols = parseInt($('#tblCols').val()) || 3;
        var incHeader = $('#tblHeader').is(':checked');
        var styleClass = $('#tblStyle').val();

        var html = '<div class="table-responsive my-3"><table class="' + styleClass + '">';
        if (incHeader) {
            html += '<thead><tr>';
            for (var c = 1; c <= cols; c++) {
                html += '<th>Header ' + c + '</th>';
            }
            html += '</tr></thead>';
        }
        html += '<tbody>';
        for (var r = 1; r <= rows; r++) {
            html += '<tr>';
            for (var c = 1; c <= cols; c++) {
                html += '<td>Data ' + r + '-' + c + '</td>';
            }
            html += '</tr>';
        }
        html += '</tbody></table></div><p><br></p>';

        var range = quill.getSelection(true);
        var index = range ? range.index : quill.getLength();
        quill.clipboard.dangerouslyPasteHTML(index, html);

        var modalEl = document.getElementById('insertTableModal');
        var modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
    });

    // Content Images Preview with Alt Text fields
    $('#contentImageFiles').on('change', function(){
        var files = this.files;
        var container = $('#imageAltList');
        container.empty();

        if (!files || files.length === 0) return;

        Array.from(files).forEach(function(file, idx){
            var reader = new FileReader();
            reader.onload = function(e){
                var card = $(
                    '<div class="card mb-2 p-2">' +
                        '<div class="row align-items-center">' +
                            '<div class="col-auto">' +
                                '<img src="' + e.target.result + '" style="width:60px; height:60px; object-fit:cover; border-radius:4px;">' +
                            '</div>' +
                            '<div class="col">' +
                                '<div class="fw-bold small mb-1">' + file.name + '</div>' +
                                '<input type="text" class="form-control form-control-sm img-alt-field" data-index="' + idx + '" placeholder="Enter Alt Text for this image...">' +
                            '</div>' +
                        '</div>' +
                    '</div>'
                );
                container.append(card);
            };
            reader.readAsDataURL(file);
        });
    });

    // Upload & Insert Images AJAX
    $('#btnUploadContentImages').click(function(){
        var filesInput = document.getElementById('contentImageFiles');
        if (!filesInput.files || filesInput.files.length === 0) {
            alert('Please select at least one image file.');
            return;
        }

        var formData = new FormData();
        formData.append('ajax', 'upload_content_images');

        Array.from(filesInput.files).forEach(function(file, idx){
            formData.append('content_images[]', file);
            var altVal = $('.img-alt-field[data-index="' + idx + '"]').val() || '';
            formData.append('alts[]', altVal);
        });

        $.ajax({
            url: '',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function(resp){
                if(resp.success && resp.images){
                    var range = quill.getSelection(true);
                    var index = range ? range.index : quill.getLength();
                    
                    resp.images.forEach(function(img){
                        var altAttr = img.alt ? ' alt="' + $('<div>').text(img.alt).html() + '"' : '';
                        var imgHtml = '<figure class="my-3 text-center"><img src="' + img.url + '"' + altAttr + ' class="img-fluid rounded" />' + 
                            (img.alt ? '<figcaption class="text-muted small mt-1">' + $('<div>').text(img.alt).html() + '</figcaption>' : '') + 
                            '</figure><p><br></p>';
                        quill.clipboard.dangerouslyPasteHTML(index, imgHtml);
                        index = quill.getLength();
                    });

                    var modalEl = document.getElementById('insertImageModal');
                    var modal = bootstrap.Modal.getInstance(modalEl);
                    if (modal) modal.hide();

                    $('#contentImageFiles').val('');
                    $('#imageAltList').empty();
                } else {
                    alert(resp.msg || 'Error uploading images');
                }
            },
            error: function(){
                alert('Server error uploading images.');
            }
        });
    });

    // Dynamic Schema Builder JS
    var schemaCount = 0;
    function addSchemaBlock(data) {
        schemaCount++;
        var blockId = 'schema_block_' + schemaCount;
        var type = data ? data['@type'] : 'FAQPage';

        var html = '<div class="card mb-3 border schema-block" id="' + blockId + '">' +
            '<div class="card-header bg-light d-flex justify-content-between align-items-center p-2">' +
                '<div class="d-flex align-items-center gap-2">' +
                    '<label class="fw-bold mb-0 small">Schema Type:</label>' +
                    '<select class="form-select form-select-sm schema-type-select" style="width:auto;">' +
                        '<option value="FAQPage" ' + (type === 'FAQPage' ? 'selected' : '') + '>FAQ Schema (FAQPage)</option>' +
                        '<option value="BlogPosting" ' + (type === 'BlogPosting' || type === 'Article' ? 'selected' : '') + '>Article / BlogPosting</option>' +
                        '<option value="Custom" ' + (type !== 'FAQPage' && type !== 'BlogPosting' && type !== 'Article' ? 'selected' : '') + '>Custom JSON-LD</option>' +
                    '</select>' +
                '</div>' +
                '<button type="button" class="btn btn-sm btn-outline-danger remove-schema-btn"><i class="fas fa-trash"></i></button>' +
            '</div>' +
            '<div class="card-body p-3 schema-fields-container">' +
            '</div>' +
        '</div>';

        var $block = $(html);
        $('#schemaContainer').append($block);

        renderSchemaFields($block, type, data);

        $block.find('.schema-type-select').change(function(){
            renderSchemaFields($block, $(this).val());
        });

        $block.find('.remove-schema-btn').click(function(){
            $block.remove();
        });
    }

    function renderSchemaFields($block, type, data) {
        var container = $block.find('.schema-fields-container');
        container.empty();

        if (type === 'FAQPage') {
            var html = '<div>' +
                '<label class="fw-bold mb-2 small">FAQ Items</label>' +
                '<div class="faq-items-list mb-2"></div>' +
                '<button type="button" class="btn btn-xs btn-outline-secondary add-faq-item-btn">+ Add FAQ Item</button>' +
            '</div>';
            container.html(html);

            var $faqList = container.find('.faq-items-list');

            function addFaqRow(q, a) {
                var rowHtml = '<div class="row g-2 mb-2 faq-item align-items-center">' +
                    '<div class="col-md-5"><input type="text" class="form-control form-control-sm faq-q" placeholder="Question..." value="' + (q || '') + '"></div>' +
                    '<div class="col-md-6"><input type="text" class="form-control form-control-sm faq-a" placeholder="Answer..." value="' + (a || '') + '"></div>' +
                    '<div class="col-md-1"><button type="button" class="btn btn-sm btn-link text-danger remove-faq-btn"><i class="fas fa-times"></i></button></div>' +
                '</div>';
                var $row = $(rowHtml);
                $faqList.append($row);
                $row.find('.remove-faq-btn').click(function(){ $row.remove(); });
            }

            container.find('.add-faq-item-btn').click(function(){ addFaqRow('', ''); });

            if (data && data.mainEntity && Array.isArray(data.mainEntity)) {
                data.mainEntity.forEach(function(item){
                    addFaqRow(item.name || '', (item.acceptedAnswer ? item.acceptedAnswer.text : '') || '');
                });
            } else {
                addFaqRow('', '');
            }
        } else if (type === 'BlogPosting' || type === 'Article') {
            var headline = (data && data.headline) ? data.headline : $('input[name="title"]').val();
            var desc = (data && data.description) ? data.description : '';
            var author = (data && data.author) ? (data.author.name || data.author) : 'MyActivity';
            var publisher = (data && data.publisher) ? (data.publisher.name || data.publisher) : 'MyActivity';

            var html = '<div class="row g-2">' +
                '<div class="col-md-6"><label class="form-label small mb-1">Headline</label><input type="text" class="form-control form-control-sm art-headline" value="' + headline + '"></div>' +
                '<div class="col-md-6"><label class="form-label small mb-1">Author</label><input type="text" class="form-control form-control-sm art-author" value="' + author + '"></div>' +
                '<div class="col-md-6"><label class="form-label small mb-1">Publisher</label><input type="text" class="form-control form-control-sm art-publisher" value="' + publisher + '"></div>' +
                '<div class="col-md-6"><label class="form-label small mb-1">Description</label><input type="text" class="form-control form-control-sm art-desc" value="' + desc + '"></div>' +
            '</div>';
            container.html(html);
        } else {
            var rawJson = typeof data === 'string' ? data : (data ? JSON.stringify(data, null, 2) : '');
            var html = '<div>' +
                '<label class="form-label small mb-1">Paste JSON-LD Object</label>' +
                '<textarea class="form-control form-control-sm font-monospace custom-json-input" rows="4" placeholder=\'{"@context": "https://schema.org", "@type": "Thing", "name": "Example"}\'>' + rawJson + '</textarea>' +
            '</div>';
            container.html(html);
        }
    }

    $('#addSchemaBtn').click(function(){
        addSchemaBlock(null);
    });

    function collectSchemaData() {
        var schemas = [];
        $('.schema-block').each(function() {
            var type = $(this).find('.schema-type-select').val();
            if (type === 'FAQPage') {
                var faqs = [];
                $(this).find('.faq-item').each(function() {
                    var q = $(this).find('.faq-q').val().trim();
                    var a = $(this).find('.faq-a').val().trim();
                    if (q && a) {
                        faqs.push({
                            "@type": "Question",
                            "name": q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": a
                            }
                        });
                    }
                });
                if (faqs.length > 0) {
                    schemas.push({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs
                    });
                }
            } else if (type === 'BlogPosting' || type === 'Article') {
                var headline = $(this).find('.art-headline').val().trim();
                var desc = $(this).find('.art-desc').val().trim();
                var author = $(this).find('.art-author').val().trim() || 'MyActivity';
                var publisher = $(this).find('.art-publisher').val().trim() || 'MyActivity';
                schemas.push({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": headline,
                    "description": desc,
                    "author": {
                        "@type": "Organization",
                        "name": author
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": publisher
                    }
                });
            } else if (type === 'Custom') {
                var rawJson = $(this).find('.custom-json-input').val().trim();
                if (rawJson) {
                    try {
                        var cleaned = rawJson.replace(/<script[^>]*>/gi, '').replace(/<\/script>/gi, '').trim();
                        var parsed = JSON.parse(cleaned);
                        schemas.push(parsed);
                    } catch(e) {
                        schemas.push(rawJson);
                    }
                }
            }
        });
        return schemas.length > 0 ? JSON.stringify(schemas) : '';
    }

    // Add Category AJAX
    $('#addCategoryForm').submit(function(e){
        e.preventDefault();
        var catName = $(this).find('input[name="category_name"]').val();
        $.post('', {ajax:'add_category', category_name:catName}, function(resp){
            if(resp.success){
                $('#categorySelect').append('<option value="'+resp.id+'" selected>'+resp.name+'</option>');
                
                // Close modal (BS5)
                var modalEl = document.getElementById('addCategoryModal');
                var modal = bootstrap.Modal.getInstance(modalEl);
                modal.hide();

                $('#addCategoryForm')[0].reset();
                $('#catMsg').text('');
            } else {
                $('#catMsg').text(resp.msg || 'Error adding category');
            }
        },'json');
    });

    // Add Tag AJAX
    $('#addTagForm').submit(function(e){
        e.preventDefault();
        var tagName = $(this).find('input[name="tag_name"]').val();
        $.post('', {ajax:'add_tag', tag_name:tagName}, function(resp){
            if(resp.success){
                var tagId = 'tag_new_' + resp.id;
                var $newCheckbox = $('<div class="form-check form-check-inline">' +
                    '<input class="form-check-input tag-checkbox" type="checkbox" id="'+tagId+'" value="'+resp.name+'" checked>' +
                    '<label class="form-check-label" for="'+tagId+'">'+resp.name+'</label>' +
                    '</div>');
                $('#tagsCheckboxes').append($newCheckbox);
                
                // Close modal (BS5)
                var modalEl = document.getElementById('addTagModal');
                var modal = bootstrap.Modal.getInstance(modalEl);
                modal.hide();

                $('#addTagForm')[0].reset();
                $('#tagMsg').text('');
            } else {
                $('#tagMsg').text(resp.msg || 'Error adding tag');
            }
        },'json');
    });
</script>

</body>
</html>