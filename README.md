# EAV Bank — Banco Digital Global

Plataforma de servicos financeiros digitais. Conta digital, cartao internacional Visa, transferencias para 150+ paises em ate 3 segundos, Pix, cambio e conta PJ.

**Powered by EAV7 Smart Chain**

---

## Stack

- **Framework:** Next.js 15.5 (App Router, TypeScript)
- **UI:** Tailwind CSS 4, Framer Motion 12
- **Fontes:** Space Grotesk (headings), Inter (body)
- **Deploy:** Static export (GitHub Pages)

## Estrutura

```
src/
  app/
    page.tsx                  # Landing page
    layout.tsx                # Root layout + metadata
    globals.css               # Design system
    institucional/            # 10 paginas institucionais
  components/
    landing/                  # Secoes da landing (Hero, Cards, Trust, FAQ...)
    institucional/            # Navegacao institucional
    ui/                       # Sistema de icones (Icon.tsx)
    EavLogo.tsx
  constants/
    translations.ts           # PT-BR / EN
    LangContext.tsx            # Bilinguismo via React Context
    eavMedia.ts               # Assets remotos
    basePath.ts               # Helper de path para deploy
public/
  images/                     # Imagens e assets estaticos
```

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`

## Build & Deploy

```bash
npm run build
```

Gera export estatico em `/out` pronto para GitHub Pages.

## Dados da empresa

**EAV7 Tecnologia e Pagamentos Ltda.**
CNPJ: 65.789.137/0001-12
Av. Brig. Faria Lima, 3.144 — Jardim Paulistano, Sao Paulo — SP
