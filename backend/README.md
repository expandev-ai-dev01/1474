# DataFlow Backend API

Sistema simples e intuitivo para gerenciamento de registros, permitindo criar, visualizar, editar e excluir informações com praticidade.

## Features

- **Criação de Registros**: Permite aos usuários criar novos registros no sistema
- **Visualização de Registros**: Possibilita a consulta e visualização dos registros existentes
- **Edição de Registros**: Permite a modificação e atualização das informações
- **Exclusão de Registros**: Possibilita a remoção de registros do sistema
- **Interface Intuitiva**: API RESTful simples e fácil de usar

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: REST API

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## API Structure

```
/api/v1/external  - Public endpoints
/api/v1/internal  - Authenticated endpoints
/health           - Health check endpoint
```

## Project Structure

```
src/
├── api/              # API controllers
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── constants/        # Application constants
└── server.ts         # Application entry point
```

## Environment Variables

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3000)
- `API_VERSION` - API version (default: v1)
- `CORS_ORIGINS` - Allowed CORS origins (comma-separated)

## Development Guidelines

- Follow TypeScript strict mode
- Use ESLint for code quality
- Write tests for new features
- Follow REST API best practices
- Use semantic commit messages

## License

ISC
