# Guia Visual EAV Bank - Roadmap de Implementacao
## Baseado em pesquisa: Nubank, C6 Bank, Banco Inter

---

## 1. ANALISE COMPARATIVA - PADROES OBSERVADOS

### O que os 3 bancos tem em comum (e que o EAV Bank deve adotar):

| Padrao | Nubank | C6 Bank | Inter | EAV Bank (Atual) | Recomendacao |
|--------|--------|---------|-------|-------------------|--------------|
| **Tema base** | Light + Dark mode | Dark-first (#121212) | Light-first (#FFF) | Dark (#0c0a09) | Manter dark - alinhado com C6 |
| **Glassmorphism** | Header blur(50px) | Cards blur(7.5px) | Nao usa | Cards com blur | Expandir - header + cards |
| **Tipografia custom** | Nu Sans (propria) | C6 Sans (propria) | Citrina (propria) | System fonts | Manter fonts atuais, melhorar hierarchy |
| **Gradiente no texto** | Nao | Coral-to-gold no hero | Nao | Purple gradient | Refinar - mais sutil |
| **Botoes pill** | radius: 999px | radius: 16px | radius: 8-16px | Variado | Padronizar radius: 16px |
| **Fotos de pessoas** | Sim, lifestyle | Minimo | Sim, lifestyle | Nao tem | **ADICIONAR** - prioridade alta |
| **Animacoes scroll** | Sutis, fade-up | 250ms cubic-bezier | Framer Motion | Framer Motion | Ja possui - refinar timing |
| **Espacamento** | 4px base (generoso) | Generoso | 8px base | Adequado | Aumentar white space |
| **Navegacao fixa** | Fixed + glass | Fixed + transparent | Fixed/sticky | Fixed | Adicionar glassmorphism |

---

## 2. PALETA DE CORES - SISTEMA RECOMENDADO

### Manter a identidade roxa do EAV Bank, refinando com inspiracao nos bancos pesquisados:

```
CORES PRIMARIAS (manter identidade EAV):
--eav-purple:         #6336c4   (manter - cor principal)
--eav-purple-magenta: #b336c1   (manter - accent)
--eav-accent:         #8e59ff   (manter - glows/borders)

CORES DE FUNDO (inspirado C6 Bank - dark premium):
--eav-bg:             #0c0a09   (manter - profundo, premium)
--eav-bg-elevated:    #1c1917   (manter - cards base)
--eav-bg-glass:       rgba(28, 25, 23, 0.8)  (NOVO - glassmorphism como C6)

NEUTROS (inspirado Nubank - escala completa):
--eav-white:          #FAFAFA   (manter)
--eav-gray-100:       #F4F4F4   (NOVO - secoes alternadas)
--eav-gray-300:       #BFBEBE   (NOVO - textos secundarios)
--eav-gray-500:       #777777   (NOVO - textos desabilitados)
--eav-gray-700:       #414140   (NOVO - bordas sutis)
--eav-gray-900:       #2A2A2A   (NOVO - superficies elevadas)

FEEDBACK/SEMANTICAS (padrao dos 3 bancos):
--eav-success:        #3ED57D   (NOVO)
--eav-warning:        #EAA950   (NOVO)
--eav-error:          #FF6B6B   (NOVO)
--eav-info:           #409CFF   (NOVO)
```

### Gradientes recomendados:

```css
/* Hero - manter identidade roxa */
--gradient-hero: linear-gradient(135deg, #6336c4 0%, #b336c1 50%, #8e59ff 100%);

/* Premium card tier - inspirado no C6 Carbon gold */
--gradient-premium: linear-gradient(90deg, #8e59ff 0%, #c4b5fd 75%);

/* Texto hero - mais refinado */
--gradient-text: linear-gradient(91deg, #8e59ff 11%, #c4b5fd 50%, #b336c1 89%);

/* Overlay sobre imagens - padrao Nubank */
--gradient-overlay: linear-gradient(transparent, rgba(12, 10, 9, 0.85));

/* Glass background - padrao C6 */
--glass-bg: rgba(28, 25, 23, 0.8);
--glass-blur: blur(12px);
```

---

## 3. CORES POR PAGINA/SECAO (Diferenciadas)

Seguindo o padrao observado nos 3 bancos de variar cores entre secoes:

```
HERO SECTION:
  Fundo: Imagem de pessoa + gradient-overlay
  Texto: Branco (#FAFAFA) + gradient-text nos destaques
  CTA: Solido purple (#6336c4)

STATS SECTION:
  Fundo: #0c0a09 (base dark)
  Accent: Purple glow sutil
  Numeros: Branco, labels em --eav-gray-300

CARDS SHOWCASE:
  Fundo: Gradiente sutil de #0c0a09 para #1c1917
  Cards: Glass effect (rgba(28, 25, 23, 0.8) + blur)
  Destaques: --eav-accent (#8e59ff)

FEATURES SECTIONS:
  Fundo alternando: #0c0a09 / #1c1917 (como Nubank alterna branco/cinza)
  Imagens: Com pessoas reais + overlay roxo sutil
  Texto: Branco + muted para descricoes

TESTIMONIALS:
  Fundo: #1c1917 (elevado)
  Cards: Glass com borda roxa sutil
  Aspas/destaque: --eav-purple-light (#c4b5fd)

FAQ:
  Fundo: #0c0a09
  Bordas: --eav-gray-700
  Icone expand: --eav-accent

FOOTER:
  Fundo: #0c0a09 com borda top gradient (purple -> magenta)
  Links: --eav-gray-300, hover: #FAFAFA
```

---

## 4. ANIMACOES - PADRAO REFINADO

### Baseado nas melhores praticas observadas:

```css
/* TIMING FUNCTIONS (inspirado C6 Bank) */
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);   /* C6 Bank padrao */
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1); /* Para botoes */
--ease-smooth:  cubic-bezier(0.25, 0.1, 0.25, 1);  /* Para scroll reveals */

/* DURACOES (padrao dos 3 bancos) */
--duration-fast:   150ms;   /* Hover, focus */
--duration-normal: 250ms;   /* Transicoes padrao */
--duration-slow:   375ms;   /* Fade-in de secoes */
--duration-reveal: 600ms;   /* Scroll reveal */
```

### Animacoes por componente:

```
NAVEGACAO (inspirado Nubank):
  - Glassmorphism: backdrop-filter: blur(16px)
  - Background: rgba(12, 10, 9, 0.85)
  - Transicao ao scroll: opacity 0.85 -> 0.95
  - Links hover: color transition 150ms
  - Borda bottom: 1px gradient sutil

HERO (inspirado C6 + Nubank):
  - Texto: Staggered fade-up (0s, 0.1s, 0.2s delays)
  - Imagem de fundo: Ken Burns sutil (scale 1 -> 1.03 em 20s)
  - CTA: Scale 1 -> 1.03 no hover (150ms spring)
  - Background particles: Ja existe - manter

CARDS 3D (ja excelente - refinar):
  - Manter: 3D perspective, mouse tracking, fan layout
  - Adicionar: Glow pulse sutil ao redor do card ativo
  - Refinar: Transicao entre cards mais suave (300ms)

SCROLL REVEAL (padrao dos 3 bancos):
  - fadeUp: opacity 0->1, y: 24->0, duration 600ms
  - stagger entre elementos: 100ms
  - threshold: 0.15 (ativa quando 15% visivel)
  - Usar IntersectionObserver (ja implementado via Framer Motion)

HOVER EM BOTOES:
  - Scale: 1.02 (sutil, como Nubank)
  - Background: Lighten 10%
  - Shadow: Adicionar glow roxo sutil
  - Duracao: 200ms ease-default

NUMEROS/CONTADORES (Stats):
  - Manter animacao atual (easeOutCubic, 2s)
  - Adicionar: Glow pulse quando completa

MARQUEE:
  - Manter scroll infinito atual
  - Considerar: Pause on hover (padrao UX)
```

---

## 5. IMAGENS - ESTRATEGIA DE IMPLEMENTACAO

### O que falta no EAV Bank (baseado nos 3 bancos):

**PRIORIDADE ALTA - Adicionar fotos de pessoas:**

```
HERO SECTION:
  - Imagem: Pessoa profissional usando smartphone/cartao
  - Estilo: Lifestyle premium (como Nubank)
  - Tratamento: Overlay gradient escuro (transparent -> #0c0a09 85%)
  - Posicao: object-fit: cover, object-position: center 30%

FEATURE "CARTAO INTERNACIONAL":
  - Imagem: Pessoa viajando/em aeroporto com cartao
  - Tratamento: Overlay roxo sutil + blur nas bordas

FEATURE "PIX / TRANSFERENCIAS":
  - Imagem: Pessoa sorrindo olhando celular
  - Tratamento: Side crop, gradient lateral

FEATURE "INVESTIMENTOS / CRYPTO":
  - Imagem: Profissional confiante, ambiente tech
  - Tratamento: Overlay + glow roxo

TESTIMONIALS:
  - Avatares: Fotos reais de pessoas (nao ilustracoes)
  - Formato: Circular, borda gradient (purple -> magenta)
```

### Tratamento tecnico das imagens:

```css
/* Padrao para hero com pessoa (inspirado Nubank) */
.hero-image {
  object-fit: cover;
  object-position: center 33%;
  filter: brightness(0.7);
}

.hero-overlay {
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(12, 10, 9, 0.4) 50%,
    rgba(12, 10, 9, 0.9) 100%
  );
}

/* Padrao para feature images */
.feature-image {
  border-radius: 24px;
  overflow: hidden;
}

.feature-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(99, 54, 196, 0.15) 0%,
    transparent 60%
  );
}
```

### Sugestao de imagens (fontes livres de royalty):

```
Unsplash / Pexels - buscar por:
  - "person using banking app dark"
  - "professional with credit card"
  - "young adult smartphone finance"
  - "business person confident portrait"
  - "traveler airport premium"

Estilo das fotos:
  - Diversidade etnica (padrao Nubank)
  - Iluminacao natural ou ambiente premium
  - Expressoes confiantes e positivas
  - Background escuro ou neutro (facilita overlay)
  - Alta resolucao (min 1920px largura)
```

---

## 6. NAVEGACAO - UPGRADE RECOMENDADO

### Atual vs Recomendado:

```
ATUAL:
  - Fixed positioning
  - Background solido escuro

RECOMENDADO (inspirado Nubank + C6):
  - Fixed positioning (manter)
  - Height: 72px (mobile) / 80px (desktop)
  - Background: rgba(12, 10, 9, 0.85)
  - backdrop-filter: blur(16px) + saturate(180%)
  - Border-bottom: 1px solid rgba(99, 54, 196, 0.15)
  - Transicao suave ao scroll (background opacity aumenta)
  - z-index: 1000

  Logo: Esquerda
  Links: Centro (desktop)
  CTAs: Direita - "Abrir Conta" (primary pill) + "Login" (ghost)

  Mobile:
  - Hamburger animado (3 linhas -> X)
  - Menu full-screen com backdrop blur
  - Links com stagger animation (100ms entre cada)
```

---

## 7. BOTOES - SISTEMA PADRONIZADO

### Inspirado nos 3 bancos:

```css
/* PRIMARY (inspirado C6 - solido com contrast) */
.btn-primary {
  height: 52px;
  padding: 14px 28px;
  border-radius: 16px;
  background: #6336c4;
  color: #FAFAFA;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover {
  background: #5228a8;
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(99, 54, 196, 0.3);
}

/* SECONDARY (ghost/outline - padrao dos 3) */
.btn-secondary {
  height: 48px;
  padding: 12px 24px;
  border-radius: 16px;
  background: transparent;
  border: 1px solid rgba(250, 250, 250, 0.3);
  color: #FAFAFA;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-secondary:hover {
  border-color: rgba(250, 250, 250, 0.6);
  background: rgba(250, 250, 250, 0.05);
}

/* ACCENT (para CTAs principais - inspirado gradient C6) */
.btn-accent {
  height: 52px;
  padding: 14px 28px;
  border-radius: 16px;
  background: linear-gradient(135deg, #6336c4, #b336c1);
  color: #FAFAFA;
  font-weight: 500;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-accent:hover {
  transform: scale(1.02);
  box-shadow: 0 0 24px rgba(179, 54, 193, 0.35);
}
```

---

## 8. CARDS E SUPERFICIES - SISTEMA GLASS

### Inspirado em C6 Bank (glassmorphism refinado):

```css
/* CARD GLASS - Padrao base */
.card-glass {
  background: rgba(28, 25, 23, 0.75);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  border: 1px solid rgba(250, 250, 250, 0.06);
  border-radius: 20px;
  padding: 28px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.card-glass:hover {
  background: rgba(28, 25, 23, 0.85);
  border-color: rgba(99, 54, 196, 0.2);
  box-shadow: 0 8px 32px rgba(99, 54, 196, 0.08);
}

/* CARD ELEVATED - Para conteudo destacado */
.card-elevated {
  background: #1c1917;
  border: 1px solid rgba(250, 250, 250, 0.04);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

/* CARD FEATURED - Com borda gradient */
.card-featured {
  background: rgba(28, 25, 23, 0.8);
  border-radius: 24px;
  padding: 32px;
  position: relative;
}
.card-featured::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 24px;
  padding: 1px;
  background: linear-gradient(135deg, #6336c4, #b336c1, #8e59ff);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

---

## 9. ROADMAP DE IMPLEMENTACAO (Ordem de Prioridade)

### FASE 1 - Fundamentos (Impacto Alto, Esforco Baixo)
```
1.1 Atualizar CSS custom properties (novas cores, gradientes)
    Arquivo: src/app/globals.css
    Tempo estimado: Variavel

1.2 Padronizar botoes (primary, secondary, accent)
    Arquivo: Componentes que usam botoes

1.3 Refinar timing de animacoes (cubic-bezier padrao)
    Arquivo: src/components/landing/motion.ts

1.4 Adicionar cores semanticas (success, warning, error, info)
    Arquivo: src/app/globals.css
```

### FASE 2 - Navegacao Premium (Impacto Alto, Esforco Medio)
```
2.1 Glassmorphism no header (blur + transparencia)
    Arquivo: src/components/landing/SiteNav.tsx

2.2 Transicao suave ao scroll (background opacity)

2.3 Menu mobile com backdrop blur + stagger

2.4 Borda gradient sutil no bottom do nav
```

### FASE 3 - Imagens com Pessoas (Impacto Muito Alto, Esforco Medio)
```
3.1 Selecionar/obter 4-6 fotos premium de pessoas
    Fontes: Unsplash, Pexels (royalty-free)

3.2 Hero Section - adicionar imagem de pessoa como fundo
    Arquivo: src/components/landing/HeroSection.tsx
    Implementar: overlay gradient + Ken Burns animation

3.3 Feature Sections - adicionar imagens contextuais
    Arquivo: src/components/landing/FeatureSections.tsx
    Implementar: Side images com overlay roxo

3.4 Testimonials - avatares reais com borda gradient
    Arquivo: src/components/landing/TestimonialsSection.tsx
```

### FASE 4 - Refinamento Visual (Impacto Medio, Esforco Baixo)
```
4.1 Cards glass melhorados (hover com borda gradient)
    Todos os componentes com cards

4.2 Secoes com backgrounds alternados (#0c0a09 / #1c1917)
    Arquivo: src/app/page.tsx + secoes individuais

4.3 Espacamento mais generoso entre secoes
    Inspiracao: Nubank usa ate 240px de padding

4.4 Scrollbar custom refinado (ja existe - polir)
```

### FASE 5 - Animacoes Refinadas (Impacto Medio, Esforco Medio)
```
5.1 Scroll reveal com stagger (fadeUp em cascata)
    Arquivo: src/components/landing/motion.ts

5.2 Ken Burns no hero (zoom sutil em 20s)
    Arquivo: src/components/landing/HeroSection.tsx

5.3 Hover glow nos botoes CTA

5.4 Counter glow pulse ao completar (Stats)

5.5 Marquee pause on hover
```

### FASE 6 - Polish Final (Impacto Baixo, Esforco Baixo)
```
6.1 Focus states acessiveis (outline 2px, offset -4px)
    Inspiracao: Nubank

6.2 Reduced motion respect (prefers-reduced-motion)
    Ja parcialmente implementado - completar

6.3 Micro-interacoes em icones (hover rotate/scale)

6.4 Loading shimmer refinado
```

---

## 10. CHECKLIST VISUAL DE QUALIDADE

Antes de considerar cada pagina "pronta", verificar:

```
[ ] Background escuro premium (#0c0a09) consistente
[ ] Pelo menos 1 imagem com pessoa visivel above-the-fold
[ ] Glassmorphism no header (blur + transparencia)
[ ] Botoes com hover effect (scale + glow)
[ ] Cards com efeito glass e borda sutil
[ ] Espacamento generoso (min 64px entre secoes)
[ ] Animacoes de scroll suaves (fadeUp, 600ms)
[ ] Gradiente roxo usado com moderacao (nao excessivo)
[ ] Texto legivel (contraste min 4.5:1)
[ ] Cores semanticas para feedback (success/error/etc)
[ ] Mobile: Animacoes pesadas desabilitadas
[ ] Mobile: Touch targets min 44x44px
[ ] Scroll suave habilitado
[ ] Reduced motion respeitado
```

---

## RESUMO EXECUTIVO

O EAV Bank ja possui uma base solida de design dark premium com animacoes sofisticadas (3D cards, Framer Motion, particles). Os gaps principais em relacao aos concorrentes sao:

1. **Ausencia de fotos com pessoas** - Todos os 3 bancos usam lifestyle photography. Isso humaniza a marca e transmite confianca.

2. **Glassmorphism parcial** - Ja existe nos cards, mas falta no header (padrao Nubank + C6).

3. **Sistema de botoes inconsistente** - Os 3 bancos tem sistemas rigorosos. EAV precisa padronizar.

4. **Timing de animacoes** - Adotar o cubic-bezier(0.4, 0, 0.2, 1) do C6 como padrao universal.

5. **Espacamento mais generoso** - Nubank usa ate 240px de padding no hero. Mais white space = mais premium.

A identidade roxa do EAV Bank e um diferencial forte - nenhum dos 3 concorrentes usa roxo como cor primaria. Manter e refinar essa identidade, adicionando os elementos faltantes, resultara em um visual que compete diretamente com Nubank, C6 e Inter.
