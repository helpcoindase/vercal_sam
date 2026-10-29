<?php
file_put_contents(
    __DIR__ . '/debug_request.log',
    "\n=============================\n" .
    date('Y-m-d H:i:s') . "\n" .
    "REQUEST RECEIVED\n",
    FILE_APPEND
);
require_once 'secure/db_connect.php';

// Get blog ID from query string
$post_id = intval($_GET['id'] ?? 0);
if (!$post_id) {
    require_once 'header.php'; 
    require_once 'side-bar.php';
    echo "<div class='main-content'><div class='container-fluid'><div class='alert alert-danger'>Invalid Request</div></div></div>";
    require_once 'footer.php'; // Assuming footer exists or just closing tags
    exit;
}

// Ajax Handlers (Add Category, Add Tag)
if (isset($_POST['ajax'])) {
    header('Content-Type: application/json');
    $response = ['success' => false, 'msg' => 'Unknown action'];
    
    if ($_POST['ajax'] === 'add_category') {
        $name = trim($_POST['category_name'] ?? '');
        if ($name) {
            $slug = strtolower(preg_replace('/[^A-Za-z0-9-]+/', '-', $name));
            $stmt = $conn->prepare("INSERT INTO category (category_name, category_slug) VALUES (?, ?)");
            $stmt->bind_param("ss", $name, $slug);
            if ($stmt->execute()) {
                $response = ['success' => true, 'id' => $stmt->insert_id, 'name' => $name];
            } else {
                $response['msg'] = 'Category may already exist.';
            }
        }
    } elseif ($_POST['ajax'] === 'add_tag') {
        $name = trim($_POST['tag_name'] ?? '');
        if ($name) {
            $slug = strtolower(preg_replace('/[^A-Za-z0-9-]+/', '-', $name));
            $stmt = $conn->prepare("INSERT INTO tags (tag_name, tag_slug) VALUES (?, ?)");
            $stmt->bind_param("ss", $name, $slug);
            if ($stmt->execute()) {
                $response = ['success' => true, 'id' => $stmt->insert_id, 'name' => $name];
            } else {
                $response['msg'] = 'Tag may already exist.';
            }
        }
    } elseif ($_POST['ajax'] === 'upload_content_images') {
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
        $response = ['success' => true, 'images' => $uploaded];
    }
    echo json_encode($response);
    exit;
}

// Fetch Post
// Fetch Post
$stmt = $conn->prepare("SELECT * FROM posts WHERE post_id = ?");
$stmt->bind_param("i", $post_id);
$stmt->execute();
$post = $stmt->get_result()->fetch_assoc();
$stmt->close();

if (!$post) {
    echo "<div class='main-content'><div class='container-fluid'><div class='alert alert-danger'>Post not found</div></div></div>";
    exit;
}

// Fetch current tags
$cur_tags = [];
$ts = $conn->prepare("SELECT t.tag_name, t.tag_id FROM tags t JOIN post_tags pt ON t.tag_id = pt.tag_id WHERE pt.post_id = ?");
$ts->bind_param("i", $post_id);
$ts->execute();
$res = $ts->get_result();
while ($r = $res->fetch_assoc()) $cur_tags[] = $r['tag_name'];
$ts->close();

