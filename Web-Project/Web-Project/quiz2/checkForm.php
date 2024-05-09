<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-color: #2b2b2b;
            color: #a9b7c6;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            text-align: center;
            border-radius: 8px;
            background-color: #3c3f41;
            padding: 20px;
            width: 80%;
            max-width: 800px;
        }
        h1, h2 {
            color: #cc7832;
        }
        h2 {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <?php
        // Check if form is submitted
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Get form data
            $q1 = $_POST['q1'];
            $q2 = $_POST['q2'];
            $q3 = $_POST['q3'];
            $q4 = $_POST['q4'];
            $q5 = $_POST['q5'];
            $q6 = $_POST['q6'];
            $q7 = $_POST['q7'];
            $q8 = $_POST['q8'];
            $q9 = $_POST['q9'];
            $q10 = $_POST['q10'];

            // Calculate results
            $score = 0;
            if (strtolower($q1) == "real madrid") $score++;
            if (strtolower($q2) == "manchester united") $score++;
            if (strtolower($q3) == "maradona") $score++;
            if (strtolower($q4) == "messi") $score++;
            if (strtolower($q5) == "6") $score++;
            if (strtolower($q6) == "spain") $score++;
            if (strtolower($q7) == "materazzi") $score++;
            if (strtolower($q8) == "uruguay") $score++;
            if (strtolower($q9) == "messi") $score++;
            if (strtolower($q10) == "camp nou") $score++;

            // Display results
            echo "<h1>Your Score: $score/10</h1>";
            echo "<h2>Your Answers:</h2>";
            echo "Question 1: " . htmlspecialchars($q1) . "<br>";
            echo "Question 2: " . htmlspecialchars($q2) . "<br>";
            echo "Question 3: " . htmlspecialchars($q3) . "<br>";
            echo "Question 4: " . htmlspecialchars($q4) . "<br>";
            echo "Question 5: " . htmlspecialchars($q5) . "<br>";
            echo "Question 6: " . htmlspecialchars($q6) . "<br>";
            echo "Question 7: " . htmlspecialchars($q7) . "<br>";
            echo "Question 8: " . htmlspecialchars($q8) . "<br>";
            echo "Question 9: " . htmlspecialchars($q9) . "<br>";
            echo "Question 10: " . htmlspecialchars($q10) . "<br>";
        }
        ?>
    </div>
</body>
</html>

