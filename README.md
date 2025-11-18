# WorkTech Link

WorkTech Link é uma plataforma que conecta profissionais de diversas áreas com empresas e oportunidades — uma versão simplificada e moderna inspirada no LinkedIn, construída para fins acadêmicos.

O projeto utiliza **frontend em React + Vite** e **backend em Node.js + Express**, com integração completa entre os dois e base de dados em arquivo JSON.

# https://github.com/ZekiosZ/WorkTech-Link.git

 Link do repositorio
---

## 🚀 Tecnologias Utilizadas

### **Frontend**
- React (Vite)
- TailwindCSS
- Componentização modular

### **Backend**
- Node.js
- Express.js
- CORS

---

## 🧠 Funcionalidades Principais

✔️ Listagem dinâmica de perfis  
✔️ Busca por nome  
✔️ Filtro por área e senioridade  
✔️ Perfis embaralhados (random)  
✔️ Modal de perfil  
✔️ Página de perfil individual  
✔️ 3 perfis especiais com login e senha  
✔️ Proteção para acessar o perfil logado  
✔️ Suporte a fotos personalizadas  
✔️ Integração completa com `profiles.json`  
✔️ Design moderno e responsivo  

---

## 🔐 Perfis de Demonstração (Login)

A plataforma possui **3 perfis especiais** de demonstração.  
Eles têm **email e senha**, ao contrário dos perfis normais.

| Usuário | Email | Senha | ID do Perfil |
|--------|--------|--------|--------------|
| **José Rafael** | `devjose@gmail.com` | `jose123` | 101 |
| **Walter Toledo** | `devwalter@gmail.com` | `walter123` | 102 |
| **Theodoro Sievers** | `devsievers@gmail.com` | `sievers123` | 103 |

Ao fazer login, o usuário é redirecionado ao próprio perfil em:

```
/profiles/{id}
```

---

## 📁 Estrutura do Projeto

```
WorkTech-Link/
│
├── backend/
│   ├── data/
│   │   └── profiles.json
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── public/
│   │   ├── Jose.jpeg
│   │   ├── Walter.jpeg
│   │   └── Theo.jpg
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   └── UserProfiles.jsx
│   │   ├── App.jsx
│   │   └── ...
│   ├── index.html
│   └── package.json
│
└── README.md
```

---

## ▶️ Como Rodar o Projeto

### **1. Backend**
```sh
cd backend
npm install
npm start
```

Servidor iniciará em:

```
http://localhost:5000
```

### **2. Frontend**
```sh
cd frontend
npm install
npm run dev
```

Frontend iniciará em:

```
http://localhost:5173
```

---

## 🤝 Desenvolvedores

### 👨‍💻 Equipe
- **José Rafael Tejeda Mantilla Rm:561849**
- **Walter Henrique Pereira de Toledo Rm:562476**
- **Theodoro Sievers Rm:562036**

Projeto desenvolvido para fins acadêmicos.

---

## ⭐ Agradecimentos

Obrigado por utilizar o **WorkTech Link**!  
Se precisar de melhorias no código, interface ou backend, só chamar!  
