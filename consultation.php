<?php
header('Content-Type: text/plain; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo 'Method Not Allowed. Please submit the form using POST.';
    exit;
}

function sanitize_input(?string $value): string {
    $value = trim($value ?? '');
    // Prevent header injection and strip control characters
    $value = str_replace(["\r", "\n"], ' ', $value);
    return preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value);
}

$name = sanitize_input($_POST['full_name'] ?? '');
$phone = sanitize_input($_POST['phone'] ?? '');
$email = sanitize_input($_POST['email'] ?? '');
$description = sanitize_input($_POST['request_description'] ?? '');

if ($name === '' || $phone === '' || $description === '') {
    http_response_code(400);
    echo 'Please complete the required fields: full name, phone number and request details.';
    exit;
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'Please provide a valid email address or leave the field blank.';
    exit;
}

$to = 'info@sanaatchi.com';
$subject = sprintf('New Free Consultation Request from %s', $name);

$bodyLines = [
    'New Free Consultation Request from sanaatchi.com:',
    '',
    'Name: ' . $name,
    'Phone: ' . $phone,
    'Email: ' . ($email !== '' ? $email : 'Not provided'),
    '',
    'Request Description:',
    $description !== '' ? $description : 'No additional details provided.'
];

$body = implode("\n", $bodyLines);

$headers = "From: Sanaatchi Website <info@sanaatchi.com>\r\n";
if ($email !== '') {
    $headers .= "Reply-To: {$email}\r\n";
}

if (mail($to, $subject, $body, $headers)) {
    echo 'Thank you, your request has been sent.';
} else {
    http_response_code(500);
    echo 'Sorry, there was a problem sending your request.';
}
?>
