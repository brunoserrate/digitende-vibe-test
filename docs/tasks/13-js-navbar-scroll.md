# Task: Implementar navbar fixa com background ao scroll

## Descrição
Criar funcionalidade para mudar o background do header ao rolar a página.

## Comportamento
- Header transparente no topo da página
- Header com background sólido ao scroll
- Transição suave
- Links com contraste ajustado

## Estados
- Estado inicial (topo): transparente
- Estado scrolled: background sólido
- Transição suave entre estados

## Implementação

### Event Listener
```javascript
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
```

### Estilos CSS
- `.header.scrolled`: background sólido
- Transições suaves
- Links com contraste ajustado se necessário
- Sombra opcional no estado scrolled

### Threshold
- Altura do scroll para ativar: 100px
- Ajustável conforme necessário

## Critérios de Aceite
- [ ] Event listener configurado
- [ ] Classe `.scrolled` adicionada/removida corretamente
- [ ] Transição suave implementada
- [ ] Background sólido aplicado ao scroll
- [ ] Links com contraste adequado

## Estimativa
15 minutos

## Dependências
- Task 02 - HTML estrutura
- Task 08 - CSS header/footer

## Status
📋 Pendente