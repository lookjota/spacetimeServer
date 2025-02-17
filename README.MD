### Documentation


## Extentions

- eslint = forcar padronizacao do codigo
- Fluent Icons = icones customizados
- gitlens = git de forma avancada no vs
- omni theme = theme da rocketseat
- postcss language support = integracao do projeto web com projeto mobile
- prisma = integracao do vscode com uma ferramenta de acesso ao banco de dados no back-end como mysql
- symbols = simbulos dos arquivos, icones minimalistas
- tailwind css intellisense = escrever codigo em tailwind de uma forma integrada ao vscode


## configuracoes do vscode 

crtl + shift + p
>setting

= preferences: Open Defaulut Settings (JSON)

$ github.com/diego3g
vscodesettings


/*
{
  "workbench.startupEditor": "newUntitledFile",
  "editor.fontSize": 14,
  "editor.lineHeight": 1.8,
  "javascript.suggest.autoImports": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.rulers": [
    80,
    120
  ],
  "extensions.ignoreRecommendations": true,
  "typescript.tsserver.log": "off",
  "editor.stickyScroll.enabled": false,
  "workbench.tree.enableStickyScroll": false,
  "files.associations": {
    ".env.*": "dotenv",
    ".prettierrc": "json",
    "*.css": "css",
    ".dev.vars": "dotenv"
  },
  "symbols.files.associations": {
    "*.module.ts": "nest",
    "*.guard.ts": "typescript",
    "*.spec.ts": "ts-test",
    "*.e2e-spec.ts": "ts-test",
    "*.mock.ts": "ts-test",
    "vitest.config.e2e.ts": "vite",
    ".env.development.local": "gear",
    ".env.test.local": "gear",
    ".env.local": "gear",
    ".env.example": "gear"
  },
  "tailwindCSS.experimental.classRegex": [
    [
      "tv\\(([^)]*)\\)",
      "[\"'`]([^\"'`]*).*?[\"'`]"
    ],
    "class:\\s*?[\"'`]([^\"'`]*).*?,"
  ],
  "editor.parameterHints.enabled": false,
  "editor.renderLineHighlight": "gutter",
  "cSpell.language": "en,pt",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.suggestSelection": "first",
  "explorer.confirmDelete": false,
  "gitlens.codeLens.recentChange.enabled": false,
  "terminal.integrated.showExitAlert": false,
  "[prisma]": {
    "editor.formatOnSave": true
  },
  "typescript.suggest.autoImports": true,
  "typescript.preferences.preferTypeOnlyAutoImports": true,
  "terminal.integrated.env.osx": {
    "FIG_NEW_SESSION": "1"
  },
  "workbench.editor.labelFormat": "short",
  "editor.fontLigatures": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "mdx": "javascriptreact"
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
    "mdx": "jsx"
  },
  "cSpell.enableFiletypes": [
    "!asciidoc",
    "!c",
    "!cpp",
    "!csharp",
    "!go",
    "!handlebars",
    "!haskell",
    "!jade",
    "!java",
    "!latex",
    "!php",
    "!pug",
    "!python",
    "!restructuredtext",
    "!rust",
    "!scala",
    "!scss"
  ],
  "editor.acceptSuggestionOnCommitCharacter": false,
  "explorer.compactFolders": false,
  "git.enableSmartCommit": true,
  "editor.accessibilitySupport": "off",
  "explorer.confirmDragAndDrop": false,
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.fontFamily": "JetBrainsMono Nerd Font",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "graphql"
  ],
  "editor.semanticHighlighting.enabled": false,
  "breadcrumbs.enabled": false,
  "workbench.productIconTheme": "fluent-icons",
  "editor.fontFamily": "JetBrains Mono",
  "gitlens.codeLens.authors.enabled": false,
  "editor.tabSize": 2,
  "security.workspace.trust.untrustedFiles": "newWindow",
  "files.exclude": {
    "**\/CVS": true,
    "**\/.DS_Store": true,
    "**\/.hg": true,
    "**\/.svn": true,
    "**\/.git": true,
    ".vscode": true
    // "node_modules": true
  },
  "workbench.iconTheme": "symbols",
  "update.mode": "manual",
  "terminal.integrated.gpuAcceleration": "on",
  "terminal.integrated.defaultProfile.osx": "fish",
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "window.commandCenter": false,
  "git.openRepositoryInParentFolders": "always",
  "symbols.hidesExplorerArrows": false,
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "console-ninja.featureSet": "Community",
  "workbench.editor.empty.hint": "hidden",
  "update.showReleaseNotes": false,
  "security.promptForLocalFileProtocolHandling": false,
  "workbench.activityBar.location": "hidden",
  "apc.activityBar": {
    "position": "bottom",
    "hideSettings": true,
    "size": 48,
    "itemMargin": 8,
    "itemSize": 32
  },
  "editor.hideCursorInOverviewRuler": true,
  "editor.minimap.enabled": false,
  "window.titleBarStyle": "native",
  "apc.electron": {
    "titleBarStyle": "hiddenInset",
    "trafficLightPosition": {
      "x": 11,
      "y": 10
    },
    "opacity": 1,
    "vibrancy": "dark",
    "frame": false
  },
  "apc.header": {
    "height": 36
  },
  "apc.listRow": {
    "height": 24
  },
  "apc.font.family": "Inter",
  "apc.stylesheet": {
    ".title-label > h2": "display: none",
    ".editor-actions": "display: none",
    ".nosidebar .inline-tabs-placeholder": "width: 75px",
    ".pane-header": "padding: 0 8px",
    ".pane-body": "padding: 8px",
    ".split-view-view:first-child .pane-header": "display: none !important;",
    ".monaco-list-row": "border-radius: 4px;",
    ".monaco-workbench .monaco-list:not(.element-focused):focus:before": "display: none;"
  },
  "editor.scrollbar.vertical": "hidden",
  "explorer.sortOrder": "foldersNestsFiles",
  "explorer.fileNesting.patterns": {
    "package.json": ".eslint*, prettier*, tsconfig*, vite*, pnpm-*, bun.lockb, nest*, package-lock*",
    "tailwind.config.*": "tailwind.config*, postcss.config*",
    ".env.local": ".env*",
    ".env": ".env*"
  },
  "explorer.fileNesting.enabled": true,
  "cSpell.userWords": [
    "automations",
    "bootcamp",
    "chakra",
    "checkin",
    "checkins",
    "cloudflare",
    "clsx",
    "Codegen",
    "datadog",
    "Datetime",
    "dayjs",
    "Dotenv",
    "Elysia",
    "esbuild",
    "fastify",
    "Fastify",
    "feedbackwidget",
    "ffprobe",
    "gamificada",
    "Hasher",
    "hono",
    "Hono",
    "ilike",
    "IUGU",
    "jamjuree",
    "jupiter",
    "ksuid",
    "liveblocks",
    "LIVEBLOCKS",
    "Marguerita",
    "middlewares",
    "mixpanel",
    "monaco",
    "nestjs",
    "nivo",
    "omni",
    "Omni",
    "Onboarded",
    "pallas",
    "postgres",
    "postgresql",
    "prefetch",
    "reactflow",
    "retriable",
    "roboto",
    "rocketseat",
    "rotion",
    "rsxp",
    "Sandpack",
    "shiki",
    "skylab",
    "sqlite",
    "supergraph",
    "svgr",
    "sympla",
    "tailwindcss",
    "textblock",
    "tiptap",
    "trpc",
    "TRPC",
    "tsup",
    "unfollow",
    "Unfollow",
    "unform",
    "Unform",
    "unmark",
    "upsert",
    "Usuario",
    "webm",
    "WEBPUSH"
  ],
  "workbench.statusBar.visible": false,
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": "keyword.other.dotenv",
        "settings": {
          "foreground": "#FF000000"
        }
      }
    ]
  },
  "workbench.layoutControl.enabled": false,
  "window.autoDetectColorScheme": true,
  "workbench.preferredDarkColorTheme": "poimandres",
  "workbench.preferredLightColorTheme": "Min Light",
  "gitlens.advanced.messages": {
    "suppressIntegrationRequestTimedOutWarning": true
  },
  "liveServer.settings.donotShowInfoMsg": true
}
*/

