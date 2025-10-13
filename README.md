# 🚀 Portfólio - Denis Magalhães (velrino)

Portfolio pessoal moderno e responsivo construído com Next.js 15, React 19, TypeScript e Tailwind CSS. Apresenta experiência profissional, projetos, prêmios e palestras com animações interativas e suporte multilíngue.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🎨 **Design Moderno** - Interface elegante com glassmorphism e gradientes
- 🌓 **Dark/Light Mode** - Suporte a temas com transições suaves
- 🌍 **Multilíngue** - PT-BR e EN-US com i18n customizado
- 📱 **Totalmente Responsivo** - Otimizado para mobile, tablet e desktop
- ⚡ **Performance** - Otimizado com Next.js Image, lazy loading e code splitting
- 🎬 **Animações** - Framer Motion, typewriter effects e animações customizadas
- 🎯 **SEO Otimizado** - Meta tags, sitemap e estrutura semântica
- ♿ **Acessível** - ARIA labels e navegação por teclado

## 🛠️ Stack Tecnológica

### Core
- **[Next.js 15.5.4](https://nextjs.org/)** - React Framework com App Router
- **[React 19.1.0](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type safety

### Styling & UI
- **[Tailwind CSS 4.x](https://tailwindcss.com/)** - Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizáveis
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis headless

### Animations & Effects
- **[Framer Motion](https://www.framer.com/motion/)** - Animações declarativas
- **[Typewriter Effect](https://www.npmjs.com/package/typewriter-effect)** - Efeito de digitação
- **[React Vertical Timeline](https://www.npmjs.com/package/react-vertical-timeline-component)** - Timeline animada

### Icons & Assets
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[React Icons](https://react-icons.github.io/react-icons/)** - Font Awesome icons
- **[Simple Icons](https://simpleicons.org/)** - Tech brand icons

### Tools & Utils
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas
- **[ESLint](https://eslint.org/)** - Linting
- **Custom i18n** - Sistema de internacionalização sem dependências

## 📁 Estrutura do Projeto

```
portifolio-front/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Layout raiz
│   │   ├── page.tsx                  # Home page
│   │   ├── cv/                       # Página de CV
│   │   └── globals.css               # Estilos globais
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components
│   │   ├── pages/home/               # Componentes da home
│   │   ├── navigation/               # Navbar
│   │   ├── animate/                  # Animações
│   │   ├── nested-orbit-system/      # Skills orbit
│   │   ├── typewelcome/              # Typewriter
│   │   └── VideoBackground.tsx
│   ├── lib/
│   │   ├── utils.ts                  # Utilitários
│   │   └── i18n/                     # Sistema i18n
│   │       ├── LocaleContext.tsx
│   │       ├── useTranslation.ts
│   │       └── locales/
│   │           ├── en-US.json
│   │           └── pt-BR.json
│   └── types/                        # TypeScript types
├── public/
│   ├── images/                       # Imagens
│   ├── videos/                       # Vídeos background
│   └── logo-white.png
└── ...config files
```

## 🚀 Getting Started

### Pré-requisitos
- Node.js 18.x ou superior
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/velrino/portfolio.git
cd portfolio/portifolio-front
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📜 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento (com Turbopack)
npm run build    # Build de produção
npm start        # Inicia servidor de produção
npm run lint     # Executa ESLint
```

## 🎨 Seções do Portfolio

### 🏠 Hero Section
- Background com vídeo em loop
- Efeito typewriter com 20 frases rotativas
- CTAs para projetos e contato

### 👤 About Section
- Foto pessoal com overlay interativo
- Experiência e abordagem profissional
- Showcase de integrações complexas (IA, Payments, Cloud, etc)
- Grid de fotos de workshops e palestras

### 💼 Skills Section
- Sistema de órbitas animadas
- Tecnologias organizadas por categorias
- Hover effects interativos

### 📊 Experience Section
- Posição atual em destaque
- Timeline vertical de experiências
- Tech stacks com ícones
- Achievements detalhados

### 🏆 Awards Section
- Cards de prêmios com fotos
- Projeto Adapta Mídia full-width
- Vídeo demo como background
- Features e CTAs

### 🎤 Talks Section
- Palestra ChatGPT + WhatsApp
- Background full-width com foto
- Grid de tópicos abordados
- Tech stack e slides

### 📧 Contact Section
- Links para redes sociais
- Footer com copyright

## 🌍 Internacionalização (i18n)

O projeto usa um sistema de i18n customizado com React Context:

```tsx
'use client';

import { useTranslation } from '@/lib/i18n/useTranslation';

export default function Component() {
  const { t, locale } = useTranslation();

  return <h1>{t('home.welcome')}</h1>;
}
```

### Idiomas Suportados
- 🇧🇷 Português Brasileiro (pt-BR) - Padrão
- 🇺🇸 Inglês Americano (en-US)

### Adicionar Traduções
1. Edite `src/lib/i18n/locales/en-US.json`
2. Edite `src/lib/i18n/locales/pt-BR.json`
3. Use `t('section.key')` no componente

## 🎭 Temas Dark/Light

O projeto usa `next-themes` para gerenciamento de temas:

- ☀️ Light Mode
- 🌙 Dark Mode (Padrão/Otimizado)
- 💻 System (Automático)

## 🚨 Issues Conhecidas

### Turbopack Build Error
- **Problema:** Erro ao usar `--turbopack` no build de produção
- **Solução:** Build configurado SEM `--turbopack`
- **Status:** Apenas afeta build, dev funciona normalmente

## 📦 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Deploy automático via Git push
```

### Outras Plataformas
```bash
npm run build
npm start
```

O projeto pode ser deployado em:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- Qualquer plataforma que suporte Next.js

## 🔧 Configuração

### shadcn/ui
Adicionar novos componentes:
```bash
npx shadcn@latest add [component-name]
```

Exemplos:
```bash
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
```

### Tailwind CSS
Configuração em `tailwind.config.ts`. O projeto usa Tailwind CSS 4.x com:
- Custom colors (purple/navy/pink)
- Glassmorphism utilities
- Responsive breakpoints
- Dark mode support

## 📝 License

Este projeto é de propriedade privada de Denis Magalhães (velrino).

## 👨‍💻 Autor

**Denis Magalhães**
- 🌐 Website: [https://adaptamidia.com.br](https://adaptamidia.com.br)
- 💼 LinkedIn: [Disponível no site]
- 🐙 GitHub: [Disponível no site]
- 📷 Instagram: [Disponível no site]

---

⭐ **Cargo:** CTO & Tech Lead
💼 **Especialidades:** Full-stack, Arquitetura de Software, Microsserviços, Cloud-native
🎯 **Missão:** Transformar desafios complexos em soluções escaláveis

---

Made with ❤️ by [velrino](https://github.com/velrino)
