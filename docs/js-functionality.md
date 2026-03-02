# JavaScript - Landing Page Digitende

## Funcionalidades

### 1. Validação de Formulário
- Validação em tempo real
- Mensagens de erro personalizadas
- Feedback de envio

```javascript
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    form.submit();
  }
});
```

### 2. Scroll Suave
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
```

### 3. Animações ao Scroll (Intersection Observer)
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
```

### 4. Navbar Fixa com Background ao Scroll
```javascript
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
```

## Status
📋 Planejamento