cuidado com as fontes intaladas nessa configuracao,
para funcionar precisa insta-las

jetbrainsMono Nerd Font

- ou se nao, basta comenta-las

comentar linhas:

//"terminal.integrated.fontFamily": "JetBrainMono Nerd Font",
//"editor.fontFamily": "jetBrains Mono",

### Beck-end sera criado em node lts

### Start Project

$ npm init -y

# package.json
- todo projeto javaScript tem um arquivo package.json
que ele tem as informacoes principais do projeto  
- o mais importante dentro desse arquivo sao as dependencias do projeto
- Dependencias sao todas as bibliotecas de terceiros que vamos ter 
dentro do projeto 
- ex typescript


### Install Dependencies

$ npm i typescript -D

> o -D significa que ela eh uma dependencia que sera usada somente
em desenvolvimento
- q quando colocarmos o projeto no ar em modo de producao, esse dependencia
sera inutil, pq o node nao intende o typeScript 
- vamos precisar converter o codigo de typeScript para javaScript
- no momento que formos fazer deploy em nossa aplicacao 

### Install Dependencies 

$ npm i @types/node -D 

> essa biblioteca da a habilidade para o typeScript entender
que ele esta dentro de um projeto node,
e com isso entender algumas coisas que sao globais em projetos node

ex: vaiavel
- process
- alguns imports de bibliotecas nativas do node

