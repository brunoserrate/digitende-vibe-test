# Task: Implementar animações ao scroll (Intersection Observer)

## Descrição
Criar animações de entrada de elementos ao rolar a página usando Intersection Observer API.

## Elementos a animar
- Títulos de seções
- Cards de benefícios
- Itens da lista
- Imagens (se houver)
- Outros elementos de destaque

## Tipos de animações
- Fade in (aparecer suavemente)
- Slide up (subir)
- Slide left/right
- Scale (escala)

## Implementação

### Intersection Observer
- Criar observer com threshold
- Detectar quando elementos entram na viewport
- Adicionar classe de animação
- Opção de animar apenas uma vez ou a cada scroll

### Classes CSS
- `.reveal`: estado inicial (oculto)
- `.reveal.visible`: estado final (animado)
- Direções diferentes (up, left, right)

### Performance
- Usar transform e opacity (GPU accelerated)
- Evitar animações em elementos muitos
- Throttle se necessário

## Critérios de Aceite
- [ ] Intersection Observer configurado
- [ ] Animações funcionando ao scroll
- [ ] Classes CSS implementadas
- [ ] Performance otimizada
- [ ] Funciona em navegadores modernos
- [ ] Fallback para browsers antigos (opcional)

## Estimativa
25 minutos

## Dependências
Task 02 - HTML estrutura

## Status
📋 Pendente