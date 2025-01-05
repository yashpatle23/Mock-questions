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
