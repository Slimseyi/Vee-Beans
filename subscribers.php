

<?php
if ($_SERVER["REQUEST_METHOD"] == "post") {
    $email = $_POST['variable']["email"];

    // Store the email address in a file or database
    $file = fopen("subscribers.txt", "a");
    fwrite($file, "$email\n");
    fclose($file);

    // Provide feedback to the user
    echo "Thank you for subscribing to our newsletter!";
}
?>
