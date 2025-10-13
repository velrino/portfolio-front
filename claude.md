# Portfólio Front-end - Denis Magalhães (velrino)

## Sobre o Projeto
Portfólio pessoal de Denis Magalhães, conhecido como "velrino". Website moderno e responsivo com animações, internacionalização e modo escuro.

## Informações do Desenvolvedor
- **Nome:** Denis Magalhães
- **Apelido:** velrino
- **Cargo:** CTO & Tech Lead
- **Especialidades:** Full-stack, Arquitetura de Software, Microsserviços, Cloud-native

## Paleta de Cores

### Cores Principais
- **Primary (Purple)**: `#7c3dfd` - RGB(124, 61, 253)
- **Secondary (Navy)**: `#150b38` - RGB(21, 11, 56)
- **Accent (Pink)**: Usado em gradientes com purple

### Uso das Cores
- **Dark Mode** (Padrão):
  - Background: Escuro com gradientes
  - Primary: Purple `#7c3dfd` para CTAs e elementos importantes
  - Gradientes: Purple to Pink para botões e destaques
  - Cards: Background semi-transparente com backdrop blur

### Classes Tailwind Disponíveis
```tsx
// Primary (Purple)
className="bg-primary text-primary-foreground"
className="border-primary text-primary"

// Gradientes
className="bg-gradient-to-r from-purple-600 to-pink-600"

// Cards com Glassmorphism
className="bg-black/20 backdrop-blur-lg border border-white/10"
```

## Stack Tecnológica
- **Framework:** Next.js 15.5.4 (App Router)
- **React:** 19.1.0
- **TypeScript:** 5.x
- **Estilização:** Tailwind CSS 4.x + shadcn/ui
- **UI Components:** shadcn/ui (Radix UI + Tailwind)
- **Ícones:**
  - Lucide React
  - React Icons (FA icons)
  - Simple Icons (tech logos)
- **Animações:**
  - Framer Motion
  - Typewriter Effect
  - React Vertical Timeline
- **Temas:** next-themes (Dark/Light mode)
- **Linter:** ESLint 9.x
- **i18n:** Sistema customizado com Context API

## Estrutura do Projeto

```
portifolio-front/
├── src/
│   ├── app/                      # Páginas do Next.js (App Router)
│   │   ├── layout.tsx            # Layout principal com i18n e themes
│   │   ├── page.tsx              # Página inicial (/)
│   │   ├── cv/                   # Página de CV
│   │   │   └── page.tsx          # Página de CV (/cv)
│   │   └── globals.css           # Estilos globais + variáveis de tema
│   ├── components/               # Componentes React reutilizáveis
│   │   ├── ui/                   # Componentes shadcn/ui
│   │   │   ├── button.tsx
│   │   │   └── dropdown-menu.tsx
│   │   ├── pages/                # Componentes de página
│   │   │   └── home/
│   │   │       └── home.tsx      # Componente principal da home
│   │   ├── navigation/           # Componentes de navegação
│   │   │   └── navigation.tsx    # Navbar responsiva
│   │   ├── animate/              # Componentes de animação
│   │   │   ├── circuit.tsx       # Animação de circuitos
│   │   │   └── circuit-pulse.tsx # Animação de pulsos
│   │   ├── nested-orbit-system/  # Sistema de órbitas (Skills)
│   │   │   └── nested-orbit-system.tsx
│   │   ├── typewelcome/          # Typewriter welcome
│   │   │   └── typewriter-welcome.tsx
│   │   ├── VideoBackground.tsx   # Background com vídeo
│   │   ├── ThemeProvider.tsx     # Provider de tema
│   │   ├── ThemeToggle.tsx       # Toggle dark/light mode
│   │   └── LanguageSwitcher.tsx  # Seletor de idiomas
│   ├── lib/                      # Bibliotecas e configurações
│   │   ├── utils.ts              # Utilitários (cn, etc)
│   │   └── i18n/                 # Sistema de internacionalização
│   │       ├── LocaleContext.tsx # Context para gerenciar locale
│   │       ├── useTranslation.ts # Hook de tradução
│   │       └── locales/          # Arquivos de tradução
│   │           ├── en-US.json    # Traduções em inglês
│   │           └── pt-BR.json    # Traduções em português
│   ├── i18n/                     # Configuração next-intl
│   │   ├── routing.ts            # Configuração de rotas i18n
│   │   └── request.ts            # Configuração de requests
│   ├── types/                    # Definições de tipos TypeScript
│   └── styles/                   # Estilos adicionais
├── public/                       # Arquivos estáticos
│   ├── images/                   # Imagens
│   │   ├── me.jpeg               # Foto pessoal
│   │   ├── talk.png              # Foto da palestra
│   │   ├── meetup-*.jpg          # Fotos de meetups
│   │   └── adapta-*.jpg          # Fotos do projeto Adapta
│   ├── videos/                   # Vídeos
│   │   ├── landscape.mp4         # Vídeo background hero
│   │   └── feature_people_detected.mp4 # Vídeo demo Adapta
│   └── logo-white.png            # Logo
├── components.json               # Configuração do shadcn/ui
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── claude.md                     # Este arquivo
└── README.md                     # Documentação do projeto
```

