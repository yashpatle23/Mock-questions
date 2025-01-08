<?php
session_start();

function checkLogin() {
    if (!isset($_SESSION['username'])) {
        header("Location: login.html");
        exit();
    }
}

function getUsername() {
    return isset($_SESSION['username']) ? $_SESSION['username'] : null;
}
?>
