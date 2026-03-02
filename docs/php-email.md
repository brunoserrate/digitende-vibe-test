# PHP - Envio de Email

## Arquivo: `php/send-email.php`

### Configuração

```php
<?php
// Configurações de email
$to = "contato@digitende.com";
$subject = "Novo contato do site";

// Sanitização de dados
$nome = htmlspecialchars($_POST['nome']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$telefone = htmlspecialchars($_POST['telefone']);
$mensagem = htmlspecialchars($_POST['mensagem']);
```

### Validação

```php
$errors = [];

if (empty($nome)) {
  $errors[] = "Nome é obrigatório";
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $errors[] = "Email inválido";
}

if (empty($mensagem)) {
  $errors[] = "Mensagem é obrigatória";
}
```

### Envio do Email

```php
if (empty($errors)) {
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $body = "Nome: $nome\n";
  $body .= "Email: $email\n";
  $body .= "Telefone: $telefone\n\n";
  $body .= "Mensagem:\n$mensagem";

  if (mail($to, $subject, $body, $headers)) {
    $response = ['success' => true, 'message' => 'Email enviado com sucesso!'];
  } else {
    $response = ['success' => false, 'message' => 'Erro ao enviar email'];
  }
} else {
  $response = ['success' => false, 'errors' => $errors];
}

header('Content-Type: application/json');
echo json_encode($response);
?>
```

## Segurança
- Sanitização XSS
- Validação de email
- Proteção contra injeção de headers
- Rate limiting (opcional)

## Requisitos do Servidor
- PHP 7.4+
- Função mail() habilitada
- Configuração SMTP (opcional para melhor deliverability)

## Alternativas
- PHPMailer
- SendGrid API
- AWS SES

## Status
📋 Planejamento