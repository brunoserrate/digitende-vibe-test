# Task: Implementar envio de formulário via AJAX

## Descrição
Criar funcionalidade para enviar o formulário via AJAX com feedback visual.

## Funcionalidades
- Envio assíncrono do formulário
- Feedback de carregamento
- Feedback de sucesso
- Feedback de erro
- Limpar formulário após sucesso

## Implementação

### Event Listener
```javascript
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Validação e envio
});
```

### Fetch API
- Coletar dados do formulário
- Enviar para PHP via POST
- Processar resposta JSON
- Exibir feedback

### Feedback Visual
- Loading: spinner ou texto "Enviando..."
- Success: mensagem verde + limpar formulário
- Error: mensagem vermelha com detalhes
- Estados visuais do formulário

### Tratamento de Erros
- Erros de rede
- Erros de validação do servidor
- Erros genéricos

## Critérios de Aceite
- [ ] Envia formulário via AJAX
- [ ] Feedback de loading exibido
- [ ] Feedback de sucesso exibido
- [ ] Feedback de erro exibido
- [ ] Formulário limpo após sucesso
- [ ] Erros tratados corretamente

## Estimativa
30 minutos

## Dependências
- Task 02 - HTML estrutura
- Task 10 - JS validação formulário
- Task 14 - PHP envio email

## Status
📋 Pendente