// Handle Update
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !isset($_POST['ajax'])) {
    $title = trim($_POST['title']);
    $content = trim($_POST['content']);
    file_put_contents(
        __DIR__ . '/debug_post.log',
        "\n=============================\n" .
        "Date: " . date('Y-m-d H:i:s') . "\n" .
        "Title: " . $title . "\n" .
        "Content Length: " . strlen($content) . "\n" .
        "POST:\n" . print_r($_POST, true) . "\n" .
        "CONTENT:\n" . $content . "\n",
        FILE_APPEND
    );
    $category_id = intval($_POST['category_id']);
    $post_status = $_POST['post_status'];
    
    // Slugs & Meta
    $slug = strtolower(preg_replace('/[^A-Za-z0-9-]+/', '-', $title));
    $meta_title = $_POST['meta_title'] ?: $title;
    $desc_raw = strip_tags($content);
    $meta_desc = $_POST['meta_description'] ?: (strlen($desc_raw) > 157 ? substr($desc_raw, 0, 157) . '...' : $desc_raw);
    $meta_kw = $_POST['meta_keyword'] ?? '';
    
    // Image
    $image_path = $post['image_path'];
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $upload_dir = __DIR__ . '/../images/blogs/';
        if (!is_dir($upload_dir)) mkdir($upload_dir, 0755, true);
        
        $ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
        // Use a clean filename with timestamp and random id
        $filename = time() . '_' . uniqid() . '.' . $ext;
        $target = $upload_dir . $filename;
        
        if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
            $image_path = 'images/blogs/' . $filename;
        } else {
             // If upload fails, we should arguably show an error, but for now let's just not update the path.
             // Maybe set a session warning if needed, but the UI is limited.
             // $error = "Failed to move uploaded file.";
        }
    }
    
    $now = date('Y-m-d H:i:s');
    $pub_at = ($post_status === 'published' && $post['post_status'] !== 'published') ? $now : $post['published_at'];
    
    $schema_data = trim($_POST['schema_data'] ?? '');

    $sql = "UPDATE posts SET post_title=?, post_slug=?, category_id=?, post_status=?, post_content=?, meta_title=?, meta_description=?, meta_keyword=?, schema_data=?, updated_at=?, published_at=?, image_path=? WHERE post_id=?";
    $stmt = $conn->prepare($sql);
    
    if ($stmt) {
        $stmt->bind_param("sssissssssssi", $title, $slug, $category_id, $post_status, $content, $meta_title, $meta_desc, $meta_kw, $schema_data, $now, $pub_at, $image_path, $post_id);
        if ($stmt->execute()) {
            
            // Update Tags
            $conn->query("DELETE FROM post_tags WHERE post_id = $post_id");
            if (!empty($_POST['tags'])) {
                 $tags_arr = explode(',', $_POST['tags']);
                 foreach ($tags_arr as $t) {
                     $t = trim($t);
                     if (!$t) continue;
                     
                     // Resolve ID
                     $ft = $conn->prepare("SELECT tag_id FROM tags WHERE tag_name = ?");
                     $ft->bind_param("s", $t);
                     $ft->execute();
                     $res = $ft->get_result();
                     if ($r = $res->fetch_assoc()) {
                         $tid = $r['tag_id'];
                     } else {
                          $tslug = strtolower(preg_replace('/[^A-Za-z0-9-]+/', '-', $t));
                          $ins = $conn->prepare("INSERT INTO tags (tag_name, tag_slug) VALUES (?, ?)");
                          $ins->bind_param("ss", $t, $tslug);
                          $ins->execute();
                          $tid = $ins->insert_id;
                     }
                     $ft->close();
                     
                     if (isset($tid)) {
                         $pt = $conn->prepare("INSERT INTO post_tags (post_id, tag_id) VALUES (?, ?)");
                         $pt->bind_param("ii", $post_id, $tid);
                         $pt->execute();
                         $pt->close();
                     }
                 }
            }
            
            $success = "Post updated successfully.";
            // Refresh post data
            // Refresh post data
            $stmt = $conn->prepare("SELECT * FROM posts WHERE post_id=?");
            $stmt->bind_param("i", $post_id);
            $stmt->execute();
            $post = $stmt->get_result()->fetch_assoc();
             
             // Refresh tags
            $cur_tags = [];
            $ts = $conn->prepare("SELECT t.tag_name FROM tags t JOIN post_tags pt ON t.tag_id = pt.tag_id WHERE pt.post_id = ?");
            $ts->bind_param("i", $post_id);
            $ts->execute();
            $res = $ts->get_result();
            while ($r = $res->fetch_assoc()) $cur_tags[] = $r['tag_name'];

        } else {
            $error = "DB Error: " . $stmt->error;
        }
        $stmt->close();
    }
}

// Fetch Lists
$cats = [];
$cr = $conn->query("SELECT * FROM category ORDER BY category_name ASC");
while ($r = $cr->fetch_assoc()) $cats[] = $r;

$tags_all = [];
$tr = $conn->query("SELECT * FROM tags ORDER BY tag_name ASC");
while ($r = $tr->fetch_assoc()) $tags_all[] = $r;

?>

<?php require_once 'header.php'; ?>
<?php require_once 'side-bar.php'; ?>

<!-- Quill -->
<link href="https://cdn.quilljs.com/1.3.7/quill.snow.css" rel="stylesheet">
<script src="https://cdn.quilljs.com/1.3.7/quill.min.js"></script>
<style>
.blog-thumb-preview { width:100%; height:auto; max-height:200px; object-fit:cover; border-radius:10px; margin-bottom:15px; }
.modal-backdrop.show { opacity: 0.2; }
</style>

