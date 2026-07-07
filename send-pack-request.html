<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  exit("Method not allowed");
}

$to = "jake.shand@fibodo.com, james.murphy@fibodo.com";
$subject = "CORE Ready Educator Information Pack Request";

$firstName = htmlspecialchars(trim($_POST["first_name"] ?? ""));
$lastName = htmlspecialchars(trim($_POST["last_name"] ?? ""));
$email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
$organisation = htmlspecialchars(trim($_POST["organisation"] ?? ""));
$type = htmlspecialchars(trim($_POST["organisation_type"] ?? ""));
$learners = htmlspecialchars(trim($_POST["learners"] ?? ""));
$message = htmlspecialchars(trim($_POST["message"] ?? ""));

if (!$firstName || !$lastName || !$email || !$organisation || !$type || !$learners) {
  http_response_code(400);
  exit("Please complete all required fields.");
}

$body = "
New CORE Ready Educator Information Pack Request

Name: $firstName $lastName
Email: $email
Organisation: $organisation
Organisation type: $type
Number of learners per year: $learners

Course / learner cohort:
$message
";

$headers = "From: CORE Ready <no-reply@fibodo.com>\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
  header("Location: thank-you.html");
  exit;
} else {
  http_response_code(500);
  exit("Sorry, something went wrong. Please try again.");
}
?>