## Seções da Home Page

### 1. Hero Section
- Background com vídeo em loop
- Título com nome
- Subtítulo com cargo
- Descrição com efeito typewriter (20 frases rotativas)
- CTA button

### 2. About Section
- Foto pessoal com hover overlay
- Texto sobre experiência e abordagem
- Integrações complexas com ícones de tecnologias
- Grid de fotos de workshops/palestras

### 3. Skills Section
- Sistema de órbitas animadas
- Tecnologias organizadas por categoria
- Interativo com hover effects

### 4. Experience Section
- Posição atual destacada (Signalz)
- Timeline vertical com posições anteriores
- Tech stack com ícones para cada posição
- Achievements detalhados

### 5. Awards Section
- Cards de prêmios com fotos
- Projeto Adapta Mídia em destaque
- Background: vídeo de demo full-width
- Features grid
- CTAs para website e demo

### 6. Talks Section
- Palestra ChatGPT + WhatsApp em destaque
- Background: foto da palestra full-width
- Grid de tópicos abordados
- Tech stack usado
- Link para slides

### 7. Contact Section
- Links para redes sociais
- Footer com copyright

## Scripts Disponíveis
- `npm run dev` - Inicia servidor de desenvolvimento (com Turbopack)
- `npm run build` - Build de produção (SEM Turbopack - bug conhecido)
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint

## Convenções de Código
- Utilizar componentes funcionais com TypeScript
- Seguir o padrão App Router do Next.js
- Componentes em PascalCase
- Arquivos de página seguem o padrão `page.tsx`
- Layouts seguem o padrão `layout.tsx`
- Usar `next/image` ao invés de `<img>` para otimização
- Evitar `any` types, usar `unknown` quando necessário

## Internacionalização (i18n)

### Idiomas Suportados
- **pt-BR** (Português Brasileiro) - Idioma padrão
- **en-US** (Inglês Americano)

### Estrutura de Traduções

#### Welcome Phrases (Typewriter)
- 20 frases rotativas sobre o profissional
- Localização: `welcome.phrases[]`
- Embaralhadas aleatoriamente no carregamento

#### Seções
- `navigation.*` - Menu de navegação
- `home.*` - Seção hero
- `about.*` - Seção sobre mim
- `skills.*` - Seção de habilidades
- `experience.*` - Experiência profissional
- `awards.*` - Prêmios e projetos
- `talks.*` - Palestras
- `contact.*` - Contato e redes sociais

### Como Funciona
- Sistema customizado usando React Context API
- Troca de idioma sem reload da página
- Persistência de preferência no localStorage
- Hook `useTranslation()` para acessar traduções