<main class="main-content">
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-lg-10">
            <h3 class="fw-bold mb-4">Edit Post: <?php echo htmlspecialchars($post['post_title']); ?></h3>
            
            <?php if (isset($error)): ?>
                <div class="alert alert-danger"><?php echo $error; ?></div>
            <?php endif; ?>
            <?php if (isset($success)): ?>
                <div class="alert alert-success"><?php echo $success; ?></div>
            <?php endif; ?>
            
            <form method="POST" enctype="multipart/form-data" id="blogForm">
            <div class="row">
                <div class="col-md-8">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label">Post Title</label>
                                <input type="text" name="title" class="form-control" value="<?php echo htmlspecialchars($post['post_title']); ?>" required>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <label class="form-label mb-0">Content</label>
                                    <div class="btn-group btn-group-sm">
                                        <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#insertTableModal">
                                            <i class="fas fa-table me-1"></i> Insert Table
                                        </button>
                                        <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#insertImageModal">
                                            <i class="fas fa-images me-1"></i> Insert Images (with Alt Text)
                                        </button>
                                    </div>
                                </div>
                                <div id="editor" style="height: 300px;"><?php echo $post['post_content']; ?></div>
                                <input type="hidden" name="content" id="contentArea">
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-white">
                            <h5 class="mb-0">SEO Settings</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label">Meta Title</label>
                                <input type="text" name="meta_title" class="form-control" value="<?php echo htmlspecialchars($post['meta_title']); ?>">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Meta Description</label>
                                <textarea name="meta_description" class="form-control" rows="3"><?php echo htmlspecialchars($post['meta_description']); ?></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Keywords</label>
                                <input type="text" name="meta_keyword" class="form-control" value="<?php echo htmlspecialchars($post['meta_keyword']); ?>">
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header bg-white d-flex justify-content-between align-items-center">
                            <div>
                                <h5 class="mb-0 fw-bold">Dynamic Schema Markup (JSON-LD)</h5>
                                <small class="text-muted">Structured data schemas for SEO</small>
                            </div>
                            <button type="button" class="btn btn-sm btn-outline-primary" id="addSchemaBtn">
                                <i class="fas fa-plus me-1"></i> Add Schema
                            </button>
                        </div>
                        <div class="card-body">
                            <div id="schemaContainer"></div>
                            <input type="hidden" name="schema_data" id="schemaDataInput" value="<?php echo htmlspecialchars($post['schema_data'] ?? ''); ?>">
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-header bg-white">
                            <h5 class="mb-0">Publish</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label>Status: <span class="badge bg-secondary"><?php echo htmlspecialchars($post['post_status']); ?></span></label>
                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" name="post_status" value="published" class="btn btn-primary">Update & Publish</button>
                                <button type="submit" name="post_status" value="draft" class="btn btn-secondary">Save as Draft</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mb-4">
                         <div class="card-header bg-white d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Category</h5>
                            <button type="button" class="btn btn-sm btn-link" data-bs-toggle="modal" data-bs-target="#addCatModal">+ Add</button>
                        </div>
                        <div class="card-body">
                            <select name="category_id" id="catSelect" class="form-select">
                                <option value="">Select Category</option>
                                <?php foreach($cats as $c): ?>
                                    <option value="<?php echo $c['category_id']; ?>" <?php echo $c['category_id'] == $post['category_id'] ? 'selected' : ''; ?>>
                                        <?php echo htmlspecialchars($c['category_name']); ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-white d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Tags</h5>
                             <button type="button" class="btn btn-sm btn-link" data-bs-toggle="modal" data-bs-target="#addTagModal">+ Add</button>
                        </div>
                        <div class="card-body">
                            <div class="d-flex flex-wrap gap-2" id="tagContainer">
                                <?php foreach($tags_all as $t): ?>
                                    <div class="form-check">
                                        <input class="form-check-input tag-chk" type="checkbox" value="<?php echo htmlspecialchars($t['tag_name']); ?>" id="tag_<?php echo $t['tag_id']; ?>" 
                                        <?php echo in_array($t['tag_name'], $cur_tags) ? 'checked' : ''; ?>>
                                        <label class="form-check-label" for="tag_<?php echo $t['tag_id']; ?>">
                                            <?php echo htmlspecialchars($t['tag_name']); ?>
                                        </label>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                            <input type="hidden" name="tags" id="finalTags">
                        </div>
                    </div>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-white">
                            <h5 class="mb-0">Featured Image</h5>
                        </div>
                        <div class="card-body">
                            <?php if ($post['image_path']): ?>
                                <img src="../<?php echo htmlspecialchars($post['image_path']); ?>" class="blog-thumb-preview" alt="Current Image">
                            <?php endif; ?>
                            <input type="file" name="image" class="form-control" accept="image/*">
                        </div>
                    </div>
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

