<?php
require_once 'header.php';
require_once 'side-bar.php';
require_once 'secure/db_connect.php';

$id = $_SESSION['user_id'];

// Fetch current user details
$stmt = $conn->prepare("SELECT username, email, role FROM users WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();
$stmt->close();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    
    $valid = true;
    
    if (!empty($password)) {
        if ($password !== $confirm_password) {
            $error = "Passwords do not match.";
            $valid = false;
        }
    }
    
    if ($valid) {
        $sql = "UPDATE users SET email = ?";
        $types = "s";
        $params = [$email];
        
        if (!empty($password)) {
            $sql .= ", password = ?";
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $types .= "s";
            $params[] = $hash;
        }
        
        $sql .= " WHERE id = ?";
        $types .= "i";
        $params[] = $id;
        
        $update = $conn->prepare($sql);
        $update->bind_param($types, ...$params);
        
        if ($update->execute()) {
            $success = "Profile updated successfully.";
            $_SESSION['email'] = $email; // Update session
             $user['email'] = $email;
        } else {
            $error = "Failed to update profile.";
        }
        $update->close();
    }
}
?>

<main class="main-content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <h3 class="fw-bold mb-4">My Profile</h3>

                <?php if (isset($success)): ?>
                    <div class="alert alert-success"><?php echo $success; ?></div>
                <?php endif; ?>
                <?php if (isset($error)): ?>
                    <div class="alert alert-danger"><?php echo $error; ?></div>
                <?php endif; ?>

                <div class="card">
                    <div class="card-body">
                        <div class="d-flex flex-column align-items-center mb-4">
                            <div class="user-avatar mb-3" style="width: 80px; height: 80px; font-size: 2rem;">
                                <?php echo strtoupper(substr($user['username'], 0, 1)); ?>
                            </div>
                            <h4 class="mb-1"><?php echo htmlspecialchars($user['username']); ?></h4>
                            <span class="badge badge-warning"><?php echo htmlspecialchars($user['role']); ?></span>
                        </div>

                        <!-- View Mode -->
                        <div id="view-profile" style="<?php echo isset($error) ? 'display:none;' : ''; ?>">
                             <div class="mb-3">
                                <label class="form-label text-muted small text-uppercase fw-bold">Email Address</label>
                                <p class="lead"><?php echo htmlspecialchars($user['email']); ?></p>
                            </div>
                            <hr class="my-4">
                            <div class="d-grid">
                                <button type="button" class="btn btn-outline-primary" id="btn-edit-profile">
                                    <i class="fas fa-edit me-2"></i> Edit Profile
                                </button>
                            </div>
                        </div>

                        <!-- Edit Mode -->
                        <div id="edit-profile" style="<?php echo isset($error) ? '' : 'display:none;'; ?>">
                            <form method="POST">
                                <div class="mb-3">
                                    <label class="form-label">Email Address</label>
                                    <input type="email" name="email" class="form-control" value="<?php echo htmlspecialchars($user['email']); ?>">
                                </div>
                                
                                <hr class="my-4">
                                <h5 class="mb-3">Change Password</h5>
                                
                                <div class="mb-3">
                                    <label class="form-label">New Password</label>
                                    <input type="password" name="password" class="form-control" placeholder="Leave blank to keep current">
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label">Confirm New Password</label>
                                    <input type="password" name="confirm_password" class="form-control" placeholder="Confirm new password">
                                </div>
                                
                                <div class="d-grid gap-2">
                                    <button type="submit" class="btn btn-primary">Save Changes</button>
                                    <button type="button" class="btn btn-light" id="btn-cancel-edit">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <script>
                        document.getElementById('btn-edit-profile').addEventListener('click', function() {
                            document.getElementById('view-profile').style.display = 'none';
                            document.getElementById('edit-profile').style.display = 'block';
                        });

                        document.getElementById('btn-cancel-edit').addEventListener('click', function() {
                            document.getElementById('edit-profile').style.display = 'none';
                            document.getElementById('view-profile').style.display = 'block';
                        });
                    </script>
                </div>
            </div>
            
            <div class="col-md-6">
                <!-- Additional profile info or stats could go here -->
                <div class="card">
                    <div class="card-header">
                         <h5>Account Security</h5>
                    </div>
                    <div class="card-body">
                         <p class="text-muted">Last login: <?php echo isset($_SESSION['login_time']) ? $_SESSION['login_time'] : 'Just now'; ?></p>
                         <p class="text-muted">Password last changed: Never</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</body>
</html>
