<?php
  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];
    $role = $_POST['role'];

    if ($password !== $confirmPassword) {
        die('Passwords do not match.');
    }

    $conn = new mysqli('localhost', 'root', '', 'relep');

    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, email, username, password, role) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $firstName, $lastName, $email, $username, $password, $role);

        if ($stmt->execute()) {
            header("Location: ../login.html");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
        $conn->close();
    }
  } else {
    echo "Invalid request method.";
  }
?>
