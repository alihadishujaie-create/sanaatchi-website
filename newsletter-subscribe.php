<?php
header('Content-Type: text/plain; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo 'Method Not Allowed. Please submit the form using POST.';
    exit;
}

function sanitize_email_input(?string $value): string {
    $value = trim($value ?? '');
    $value = str_replace(["\r", "\n"], ' ', $value);
    return preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value);
}

$email = sanitize_email_input($_POST['newsletter_email'] ?? '');

if ($email === '') {
    http_response_code(400);
    echo 'Email is required.';
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'Please provide a valid email address.';
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
    http_response_code(500);
    echo 'Subscription failed. Please try again.';
}
?>
