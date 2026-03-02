<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode([
    'success' => false,
    'message' => 'Método não permitido'
  ]);
  exit;
}

$requiredFields = ['nome', 'email', 'mensagem'];
$missingFields = [];

foreach ($requiredFields as $field) {
  if (!isset($_POST[$field]) || trim($_POST[$field]) === '') {
    $missingFields[] = $field;
  }
}

if (!empty($missingFields)) {
  http_response_code(400);
  echo json_encode([
    'success' => false,
    'message' => 'Campos obrigatórios faltando',
    'errors' => $missingFields
  ]);
  exit;
}

$nome = htmlspecialchars(trim($_POST['nome']), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$telefone = isset($_POST['telefone']) ? htmlspecialchars(trim($_POST['telefone']), ENT_QUOTES, 'UTF-8') : '';
$mensagem = htmlspecialchars(trim($_POST['mensagem']), ENT_QUOTES, 'UTF-8');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode([
    'success' => false,
    'message' => 'Email inválido',
    'errors' => ['email']
  ]);
  exit;
}

$to = 'contato@digitende.com';
$subject = 'Contato via Landing Page - ' . $nome;

$body = "Nome: $nome\n";
$body .= "Email: $email\n";
if ($telefone) {
  $body .= "Telefone: $telefone\n";
}
$body .= "\nMensagem:\n$mensagem";

$headers = 'From: contato@digitende.com' . "\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();
$headers .= 'Content-Type: text/plain; charset=UTF-8';

$success = mail($to, $subject, $body, $headers);

if ($success) {
  echo json_encode([
    'success' => true,
    'message' => 'Mensagem enviada com sucesso!'
  ]);
} else {
  http_response_code(500);
  echo json_encode([
    'success' => false,
    'message' => 'Erro ao enviar mensagem. Tente novamente mais tarde.'
  ]);
}
