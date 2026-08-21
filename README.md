# Dev Display

Aplicação **Dev Display** desenvolvida para cadastro, busca por geolocalização e visualização em tempo real de desenvolvedores através de tecnologias modernas.

---

## 📸 Demonstração

| Web Dashboard | Web Edição de Cadastro | App Mobile |
| :---: | :---: | :---: |
| ![dashboard](https://raw.githubusercontent.com/alexoshiro/devs-display/master/.github/assets/dashboard.png) | ![edit-page](https://raw.githubusercontent.com/alexoshiro/devs-display/master/.github/assets/edit-page.png) | ![app](https://raw.githubusercontent.com/alexoshiro/devs-display/master/.github/assets/app.png) |

---

## 🚀 Tecnologias Utilizadas

- **Monorepo / Gerenciador de Pacotes**: [pnpm Workspace](https://pnpm.io/)
- **Backend**: Node.js, Express, MongoDB (Mongoose 8), Socket.io 4, Joi
- **Frontend**: React 18, Vite, React Router DOM 6, Material UI (MUI v5), Axios
- **Mobile**: React Native, Expo SDK 51, React Navigation 6, React Native Maps, Socket.io Client 4

---

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [pnpm](https://pnpm.io/installation) (`npm install -g pnpm`)
- [MongoDB](https://www.mongodb.com/) (Instância local ou cluster no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Aplicativo **Expo Go** no smartphone (ou emulador Android/iOS configurado)

---

## ⚙️ Instalação e Configuração

Na raiz do repositório, instale todas as dependências do workspace (backend, frontend e mobile) com um único comando:

```bash
pnpm install
```

---

### 1. Backend (API)

A API necessita da variável de ambiente `MONGO_URI` com a string de conexão do MongoDB.

1. Crie o arquivo `.env` no diretório `backend/`:
   ```bash
   # backend/.env
   MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/devdisplay?retryWrites=true&w=majority
   ```

2. Execute o backend:
   ```bash
   # A partir da raiz do projeto:
   pnpm --filter backend run dev

   # Ou dentro da pasta backend/:
   cd backend
   pnpm run dev
   ```

O servidor iniciará em `http://localhost:3333`.

---

### 2. Frontend (Web)

O frontend foi construído com **Vite + React 18**.

1. Execute a aplicação web:
   ```bash
   # A partir da raiz do projeto:
   pnpm --filter frontend run dev

   # Ou dentro da pasta frontend/:
   cd frontend
   pnpm run dev
   ```

2. Acesse a aplicação no navegador em `http://localhost:3000`.

Para gerar a build de produção:
```bash
pnpm --filter frontend run build
```

---

### 3. Mobile (App)

O aplicativo mobile utiliza o **Expo SDK 51**.

1. Configure a variável `API_URL` criando um arquivo `.env` na pasta `mobile/`:
   ```bash
   # mobile/.env
   # Para emulador Android use: http://10.0.2.2:3333
   # Para dispositivo físico na mesma rede Wi-Fi, use o IP da sua máquina (ex: http://192.168.1.10:3333)
   API_URL=http://10.0.2.2:3333
   ```

2. Execute o app mobile:
   ```bash
   # A partir da raiz do projeto:
   pnpm --filter mobile run start

   # Ou dentro da pasta mobile/:
   cd mobile
   pnpm run start
   ```

3. No terminal exibido:
   - Pressione **`a`** para abrir no emulador Android.
   - Pressione **`i`** para abrir no simulador iOS.
   - Ou escaneie o **QR Code** pelo app **Expo Go** no seu smartphone.

---

## 📜 Licença

Esse projeto está sob a licença MIT.