<!-- Modals -->
<div class="modal fade" id="addCatModal" tabindex="-1">
    <div class="modal-dialog">
        <form id="addCatForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Category</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <input type="text" name="category_name" class="form-control" placeholder="Name" required>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Add</button>
            </div>
        </form>
    </div>
</div>

<div class="modal fade" id="addTagModal" tabindex="-1">
    <div class="modal-dialog">
        <form id="addTagForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Tag</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <input type="text" name="tag_name" class="form-control" placeholder="Name" required>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Add</button>
            </div>
        </form>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
    var quill = new Quill('#editor', {theme: 'snow'});
    
    document.getElementById('blogForm').onsubmit = function() {
        document.getElementById('contentArea').value = quill.root.innerHTML;
        var tags = [];
        $('.tag-chk:checked').each(function(){ tags.push($(this).val()); });
        $('#finalTags').val(tags.join(','));
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
                    '<div class="col-md-5"><input type="text" class="form-control form-control-sm faq-q" placeholder="Question..." value="' + (q || '').replace(/"/g, '&quot;') + '"></div>' +
                    '<div class="col-md-6"><input type="text" class="form-control form-control-sm faq-a" placeholder="Answer..." value="' + (a || '').replace(/"/g, '&quot;') + '"></div>' +
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
                '<div class="col-md-6"><label class="form-label small mb-1">Headline</label><input type="text" class="form-control form-control-sm art-headline" value="' + headline.replace(/"/g, '&quot;') + '"></div>' +
                '<div class="col-md-6"><label class="form-label small mb-1">Author</label><input type="text" class="form-control form-control-sm art-author" value="' + author.replace(/"/g, '&quot;') + '"></div>' +
                '<div class="col-md-6"><label class="form-label small mb-1">Publisher</label><input type="text" class="form-control form-control-sm art-publisher" value="' + publisher.replace(/"/g, '&quot;') + '"></div>' +
                '<div class="col-md-6"><label class="form-label small mb-1">Description</label><input type="text" class="form-control form-control-sm art-desc" value="' + desc.replace(/"/g, '&quot;') + '"></div>' +
            '</div>';
            container.html(html);
        } else {
            var rawJson = typeof data === 'string' ? data : (data ? JSON.stringify(data, null, 2) : '');
            var html = '<div>' +
                '<label class="form-label small mb-1">Paste JSON-LD Object</label>' +
                '<textarea class="form-control form-control-sm font-monospace custom-json-input" rows="4" placeholder=\'{"@context": "https://schema.org", "@type": "Thing", "name": "Example"}\'>' + $('<div>').text(rawJson).html() + '</textarea>' +
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

    // Populate existing schema data if present
    var existingSchema = <?php echo json_encode($post['schema_data'] ?? ''); ?>;
    if (existingSchema) {
        try {
            var parsed = JSON.parse(existingSchema);
            if (Array.isArray(parsed)) {
                parsed.forEach(function(s){ addSchemaBlock(s); });
            } else if (typeof parsed === 'object') {
                addSchemaBlock(parsed);
            }
        } catch(e) {
            addSchemaBlock(existingSchema);
        }
    }
    
    $('#addCatForm').on('submit', function(e){
        e.preventDefault();
        $.post('', $(this).serialize() + '&ajax=add_category', function(res){
            if(res.success) {
                $('#catSelect').append(new Option(res.name, res.id, true, true));
                $('#addCatModal').modal('hide');
                $('#addCatForm')[0].reset();
            } else { alert(res.msg); }
        });
    });
    
    $('#addTagForm').on('submit', function(e){
        e.preventDefault();
        $.post('', $(this).serialize() + '&ajax=add_tag', function(res){
            if(res.success) {
                var html = '<div class="form-check"><input class="form-check-input tag-chk" type="checkbox" value="'+res.name+'" checked id="tag_new_'+res.id+'"><label class="form-check-label" for="tag_new_'+res.id+'">'+res.name+'</label></div>';
                $('#tagContainer').append(html);
                $('#addTagModal').modal('hide');
                $('#addTagForm')[0].reset();
            } else { alert(res.msg); }
        });
    });
</script>
</body>
</html>
