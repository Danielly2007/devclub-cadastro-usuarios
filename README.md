# Frontend - Gerenciamento de Usuários (React)

### Descrição

Este projeto é um frontend pronto em React, desenvolvido como base para integração com diferentes backends.
A interface permite listar, adicionar e remover usuários, funcionando apenas com estado local, mas facilmente adaptável para consumir APIs externas.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Estrutura do Projeto

src/
 ├── assets/
 
 │   └── img/
 
 │       └── delete.png       # ícone de deletar usuário
 
 ├── pages/
 
 │   └── Home/
 
 │       ├── index.jsx        # componente principal (tela inicial)
 
 │       └── style.css        # estilos da página
 
 ├── index.css                # estilos globais
 
 └── main.jsx                 # ponto de entrada da aplicação


# Funcionalidades

- Cadastrar usuário (nome, idade e e-mail)
- Deletar usuário
- Exibir lista de usuários cadastrados
- Layout simples e responsivo

### Importante:
Este projeto não possui backend integrado.
Os dados dele estão integrados em uma constante.
Desenvolvedores podem conectar o front com qualquer API REST, Node, Spring, etc.

# Tecnologias

- React
- JavaScript (ES6+)
- CSS
- Vite

# Como Rodar o Projeto

### Clonar o repositório
```bash 
git clone url-do-repo
```

### Acessar a pasta
```bash 
cd devclub-cadastro-usuarios
```

### Instale as dependências
```bash 
npm install
```

### Rodar o app
```bash 
npm run dev
```

# Possível Integração com Backend
Para conectar este frontend a um backend, basta:

1. Criar uma API que forneça rotas como:

- GET /users
- POST /users
- DELETE /users/:id

2. Usar axios no React para consumir as rotas:

```bash 
npm install axios
```

```bash 
import axios from "axios"; 
```

# Observações

- Projeto criado para fins didáticos e de integração.
- Pode ser adaptado para diferentes bancos de dados e linguagens no backend.
- Ideal para estudantes ou devs que querem praticar conexão entre front e back.
