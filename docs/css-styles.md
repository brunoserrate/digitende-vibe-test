# CSS - Landing Page Digitende

## Estrutura de Arquivos

```
css/
├── style.css (principal)
├── reset.css
└── responsive.css
```

## Principais Estilos

### Cores
- Primária: #...
- Secundária: #...
- WhatsApp: #25D366

### Layout
- Grid/Flexbox para alinhamentos
- Container centralizado
- Responsivo (mobile-first)

### Componentes

#### Botão WhatsApp
```css
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}
```

#### Formulário
```css
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
```

### Media Queries
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Animações
- Hover nos botões
- Scroll reveal para seções
- Transições suaves

## Status
📋 Planejamento