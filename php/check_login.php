<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['username'])) {
    // User is logged in
    echo json_encode(['loggedin' => true, 'username' => $_SESSION['username'], 'firstname' => $_SESSION['firstname'], 'lastname' => $_SESSION['lastname']]);
} else {
    // User is not logged in
    echo json_encode(['loggedin' => false]);
}
?>
