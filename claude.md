# Portfólio Front-end - Denis Magalhães (velrino)

## Sobre o Projeto
Portfólio pessoal de Denis Magalhães, conhecido como "velrino".

## Informações do Desenvolvedor
- **Nome:** Denis Magalhães
- **Apelido:** velrino

## Paleta de Cores

### Cores Principais
- **Primary (Purple)**: `#7c3dfd` - RGB(124, 61, 253)
- **Secondary (Navy)**: `#150b38` - RGB(21, 11, 56)

### Uso das Cores
- **Light Mode**:
  - Background: Branco
  - Primary: Purple `#7c3dfd` para CTAs e elementos importantes
  - Secondary: Navy `#150b38` para texto secundário e cards

- **Dark Mode**:
  - Background: Navy `#150b38`
  - Primary: Purple mais claro para contraste
  - Cards: Navy ligeiramente mais claro

### Classes Tailwind Disponíveis
```tsx
// Primary (Purple)
className="bg-primary text-primary-foreground"
className="border-primary text-primary"

// Secondary (Navy)
className="bg-secondary text-secondary-foreground"

// Outros
className="bg-accent text-accent-foreground"
```

## Stack Tecnológica
- **Framework:** Next.js 15.5.4 (App Router)
- **React:** 19.1.0
- **TypeScript:** 5.x
- **Estilização:** Tailwind CSS 4.x + shadcn/ui
- **UI Components:** shadcn/ui (Radix UI + Tailwind)
- **Ícones:** Lucide React
- **Temas:** next-themes (Dark/Light mode)
- **Linter:** ESLint 9.x
- **i18n:** Sistema customizado com Context API

## Estrutura do Projeto

```
portifolio-front/
├── src/
│   ├── app/                 # Páginas do Next.js (App Router)
│   │   ├── layout.tsx       # Layout principal com i18n e themes
│   │   ├── page.tsx         # Página inicial (/)
│   │   ├── cv/              # Página de CV
│   │   │   └── page.tsx     # Página de CV (/cv)
│   │   └── globals.css      # Estilos globais + variáveis de tema
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── ui/              # Componentes shadcn/ui
│   │   │   ├── button.tsx
│   │   │   └── dropdown-menu.tsx
│   │   ├── ThemeProvider.tsx     # Provider de tema (next-themes)
│   │   ├── ThemeToggle.tsx       # Toggle dark/light mode
│   │   └── LanguageSwitcher.tsx  # Seletor de idiomas
│   ├── lib/                 # Bibliotecas e configurações
│   │   ├── utils.ts         # Utilitários (cn, etc)
│   │   └── i18n/            # Sistema de internacionalização
│   │       ├── LocaleContext.tsx  # Context para gerenciar locale
│   │       ├── useTranslation.ts  # Hook de tradução
│   │       └── locales/           # Arquivos de tradução
│   │           ├── en-US.json     # Traduções em inglês
│   │           └── pt-BR.json     # Traduções em português
│   ├── types/               # Definições de tipos TypeScript
│   ├── utils/               # Funções utilitárias
│   └── styles/              # Estilos adicionais
├── public/                  # Arquivos estáticos
├── components.json          # Configuração do shadcn/ui
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── claude.md                # Este arquivo
```

## Páginas Implementadas
1. **Home (/)** - Página inicial do portfólio
2. **CV (/cv)** - Página de currículo

## Scripts Disponíveis
- `npm run dev` - Inicia servidor de desenvolvimento (com Turbopack)
- `npm run build` - Build de produção (com Turbopack)
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint

## Convenções de Código
- Utilizar componentes funcionais com TypeScript
- Seguir o padrão App Router do Next.js
- Componentes em PascalCase
- Arquivos de página seguem o padrão `page.tsx`
- Layouts seguem o padrão `layout.tsx`

## Internacionalização (i18n)

### Idiomas Suportados
- **pt-BR** (Português Brasileiro) - Idioma padrão
- **en-US** (Inglês Americano)

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

  return <h1>{t('home.welcome')}</h1>;
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

### Componentes
- **ThemeProvider**: Wrapper que gerencia o tema ([ThemeProvider.tsx](src/components/ThemeProvider.tsx))
- **ThemeToggle**: Dropdown menu para selecionar tema ([ThemeToggle.tsx](src/components/ThemeToggle.tsx))

### Variáveis CSS
As variáveis de tema estão definidas em [globals.css](src/app/globals.css):
- `:root` - Variáveis do tema light
- `.dark` - Variáveis do tema dark

## shadcn/ui

### Componentes Instalados
- **Button** - Botão customizável com variantes
- **Dropdown Menu** - Menu dropdown (usado no ThemeToggle e LanguageSwitcher)

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
- O projeto está configurado com Turbopack para builds mais rápidos
- Tailwind CSS está configurado na versão 4.x
- React 19.1.0 com suporte total ao Next.js 15
- Sistema de i18n customizado sem dependências externas
- shadcn/ui configurado e pronto para uso
- Dark mode configurado com next-themes
