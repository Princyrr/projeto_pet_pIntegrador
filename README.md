# Projeto de Agendamento de Pet 🐶🐱

Este projeto é um sistema de agendamento de serviços para pets de banho e tosa, utilizando React no frontend e Express no backend.

**Integrantes do Grupo 03**
- Caique Dos Santos Filgueiras
- Daniel Soares
- José Teodoro De Araújo
- Larissa Lima Barreis
- Mariana De Carvalho Fernandes
- Priscila Ramonna da Silva Pires


## 📌Descrição

O sistema permite que os donos de pets agendem serviços para seus animais de estimação. Ele conta com um formulário no frontend onde o usuário insere informações como nome do pet, tipo de serviço e outros detalhes. Essas informações são enviadas para o backend, que gerencia e armazena os agendamentos.

## 🚀 Funcionalidades

📅 Cadastro de agendamentos para serviços de pets (banho, tosa, etc.).

👀 Visualização dos agendamentos feitos.

❌ Exclusão de agendamentos.

🛠️ Tecnologias Utilizadas

## Frontend:

⚛️ React – Biblioteca Typescript para construção de interfaces de usuário.

🎨 Tailwind CSS – Framework CSS para estilização rápida e responsiva.

🔤 Lucide React – Conjunto de ícones para React.

## Backend:

🟢 Node.js – Ambiente de execução para JavaScript no backend.

🚀 Express – Framework para criação de servidores web em Node.js.

🔗 CORS – Middleware para permitir requisições de diferentes origens.

📦 Body-Parser – Middleware para analisar o corpo das requisições HTTP.

📌 Como Rodar o Projeto

Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

Node.js (versão 18 ou superior).

NPM (gerenciador de pacotes).


## Rodando o Frontend

Navegue até a pasta do frontend:

cd frontend
Instale as dependências:

npm install
Inicie o servidor de desenvolvimento:

npm run dev

Local: http://localhost:5173/

## Rodando o Backend

Navegue até a pasta do backend no terminal:

cd backend
Instale as dependências:

npm install
Inicie o servidor:

npm start
O backend estará rodando na porta 5000 por padrão. Você pode acessar as rotas da API em http://localhost:5000.


## 🌐 Endpoints da API

Se estiver utilizando o Insomnia ou Postman, aqui estão os endpoints disponíveis:

GET /appointments: Retorna todos os agendamentos.

POST /appointments: Adiciona um novo agendamento.

PUT /appointments/:id: Edita um agendamento pelo ID.

DELETE /appointments/:id: Exclui um agendamento pelo ID.