### Configure TypeScript Project

$ npx tsc --init 

- npx eh uma forma de executar binarios que sao instalados, pelas bibliotecas
do nosso projeto
- vai criar um arquivo tsconfig.json
- ele tem as configuracoes do typeScript dentro do nosso projeto

- o que eh typeScript
Eh uma ferramenta que permite que agente adivionar tipagem estatica
para quem vem do mundo, java, c#, php
tipagem estatica eh basicamente agente definir qual que eh o formato,
o tipo de cada varivel no momento que estamos declarando ela

- ao inves de ter uma tipagem dinamica que eh uma variavel que ela pode 
ser uma string em uma determinado momento e em um outro momento ela pode
ser um  numero

- ja dentro da tipagem estatica isso nao pode acontecer

- cada variavel ela so pode sempre ter o mesmo tipo
- isso facilita agente evitar um momente de problemas

- vamos usar typeScript, pq se voce quer entrar no mercado de javaScript
- saber typeScript hoje ja nao eh mais algo que pode ser deixado de promptForLocalFileProtocolHandling


@ tsconfig.json

$ "target": "es2020",

- converter para essa versao no final do codigo


@ src/server.ts


### install dependencies tsx

$ npm i tsx -D

- o tsx automatiza o processo,
ele vai converter o nosso codigo, por debaixo dos pano de typeScript
para java script 

### executando binarios

$ npx tsx src/server.ts
- executa o codigo


@ package.json

$ "scripts": {
  "dev": "tsx watch src/server.ts"
}

### framework
### criano uma API rest full
- que vai servir dados para o front-end
- isso pq o framework
ja tras uma serie de  modificacoes de seguranca como de performance
- ja tras varias fitures que vamos precisar utilizar
- e recriar essas coisas do zero, recriar as rotas seria burrice de nossa parte
- a nao q voce esteja querendo aprender algo especifico com essa construcao
do zero

- mais nosso intuito aqui eh construir uma aplicacao o mais rapido possivel

- vamos usar o fastify

### install dependencies fastify

$ npm i fastify

- 

#### httpie

- faz requisicoes http pelo terminal 

### install dependencies eslint

$ npm install eslint -D

- criar um padronizacao do projecto

- para criar sua propria convensao
  $ npx eslint --init

- vamos usar a da rocketseat

  $ npm i @rocketseat/eslint-config -D


@ .eslintrs.json
- criar um arquivo na raiz do projecto 



@ user /settings.json

    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.addMissingImports.ts": true,
    },

# para corrigir os arquivos

$ npm run lint

### PRISMA / sqlite

- Prisma ferramenta para trabalhar com banco de dados no accessibilitySupport
mais incrivel possivel
- principalmente voltada para a area de desenvolvimento

- o sqlite eh perfeito para nossa situacao
- como ele podemos ter um banco sql q fire based
- ele eh apenas um arquivo no nosso projeto 

- nao precisa instalar qualquer coisa como postman mysql ou
qualquer coisa aqui

- por mais q estivermos usando sqlite aqui 
- quando colocarmos o nosso projeto em producao 
- caso agente nao queira utilizar o sqlite
- o prisma entende automaticamente varios bancos de dados
nao so o sqlite
- ele supoerta, postgress, mysql, sqlite, sql server, mongoDb 
cockroadDB

- com isso nao vamos precisar fazer nenhuma alteracao do nosso projeto
para alterar de um banco para o outro no futuro
- pq o prisma suporta todos

- o Prisma eh uma ferramenta que fica interceptando a comunicacao
do meu back-end com o banco de dados
- ele cria uma forma unificada do meu back end acessar as informacoes
do banco de dados com uma linguagem mais apropriada para desenvolvedores
- pra gente nao precisar ficar escrevendo as curry sql na monaco
- nao precisa ficar escrevendo select, insert, delete, update, joins

