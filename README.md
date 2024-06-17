# CarteiraDigital

CarteiraDigital é um aplicativo para gerenciamento de finanças pessoais, permitindo que os usuários rastreiem suas despesas, receitas e planejem seu orçamento de forma eficiente.

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Visão Geral

CarteiraDigital foi desenvolvido para ajudar os usuários a gerenciar suas finanças pessoais de maneira simples e intuitiva. Com ele, você pode adicionar transações, categorizar despesas e receitas, e visualizar relatórios financeiros.

## Funcionalidades

- Adicionar e gerenciar transações financeiras
- Categorizar despesas e receitas
- Visualizar relatórios e gráficos financeiros
- Configurar metas financeiras
- Autenticação de usuários com Firebase

## Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Git](https://git-scm.com/)

### Passos

1. Clone o repositório:

   ```sh
   git clone https://github.com/DevaGabs/CarteiraDigital.git

2. cd CarteiraDigital
3. npm install
4. Configure as credenciais do Firebase:
   // src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

5. Inicie o servidor de desenvolvimento:
 npm start

## Uso
Após iniciar o servidor de desenvolvimento, você pode acessar o aplicativo no seu navegador através do endereço http://localhost:3000.

## Autenticação
Cadastre-se ou faça login usando o formulário de autenticação.
Adicione, edite ou exclua transações financeiras.
Visualize gráficos e relatórios financeiros no painel principal.
Contribuição
Contribuições são bem-vindas! Para contribuir, siga os passos abaixo:

Faça um fork deste repositório.
Crie uma branch para sua feature ou correção de bug (git checkout -b feature/nova-feature).
Faça commit das suas alterações (git commit -m 'Adiciona nova feature').
Envie suas alterações para o repositório remoto (git push origin feature/nova-feature).
Abra um Pull Request.
Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes

Obrigado por usar o CarteiraDigital! Esperamos que ele ajude você a gerenciar suas finanças de maneira eficaz.
