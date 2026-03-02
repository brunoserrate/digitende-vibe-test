# Task: Implementar acessibilidade

## Descrição
Melhorar a acessibilidade da Landing Page para usuários com deficiências.

## Critérios WCAG 2.1

### Percebível
- Alt text em imagens
- Texto legível (contraste)
- Legendas em mídia (se aplicável)
- Redimensionar texto até 200%

### Operável
- Navegação por teclado
- Sem conteúdo que pisca
- Links com texto descritivo
- Labels em formulários
- Foco visível

### Compreensível
- Língua declarada (lang)
- Consistência de navegação
- Prevenção de erros (validação)

### Robusto
- HTML válido
- ARIA attributes quando necessário

## Implementação

### HTML
- alt text em todas as imagens
- aria-label em links sem texto
- for em labels de formulário
- role quando apropriado

### CSS
- Contraste de cor mínimo 4.5:1
- Focus states visíveis
- Texto redimensionável
- Skip links

### JavaScript
- Não interferir com navegação por teclado
- Focus management
- Anúncio de mudanças

## Critérios de Aceite
- [ ] Alt text em todas as imagens
- [ ] Contraste de cores adequado
- [ ] Navegação por teclado funcional
- [ ] Labels em todos os inputs
- [ ] Focus visível
- [ ] aria-labels implementados
- [ ] HTML válido

## Estimativa
25 minutos

## Dependências
Task 02 - HTML estrutura

## Status
📋 Pendente