<?php require_once 'header.php'; ?>
<?php require_once 'side-bar.php'; ?>

<main class="main-content">
    <div class="container-fluid">
        
        <!-- Welcome Section -->
        <div class="row mb-4">
            <div class="col-12">
                <div class="card bg-primary text-white p-4 border-0" style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 16px;">
                    <div class="d-flex justify-content-between align-items-center position-relative overflow-hidden">
                        <div style="z-index: 1;">
                            <h2 class="fw-bold mb-1 text-white">Welcome back, <?php echo htmlspecialchars($current_user); ?>!</h2>
                        </div>
                        <i class="fas fa-chart-line fa-4x opacity-25 position-absolute end-0 bottom-0 me-3 mb-n1"></i>
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats Grid -->
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-3">
                <div class="card h-100 border-0 shadow-sm hover-up">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="icon-shape bg-soft-primary text-primary rounded-3 p-3">
                                <i class="fas fa-users fa-lg"></i>
                            </div>
                            <span class="badge bg-soft-success text-success">+Active</span>
                        </div>
                        <h6 class="text-muted text-uppercase small fw-bold mb-1">Total Users</h6>
                        <h2 class="fw-bold mb-0">
                            <?php 
                            require_once 'secure/db_connect.php';
                            $result = $conn->query("SELECT count(*) as count FROM users");
                            echo $result ? $result->fetch_assoc()['count'] : 0;
                            ?>
                        </h2>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6 col-lg-3">
                 <div class="card h-100 border-0 shadow-sm hover-up">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="icon-shape bg-soft-info text-info rounded-3 p-3">
                                <i class="fas fa-file-alt fa-lg"></i>
                            </div>
                            <span class="badge bg-soft-info text-info">Total</span>
                        </div>
                        <h6 class="text-muted text-uppercase small fw-bold mb-1">Blog Posts</h6>
                        <h2 class="fw-bold mb-0">
                             <?php 
                            $result = $conn->query("SELECT count(*) as count FROM posts");
                            echo $result ? $result->fetch_assoc()['count'] : 0;
                            ?>
                        </h2>
                    </div>
                </div>
            </div>
            
             <div class="col-md-6 col-lg-3">
                 <div class="card h-100 border-0 shadow-sm hover-up">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="icon-shape bg-soft-warning text-warning rounded-3 p-3">
                                <i class="fas fa-tags fa-lg"></i>
                            </div>
                        </div>
                        <h6 class="text-muted text-uppercase small fw-bold mb-1">Categories</h6>
                        <h2 class="fw-bold mb-0">
                             <?php 
                            $result = $conn->query("SELECT count(*) as count FROM category");
                            echo $result ? $result->fetch_assoc()['count'] : 0;
                            ?>
                        </h2>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="row">
            <div class="col-12">
                <div class="card border-0 shadow-sm">
                    <div class="card-header bg-white border-bottom-0 pt-4 px-4">
                        <h5 class="fw-bold">Quick Actions</h5>
                    </div>
                    <div class="card-body px-4 pb-4">
                        <div class="d-flex flex-wrap gap-3">
                            <a href="create-user.php" class="btn btn-primary px-4 py-2">
                                <i class="fas fa-user-plus me-2"></i> Add New User
                            </a>
                            <a href="create-blog.php" class="btn btn-outline-primary px-4 py-2">
                                <i class="fas fa-pen-nib me-2"></i> Write New Blog
                            </a>
                            <a href="my-blogs.php" class="btn btn-outline-secondary px-4 py-2">
                                <i class="fas fa-list me-2"></i> Manage Posts
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</main>

<style>
/* Dashboard specific styles */
.bg-soft-primary { background-color: rgba(186, 12, 197, 0.1); }
.bg-soft-info { background-color: rgba(76, 201, 240, 0.1); }
.bg-soft-warning { background-color: rgba(252, 163, 17, 0.1); }
.bg-soft-success { background-color: rgba(40, 167, 69, 0.1); }

.hover-up { transition: all 0.3s ease; }
.hover-up:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.08) !important; }
</style>

</body>
</html>
