# Programação para Internet II - Back-end

Repositório dedicado ao armazenamento das resoluções de atividades, exercícios práticos e entregas de trabalhos da disciplina de **Programação para Internet II (Back-end)**.

## Sobre o Repositório

Este espaço organiza todo o código produzido ao longo do semestre, servindo como portfólio acadêmico e registro de evolução no desenvolvimento de aplicações server-side e APIs RESTful.

## Tecnologias e Ferramentas Utilizadas

O desenvolvimento dos projetos deste repositório utiliza principalmente o ecossistema JavaScript:

* **Linguagem:** JavaScript (ES6+) / TypeScript
* **Ambiente de Execução:** Node.js
* **Frameworks e Bibliotecas:** Express.js (e outros pacotes do ecossistema NPM)
* **Testes de Requisições:** Thunder Client (extensão do VS Code)
* **Controle de Versão:** Git e GitHub
* **Editor de Código:** Visual Studio Code

## Estrutura do Projeto

```text
├── atividades/          # Listas de exercícios e práticas em sala
├── trabalhos/           # Entregas avaliativas e projetos maiores
├── exemplos/            # Códigos de referência e testes de conceito
└── README.md            # Documentação principal do repositório
```

## Como Executar os Projetos Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Acesse a pasta da atividade ou trabalho desejado:**
   ```bash
   cd nome-da-pasta
   ```

3. **Instale as dependências do projeto:**
   ```bash
   npm install
   ```

4. **Inicie o servidor:**
   ```bash
   npm start
   ```
   *(Ou utilize `npm run dev` caso o projeto utilize Nodemon ou modo de desenvolvimento).*

## Testando as Rotas

Para testar os endpoints das APIs desenvolvidas:

1. Abra o projeto no **Visual Studio Code**.
2. Acesse a extensão **Thunder Client** na barra lateral.
3. Importe a coleção de requisições (caso disponível na pasta do projeto) ou crie uma nova requisição apontando para `http://localhost:3000` (ou a porta configurada).

---

Desenvolvido para a disciplina de **Programação para Internet II**.
