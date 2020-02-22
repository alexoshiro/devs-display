# Dev Display

Projeto **Devs Display** desenvolvido durante a Omnistack da Rocketseat

------

Web Dashboard

![dashboard](.github\assets\dashboard.png)

Web Edição de cadastro

![edit-page](.github\assets\edit-page.png)

App mobile

![app](.github\assets\app.png)

## Pré-requisitos

- Node.js
- Yarn
- Expo e expo-cli
- MongoDB



## Instalação

### Backend(API)

A aplicação backend utiliza obrigatoriamente 1 variável de ambiente para ser executada, MONGO_URI, essa variável é a string de conexão com o MongoDB.

Para configurar a variável de ambiente localmente crie um arquivo chamado .env na diretório raiz do projeto backend: devs-display/backend/.env

Dentro desse arquivo coloque a variável com seu valor, exemplo:

```
MONGO_URI=mongodb+srv://example:example@cluster0-meloa.mongodb.net/devdisplay?retryWrites=true&w=majority
```



Agora para executar o projeto, vá para o diretório raiz do projeto backend: devs-display/backend/ e execute os seguintes comandos:

```
yarn install
yarn dev
```

O projeto será iniciado na porta 3333.

### Frontend(UI)

Para executar o projeto, vá para o diretório raiz do projeto frontend: devs-display/frontend/ e execute os seguintes comandos:

```
yarn install
yarn start
```

O projeto será iniciado na porta 3000.

Caso o navegador não seja aberto automaticamente, é possível acessar a aplicação em seu navegador utilizando a url: **localhost:3000**



### Mobile(APP)

A aplicação mobile utiliza obrigatoriamente 1 variável de ambiente para ser executada, API_URL, essa variável indica a URL na qual o projeto backend está exposto.

Para configurar a variável de ambiente localmente crie um arquivo chamado .env na diretório raiz do projeto backend: devs-display/mobile/.env

Dentro desse arquivo coloque a variável com seu valor, exemplo:

```
API_URL=http://10.0.2.2:3333
```



Agora para executar o projeto, vá para o diretório raiz do projeto backend: devs-display/mobile/ e execute os seguintes comandos:

```
yarn install
yarn start
```

Será aberta a página do Expo developer tools, **localhost:19002**

Nessa página você pode escolher entre executar o app em um emulador ou no seu smartphone via Lan.

#### Via emulador

Execute seu emulador, na página do Expo developer tools, clique em:

```
Run on Android device/emulator - para emulador Android

ou

Run on iOS simulator - para emulador iOS
```



#### Via Lan

Instale o aplicativo Expo em seu smartphone.

No aplicativo na categoria Tools, toque em Scan QR Code, e faça o scan do QR Code exibido na página do Expo developer tools.
