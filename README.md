﻿# Projeto de Agendamento de Pet 🐶🐱

Este projeto é um sistema de agendamento de serviços para pets de banho e tosa, utilizando **React** no frontend e **Express** no backend.

---

## 👥 Integrantes do Grupo 03

- Caique Dos Santos Filgueiras  
- Daniel Soares  
- José Teodoro De Araújo  
- Larissa Lima Barreis  
- Mariana De Carvalho Fernandes  
- Priscila Ramonna da Silva Pires  

---

## 📌 Descrição

O sistema permite que os donos de pets agendem serviços para seus animais de estimação.  
Ele conta com um formulário no frontend onde o usuário insere informações como nome do pet, tipo de serviço e outros detalhes. Essas informações são enviadas para o backend, que gerencia e armazena os agendamentos.

O sistema também está integrado com o **MongoDB Atlas**, permitindo que os agendamentos sejam armazenados e acessados remotamente.

---

## 🚀 Funcionalidades

- 📅 Cadastro de agendamentos para serviços de pets (banho, tosa, etc.)
- 👀 Visualização dos agendamentos feitos
- ❌ Exclusão de agendamentos

---

## 🖥️ Frontend

- ⚛️ **React** – Biblioteca JavaScript/TypeScript para construção de interfaces
- 🎨 **Tailwind CSS** – Framework CSS para estilização rápida e responsiva
- 🔤 **Lucide React** – Conjunto de ícones para React

---

## 🔧 Backend

- 🟢 **Node.js** – Ambiente de execução para JavaScript no backend
- 🚀 **Express** – Framework para criação de servidores web em Node.js
- 🔗 **CORS** – Middleware para permitir requisições de diferentes origens
- 📦 **Body-Parser** – Middleware para analisar o corpo das requisições HTTP
- 🌐 **MongoDB Atlas** – Banco de dados remoto para armazenar os agendamentos

---

## 🛠️ Como Rodar o Projeto

### 🔹 Rodando o Frontend

**Pré-requisitos:**

## 🔹 Rodando o Frontend
npm install
npm run dev

O projeto abrirá em:

http://localhost:5173/


## 🔹 Rodando o Backend

Abra outro terminal:

node server.js

O backend estará rodando na porta 5000 por padrão.


## 🌐 Endpoints da API
Se estiver utilizando o Insomnia ou Postman, aqui estão os endpoints disponíveis:

GET /appointments: Retorna todos os agendamentos

POST /appointments: Adiciona um novo agendamento

PUT /appointments/:id: Edita um agendamento pelo ID

DELETE /appointments/:id: Exclui um agendamento pelo ID

 ## 💻 Nosso Site

🌐 Acesse a Page: https://princyrr.github.io/projeto_pet_pIntegrador

## 🖼️ Telas

### Tela Principal  
![Tela Principal](src/img/tela1.png)

### Tela Footer  
![Tela Footer](src/img/tela2.png)

### Tela de Agendamento  
![Tela de Agendamento](src/img/tela3.png)

### Meus Agendamentos  
![Meus Agendamentos](src/img/tela4.png)


## Link do vídeo

- https://vimeo.com/1085895596
  
Feito com 💙 pelo Grupo 03 – Projeto Integrador
