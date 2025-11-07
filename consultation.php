<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['full_name'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $description = trim($_POST['request_description'] ?? '');

    $to = 'info@sanaatchi.com';
    $subject = "New Free Consultation Request from {$name}";

    $body = "New Free Consultation Request from sanaatchi.com:\n\n"
          . "Name:  {$name}\n"
          . "Phone: {$phone}\n"
          . 'Email: ' . ($email !== '' ? $email : 'Not provided') . "\n\n"
          . "Request Description:\n{$description}\n";

    $headers = "From: Sanaatchi Website <info@sanaatchi.com>\r\n";
    if ($email !== '') {
        $headers .= "Reply-To: {$email}\r\n";
    }

    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you, your request has been sent.';
    } else {
        echo 'Sorry, there was a problem sending your request.';
    }
}
?>
