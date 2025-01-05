<?php
session_start();
$servername = "mocktestdb.c5k44400ucqt.eu-north-1.rds.amazonaws.com";
$username = "admin";
$password = "SecurePass123!";
$dbname = "mocktestdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_SESSION['username']) && isset($_POST['score'])) {
    $username = $_SESSION['username'];
    $score = $_POST['score'];

    $sql = "INSERT INTO scores (username, score) VALUES ('$username', '$score')";

    if ($conn->query($sql) === TRUE) {
        echo "Score saved successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
