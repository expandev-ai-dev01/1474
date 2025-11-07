# DataFlow - Sistema de Gerenciamento de Registros

Sistema simples e intuitivo para gerenciamento de registros, permitindo criar, visualizar, editar e excluir informações com praticidade.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Tailwind CSS 3.4.14
- Axios 1.7.7
- Zustand 5.0.1
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── main.tsx           # Entry point
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Providers globais
│   └── router.tsx         # Configuração de rotas
├── core/                   # Componentes e lógica compartilhada
│   ├── components/        # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── types/            # Types globais
│   └── utils/            # Funções utilitárias
├── domain/                # Domínios de negócio (a serem implementados)
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
└── assets/               # Assets estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Configurar variáveis de ambiente no .env
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```

## Funcionalidades

- ✅ **Criação de Registros**: Formulários intuitivos para criar novos registros
- ✅ **Visualização de Registros**: Consulta com filtragem e ordenação
- ✅ **Edição de Registros**: Atualização de informações existentes
- ✅ **Exclusão de Registros**: Remoção com confirmação
- ✅ **Interface Intuitiva**: Design simples e navegação clara

## Integração com Backend

O frontend está configurado para integrar com o backend REST API:

- **Endpoints Públicos**: `/api/v1/external/*`
- **Endpoints Autenticados**: `/api/v1/internal/*`

A configuração dos clientes HTTP está em `src/core/lib/api.ts`.

## Próximos Passos

1. Implementar domínios de negócio em `src/domain/`
2. Criar páginas específicas para CRUD de registros
3. Implementar autenticação e autorização
4. Adicionar testes unitários e de integração
5. Configurar CI/CD

## Licença

Proprietary - Todos os direitos reservados