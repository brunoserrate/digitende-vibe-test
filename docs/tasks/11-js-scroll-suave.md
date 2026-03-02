# Task: Implementar scroll suave em JavaScript

## Descrição
Criar funcionalidade de scroll suave para âncoras internas da página.

## Funcionalidades
- Scroll suave ao clicar em links internos
- Suporte a navegadores modernos e antigos
- Offset para header fixo
- Suave transição

## Links internos
- Links na navegação do header
- Links em CTA buttons
- Links em outras seções

## Implementação

### Seleção de links
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  // ...
});
```

### Comportamento do scroll
- Detectar clique em link com hash
- Prevenir comportamento padrão
- Encontrar elemento alvo
- Calcular offset (altura do header)
- Fazer scroll suave
- Adicionar focus acessível

### Fallback
- Polyfill para browsers antigos (se necessário)
- Fallback para scroll padrão

## Critérios de Aceite
- [ ] Scroll suave implementado para todos os links internos
- [ ] Offset para header fixo configurado
- [ ] Funciona em navegadores modernos
- [ ] Transição suave
- [ ] Acessibilidade mantida

## Estimativa
15 minutos

## Dependências
Task 02 - HTML estrutura

## Status
📋 Pendente