<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mock_test_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create scores table if not exists
$sql = "CREATE TABLE IF NOT EXISTS scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    score INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
$conn->query($sql);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['uname'];
    $password = password_hash($_POST['psw'], PASSWORD_DEFAULT);

    // Check if email is valid
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit();
    }

    // Check if username already exists
    $checkUser = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($checkUser);
    if ($result->num_rows > 0) {
        echo "Username already exists";
        exit();
    }

    $sql = "INSERT INTO users (name, email, username, password) VALUES ('$name', '$email', '$username', '$password')";

    if ($conn->query($sql) === TRUE) {
        $_SESSION['username'] = $username;
        echo "<script>console.log('Registration successful with username: $username');</script>";
        echo "<script>window.location.href='index.html?username=$username';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
