<?php
require_once __DIR__ . '/secure/auth.php';
require_login();
// user details from session
$current_user = $_SESSION['username'] ?? 'Admin';
$current_role = $_SESSION['role'] ?? 'Administrator';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - MyActivity</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Bootstrap -->
    <!-- Bootstrap CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/admin.css">
</head>
<body>

<!-- Mobile Toggle -->
<header class="main-header">
    <div class="header-left d-flex align-items-center">
        <button class="toggle-sidebar" id="sidebarToggle">
            <i class="fas fa-bars"></i>
        </button>
        <h2>Dashboard</h2>
    </div>
    
    <div class="header-right">
        <div class="user-profile dropdown">
            <div class="text-end me-2 d-none d-sm-block">
                <div class="fw-bold"><?php echo htmlspecialchars($current_user); ?></div>
                <div class="text-muted small"><?php echo htmlspecialchars($current_role); ?></div>
            </div>
            <div class="user-avatar">
                <?php echo strtoupper(substr($current_user, 0, 1)); ?>
            </div>
        </div>
    </div>
</header>
