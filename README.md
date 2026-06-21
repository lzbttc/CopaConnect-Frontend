# Frontend Mobile - Guia de Desenvolvimento & Estrutura

Este repositório serve como um ambiente de testes seguro (sandbox) para a construção das telas do aplicativo em **React Native + Expo** (JavaScript). 

Este projeto foi estruturado para que toda a pasta `src/` e seus arquivos de configuração possam ser movidos e integrados ao repositório principal da equipe posteriormente, sem gerar conflitos.


## Como Rodar o Projeto Localmente

Certifique-se de ter o **Node.js** instalado e o emulador do **Android Studio** configurado e aberto.

1. **Instalar as dependências necessárias:**
   npm install

2. **Iniciar o servidor de desenvolvimento do Expo:**
npx expo start

3. **Executar no Android Studio ou pelo Expo Go:**
A. Com o Android Studio já rodando na sua tela, pressione a tecla a no terminal onde o Expo está aberto.

B. Instale o aplicativo Expo Go (versão 56) no seu celular. Abra o app do Expo Go e escaneie o QR Code que apareceu no terminal do seu computador (lembre-se de que o computador e o celular precisam estar conectados na mesma rede Wi-Fi).

## Estrutura de Arquivos e Pastas
O projeto utiliza nomenclatura em inglês para as pastas de código para manter a consistência com as bibliotecas nativas e facilitar o uso como portfólio.

frontend/
├── assets/                 # ÚNICA pasta de mídias (ícones, splash screens, logos e backgrounds)
├── src/                    # O coração do app (onde todo o nosso código é escrito)
│   ├── components/         # Blocos visuais reutilizáveis (botões, inputs, cards, backgrounds customizados)
│   ├── screens/            # Telas completas do app (Login, Home, Cadastro) que juntam os componentes
│   ├── routes/             # Configuração dos fluxos de navegação (troca de telas)
│   ├── services/           # Isolamento de chamadas de API (onde o backend conecta as requisições)
│   └── utils/              # Funções JavaScript puras (validação de CPF, máscaras de texto, formatações)
├── App.js                  # Porta de entrada do app (inicializa o sistema e renderiza as rotas)
├── app.json                # Configurações nativas do Expo (nome, versão e caminhos dos ícones na pasta assets)
├── package.json            # Registro de dependências (bibliotecas instaladas) e scripts de execução
└── .gitignore              # Lista de exclusão do Git (impede o envio de arquivos pesados ou locais para o GitHub)

## Regras de Organização Acordadas
1. Apenas uma pasta assets/: Não criar duplicatas dentro de src/. Todas as imagens, incluindo fundos e logos, ficam na raiz para facilitar a substituição pela identidade visual final da equipe.

2. Nomes em Inglês: Toda a estrutura interna de src/ segue o padrão internacional do React Native (components, screens, etc.). Termos em português são aceitos apenas para regras de negócio exclusivas do Brasil (ex: validarCPF.js).

3. Segurança do Git (.gitignore): Pastas locais pesadas (como node_modules/) ou geradas por ferramentas de IA de uso pessoal (como claude/ ou agents/) estão configuradas para serem ignoradas pelo Git, mantendo o repositório leve.

## Ferramentas Recomendadas (VS Code)
Extensão ESLint (para manter a padronização e consistência do código na equipe).

Extensão Prettier (para auto-formatação automática das linhas ao salvar os arquivos).

### O que fazer logo em seguida:
1. Salve o arquivo com **`Ctrl + S`**.

2. Abra o terminal e mande para o seu GitHub com os três comandos seguidos:
   ```bash
   git add .
   git commit -m "docs: atualiza readme com estrutura oficial e regras do projeto"
   git push