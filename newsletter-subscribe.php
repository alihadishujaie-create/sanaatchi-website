<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['newsletter_email'] ?? '');

    if ($email === '') {
        echo 'Email is required.';
        exit;
    }

    $to = 'china@sanaatchi.com';
    $subject = 'New Newsletter Subscription – Sanaatchi';
    $body = "New newsletter subscriber from sanaatchi.com:\n\nEmail: {$email}\n";

    $headers  = "From: Sanaatchi Website <info@sanaatchi.com>\r\n";
    $headers .= "Reply-To: {$email}\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for subscribing!';
    } else {
        echo 'Subscription failed. Please try again.';
    }
}
?>
