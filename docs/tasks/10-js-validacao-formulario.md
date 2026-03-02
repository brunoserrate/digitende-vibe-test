# Task: Implementar validação de formulário em JavaScript

## Descrição
Criar validação do formulário de contato em JavaScript puro.

## Funcionalidades
- Validação em tempo real
- Validação ao submeter
- Mensagens de erro personalizadas
- Feedback visual de sucesso/erro

## Campos a validar
- Nome: obrigatório, mínimo 3 caracteres
- Email: obrigatório, formato válido
- Telefone: opcional, formato válido se preenchido
- Mensagem: obrigatório, mínimo 10 caracteres

## Implementação

### Funções
- `validateNome()`: valida nome
- `validateEmail()`: valida email
- `validateTelefone()`: valida telefone
- `validateMensagem()`: valida mensagem
- `validateForm()`: valida todo o formulário
- `showError()`: exibe erro
- `clearError()`: remove erro

### Eventos
- `input`: validação em tempo real
- `blur`: validação ao sair do campo
- `submit`: validação antes de enviar

### Feedback Visual
- Classe `.error` no input
- Mensagem de erro abaixo do input
- Cor da borda alterada
- Classe `.success` para campos válidos

## Critérios de Aceite
- [ ] Validação de nome implementada
- [ ] Validação de email implementada
- [ ] Validação de telefone implementada
- [ ] Validação de mensagem implementada
- [ ] Validação em tempo real funcionando
- [ ] Feedback visual implementado
- [ ] Mensagens de erro personalizadas

## Estimativa
40 minutos

## Dependências
- Task 02 - HTML estrutura
- Task 06 - CSS formulário contato

## Status
📋 Pendente