- o Prisma cria uma propria digamos linguagem dele, para
fazermos essa requisicao no banco de dados de uma maneira muito
mais amigavel, digamos assim

### install dependencies prisma

$ npm i prisma -D


- help prisma
$ npx prima -h

- configura para dizer que queremos usar um banco sqlite
e nao o banco padrao dele que eh o postgress

$ npx prisma init --datasource-provider SQLite

- isso cria uma pasta 
/prisma/schema.prisma

- importante ter a versao do prisma instalado 

- cria tbm um arquivo 
.env

ele tras apenas uma configracao chamada
DATABASE_URL="file:./dev.db"

que diz onde vai fica salvo nosso banco de dados

por padrao ele vai salvar na raiz do projeto.

- o arquivo .env eh conhecido em projetos javaScript
- pq ele vem de .env enviroment variabel
- sao variaveis ambiente 

- ou seja, sao aquelas configuracoes que eu tenho no meu projeto
 q provavelmente vao mudar de maquina pra maquina

 - onde o meu projeto pode se executando
 - enquanto eu estou rodandno na minha maquina a URL de banco
 de dados vai ser uma 
 - enquanto eu tiver rodandno na maquina do meu servidor em producao
 a url vai ser outra

 ou seja variaveis ambiente, ele muda de acordo com o ambiente
 que a nossa aplicacao esta rodandno
 - desenvolvimento, producao, stagim, testing

### para cirar a tabela no bando de dados
apos ter criado o modelo no schema.prismna

$ npx prisma migrate dev

- ele le o arquivo shcema.prisma
- e vai identificar todas as alteracoes feitas nesse arquivo
desde a ultima vez que executamos esse comando

- deve se nomear a migration
- migration eh o sistema de controle de versao do banco de dados
- eh uma forma de eu adicionar aos poucos, criar a estrutura
do meu banco de dados aos poucos e com o tempo esse banco de dados
pode ir mudando

- pode remover uma coluna, adicionar uma coluna,
- posso criar uma tabela, deletar uma tabela

- cada migration eh como se fosse um Commit

- damos o nome da ultima alteracao que usamos no bando de dados

- com esse codigo ele cria uma pastas @migrations/202502101651120_create_users_table
- dentro dessa pasta temos o sql necessario para criacao da nossa tabela no banco de dados

### prisma studio 

- ferramenta para ver os banco de dados criados

$ npx prisma studio

gi - graphic interface
- para visualizar banco de dados

### install dependencies prisma client

$ npm i @prisma/client

- O Prisma Client é um construtor de consultas gerado automaticamente e fortemente 
tipado que pode ser usado para ler e escrever dados programaticamente em um banco de dados a partir de um aplicativo Node. js ou TypeScript.


#### Criando o front-end da nossa aplicacao

- Usando React com frameWork next

### comando para fazer atualizacao no banco de dados

$ npx prisma migrate reset
$ npx prisma migrate dev

- ver banco de dados
$ npx prisma studio

### install dependencies zod

$ npm i zod 

- dependencia de validacao 

### dependencies install fastify/criados
$ npm i @fastify/cors

- instruir quais URL de front-end o nosso beck-end vai poder ser acessado


### install dependencies dotenv

$ npm i dotenv -D

- para que ele leia as variaveis ambiente e converta em variaveis
no process.env 

### Install dependencies axios

$ npm i axios 

- melhor forma de fazer requisicoes http eh usando axios
- eh uma api simples e leve

### JWT

- dentro do contexto de autenticacao
- trabalhando com JWT
- json web token

- eh basicamente um token criado pelo nosso back-end e enviado para front-end
pro front-end usar esse token nas requisicoes que ele faz pro back-end para
podermos identificar um usuario logado
- ou seja, quando fizermos esse processe de cadastro de usuario, 
nao so o usuario, agente vai criar tbm pro front-end acessar
um JWL que eh um token 
- que o front-end vai poder utilizar por quanto tempo que vamos descidir
que o usuario vai poder ficar logado,
- o Front-end vai guardar essa informacao la, nos cookies ou na memoria
- toda vez que o front-end fizer uma requisicao pro back-end
ele vai enviar esse token junto, e o beck-end vai saber que esse token,
pertence a tal usuario, podendo identificar esse usuario nas proximas
requisicoes

- por enquanto so conseguimos identificar o usuario na rota register
- esta estatico

- para fazer da forma correta iremos usar a estrategia JWL

### Install dependencies JWL

$ npm i @fastify/jwt