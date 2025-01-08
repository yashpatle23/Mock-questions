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

if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $sql = "SELECT score, created_at FROM scores WHERE username='$username' ORDER BY created_at DESC";
    $result = $conn->query($sql);
} else {
    echo "<script>window.location.href='../login.html';</script>";
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scores</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <header class="header">
        <a href="#" class="logo">MOCK TEST APPLICATION</a>
        <nav class="navbar">
            <a href="../index.html">Home</a>
            <a href="../about.html">About</a>
            <a href="../login.html">Login</a>
            <a href="../register.html">Register</a>
            <a href="scores.php">Scores</a>
        </nav>
    </header>
    <main class="main">
        <div class="centered-container">
            <div>
                <h1>Your Scores</h1>
                <?php
                if ($result->num_rows > 0) {
                    echo "<table><tr><th>Score</th><th>Time</th></tr>";
                    while($row = $result->fetch_assoc()) {
                        echo "<tr><td>" . $row["score"]. "</td><td>" . $row["created_at"]. "</td></tr>";
                    }
                    echo "</table>";
                } else {
                    echo "<p>No scores available</p>";
                }
                ?>
            </div>
        </div>
    </main>
    <footer class="footer">
        <p>&copy; 2023 Mock Test Application. All rights reserved.</p>
    </footer>
</body>
</html>
<?php
$conn->close();
?>
