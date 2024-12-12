<?php
// Vulnerable Web Page Example

// Reflective XSS
if (isset($_GET['name'])) {
    $name = $_GET['name'];
    echo "Hello, " . $name; // No sanitization
}

// Open Redirect
if (isset($_GET['redirect'])) {
    $redirect = $_GET['redirect'];
    header("Location: $redirect"); // No validation
    exit;
}

// Local File Inclusion
if (isset($_GET['file'])) {
    $file = $_GET['file'];
    include($file); // No validation
}

?>