### Como Usar
```tsx
'use client';

import { useTranslation } from '@/lib/i18n/useTranslation';

export default function MyComponent() {
  const { t, locale } = useTranslation();

  return (
    <>
      <h1>{t('home.welcome')}</h1>
      {/* Para arrays */}
      {(t('welcome.phrases') as unknown as string[]).map(...)}
    </>
  );
}
```

### Adicionar Novas Traduções
1. Edite [en-US.json](src/lib/i18n/locales/en-US.json)
2. Edite [pt-BR.json](src/lib/i18n/locales/pt-BR.json)
3. Use a chave no formato `t('secao.chave')`

## Tema Dark/Light Mode

### Como Funciona
- Sistema de temas usando `next-themes`
- Suporte a 3 modos: Light, Dark e System (automático)
- Transição suave entre temas
- Persistência de preferência
- **Nota:** Atualmente otimizado para Dark Mode

### Componentes
- **ThemeProvider**: Wrapper que gerencia o tema
- **ThemeToggle**: Dropdown menu para selecionar tema

### Variáveis CSS
As variáveis de tema estão definidas em [globals.css](src/app/globals.css):
- `:root` - Variáveis do tema light
- `.dark` - Variáveis do tema dark

## Animações e Efeitos

### Framer Motion
- Animações de entrada (fade in, slide up)
- Scroll animations com `whileInView`
- Transições suaves entre estados

### Typewriter Effect
- 20 frases sobre o profissional
- Embaralhamento aleatório
- Loop infinito
- Velocidade customizada

### Background Effects
- Vídeos em loop para hero e seções
- Overlays escuros para legibilidade
- Parallax effects

### Component Animations
- Orbit system animado (skills)
- Timeline vertical com scroll reveal
- Hover effects em cards
- Glassmorphism com backdrop blur

## Otimizações de Performance

### Imagens
- Todas as imagens otimizadas com `next/image`
- Lazy loading automático
- Responsive images (width/height definidos)

### Build
- **Importante:** Build sem Turbopack devido a bug conhecido
- Compilação otimizada para produção
- Code splitting automático
- Static generation quando possível

### ESLint
- Todas as warnings resolvidas
- Sem erros de tipo
- Código limpo e manutenível

## Bugs Conhecidos

### Turbopack Build Error
- **Problema:** Erro "The high bits of the position" ao usar `--turbopack` no build
- **Solução:** Build configurado SEM `--turbopack` flag
- **Afetado:** Apenas build de produção, dev funciona normalmente
- **Arquivo:** `package.json` script `build`

## shadcn/ui

### Componentes Instalados
- **Button** - Botão customizável com variantes
- **Dropdown Menu** - Menu dropdown (usado no ThemeToggle e LanguageSwitcher)
- **Accordion** - Acordeão para conteúdo expansível
- **Dialog** - Modal/Dialog

### Adicionar Novos Componentes
```bash
npx shadcn@latest add [component-name]
```

Exemplos:
```bash
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
```

### Documentação
- [shadcn/ui](https://ui.shadcn.com/)
- Componentes em [src/components/ui/](src/components/ui/)

## Notas de Desenvolvimento
- O projeto usa Next.js 15 com App Router
- React 19.1.0 com suporte total ao Next.js 15
- Sistema de i18n customizado sem dependências externas
- shadcn/ui configurado e pronto para uso
- Dark mode configurado com next-themes
- Build otimizado SEM Turbopack
- Todas as imagens usando `next/image` para otimização
- Código TypeScript sem `any` types
- ESLint configurado e sem warnings
- Responsivo para mobile, tablet e desktop

## Deploy
- Build de produção: `npm run build`
- Start: `npm start`
- Arquivos gerados em `.next/`
- Pode ser deployado em Vercel, Netlify, ou qualquer plataforma que suporte Next.js

## Contato do Desenvolvedor
- **LinkedIn:** Disponível no site
- **GitHub:** Disponível no site
- **Instagram:** Disponível no site
- **Website:** https://adaptamidia.com.br (Projeto destaque)
