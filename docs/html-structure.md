# HTML - Landing Page Digitende

## Estrutura Principal

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digitende - Transforme seu Negócio</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Header -->
  <header>
    <nav>Logo</nav>
  </header>

  <!-- Hero Section -->
  <section id="hero">
    <h1>Transforme seu Negócio</h1>
    <p>Descrição do produto</p>
    <a href="https://wa.me/seu-numero" class="btn-whatsapp">Conversar no WhatsApp</a>
  </section>

  <!-- Benefícios -->
  <section id="beneficios">...</section>

  <!-- Formulário de Contato -->
  <section id="contato">
    <form action="php/send-email.php" method="POST">
      <input type="text" name="nome" required>
      <input type="email" name="email" required>
      <input type="tel" name="telefone">
      <textarea name="mensagem" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>

  <!-- WhatsApp Flutuante -->
  <a href="https://wa.me/seu-numero" class="whatsapp-float">
    <img src="images/whatsapp-icon.png" alt="WhatsApp">
  </a>

  <!-- Footer -->
  <footer>...</footer>

  <script src="js/main.js"></script>
</body>
</html>
```

## Requisitos
- HTML5 semântico
- Meta tags SEO
- Responsivo
- Acessibilidade (aria-labels)

## Status
📋 Planejamento