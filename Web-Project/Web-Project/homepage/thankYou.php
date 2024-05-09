<?php

session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You</title>
    <link rel="stylesheet" href="thankYouStyles.css">
</head>

<body>
    <div class="thank-you-message hidden">
        <h1> Thank you for your message, <?php echo $_SESSION['first-name']; ?>!</h1>
        <br>
        <br>
        <h2>Here are the details you submitted: </h2>
        <br>
        <h4>First Name: <?php echo $_SESSION['first-name']; ?></h4>
        <br>
        <h4>Last Name: <?php echo $_SESSION['last-name']; ?></h4>
        <br>
        <h4>Email: <?php echo $_SESSION['user-email']; ?></h4>
        <br>
        <h4>Message: <?php echo $_SESSION['message']; ?></h4>
    </div>
    <script src="app.js"></script>
</body>

</html>