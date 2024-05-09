<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION['first-name'] = $_POST['first-name'];
    $_SESSION['last-name'] = $_POST['last-name'];
    $_SESSION['user-email'] = $_POST['user-email'];
    $_SESSION['message'] = $_POST['message'];

    
    

    header('Location: thankYou.php');
    exit;
}
?>