# Task: Implementar envio de email em PHP

## Descrição
Criar arquivo php/send-email.php para processar e enviar emails do formulário de contato.

## Funcionalidades
- Receber dados do formulário
- Validar dados
- Sanitizar inputs
- Enviar email
- Retornar resposta JSON

## Configurações
- Email de destino: configurável
- Assunto: configurável
- Charset: UTF-8

## Implementação

### 1. Headers PHP
```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
```

### 2. Receber e validar dados
- Verificar método POST
- Validar campos obrigatórios
- Validar formato de email

### 3. Sanitização
- htmlspecialchars() para XSS
- filter_var() para email
- Remover whitespace

### 4. Construir email
- Assunto
- Corpo com campos formatados
- Headers (From, Reply-To, Content-Type)

### 5. Envio
- Função mail()
- Verificar sucesso/falha

### 6. Resposta JSON
- Success: {success: true, message: "..."}
- Error: {success: false, message: "...", errors: [...]}

## Segurança
- Sanitização XSS
- Validação de email
- Rate limiting (opcional)
- Proteção contra injeção de headers

## Critérios de Aceite
- [ ] Recebe dados do formulário
- [ ] Valida todos os campos
- [ ] Sanitiza inputs
- [ ] Envia email corretamente
- [ ] Retorna JSON apropriado
- [ ] Trata erros
- [ ] Segurança implementada

## Estimativa
40 minutos

## Dependências
Nenhuma

## Status
📋 Pendente