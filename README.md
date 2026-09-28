# 🐾 Amor de Quatro Patas

Plataforma web desenvolvida para a ONG fictícia **Amor de Quatro Patas**, criada para fins acadêmicos e voltada ao resgate, cuidado e proteção de animais em situação de abandono.

O projeto foi desenvolvido como atividade prática da disciplina **Desenvolvimento Front-End para Web**, aplicando conhecimentos de HTML5, CSS3 e JavaScript na construção de uma aplicação responsiva, acessível e interativa.

---

## 📋 Sobre o projeto

A plataforma apresenta a organização, seus projetos sociais e as formas de participação disponíveis para pessoas interessadas em contribuir com a causa animal.

A aplicação possui três páginas principais:

* **Início:** apresentação institucional da ONG;
* **Projetos:** apresentação das iniciativas de resgate, doação e voluntariado;
* **Cadastro:** formulário para pessoas interessadas em colaborar.

Além da estrutura visual, foram implementados recursos de interatividade, validação de formulário, feedbacks visuais, modal de confirmação, navegação dinâmica e armazenamento local dos dados.

---

## 🎯 Objetivos

O projeto teve como principais objetivos:

* Aplicar HTML5 semântico;
* Desenvolver uma interface responsiva;
* Utilizar CSS Grid e Flexbox;
* Criar um sistema visual consistente;
* Aplicar boas práticas de organização de código;
* Implementar interações utilizando JavaScript;
* Manipular elementos do DOM;
* Trabalhar com eventos;
* Implementar validações de formulário;
* Utilizar `localStorage` para persistência local;
* Aplicar conceitos básicos de acessibilidade;
* Organizar o projeto utilizando controle de versão com Git.

---

## 🖥️ Páginas da aplicação

### 🏠 Início — `index.html`

Página principal da organização.

Apresenta:

* Identidade da ONG;
* Apresentação institucional;
* Informações sobre sua atuação;
* Imagens relacionadas à proteção animal;
* Chamadas para participação;
* Navegação para as demais páginas.

### 🐶 Projetos — `projetos.html`

Apresenta as principais iniciativas da ONG, incluindo:

* Resgate e cuidados;
* Campanhas de doação;
* Programa de voluntariado;
* Formas de participação;
* Chamadas para ação.

Os projetos são organizados em cards para facilitar a leitura e a identificação das diferentes formas de colaboração.

### 📝 Cadastro — `cadastro.html`

Página destinada ao cadastro de pessoas interessadas em colaborar com a organização.

O formulário possui campos para:

* Nome completo;
* CPF;
* E-mail;
* Telefone;
* Data de nascimento;
* CEP;
* Endereço;
* Número;
* Cidade;
* Estado;
* Forma de colaboração.

Também foram implementadas validações e mensagens de feedback para orientar o preenchimento.

---

## 🛠️ Tecnologias utilizadas

### HTML5

Utilizado para estruturar semanticamente as páginas da aplicação.

Entre os elementos utilizados estão:

* `header`;
* `nav`;
* `main`;
* `section`;
* `article`;
* `footer`;
* `form`;
* `fieldset`;
* `legend`.

### CSS3

Responsável pela apresentação visual e adaptação da interface.

Foram utilizados:

* CSS Grid;
* Flexbox;
* Media Queries;
* Variáveis CSS;
* Pseudo-classes;
* Transições;
* Estados de interação;
* Design responsivo;
* Sistema de espaçamentos;
* Escala tipográfica.

### JavaScript

Utilizado para implementar o comportamento e a interatividade da aplicação.

Entre os recursos utilizados estão:

* Manipulação do DOM;
* `addEventListener`;
* Navegação dinâmica;
* Validação de formulário;
* Feedback visual;
* Modal de confirmação;
* Toast de sucesso;
* Controle de estados;
* `localStorage`;
* `JSON.stringify()`;
* `JSON.parse()`.

### Git e GitHub

Utilizados para controle de versão e organização do desenvolvimento.

Foi adotada uma estrutura baseada no GitFlow, considerando branches como:

```text
main
develop
feature/*
```

Também foram considerados os princípios de **Conventional Commits** e **Semantic Versioning**.

---

## 📁 Estrutura do projeto

A aplicação foi organizada separando os arquivos de estrutura, estilos, scripts e recursos visuais:

```text
amor-de-quatro-patas/
│
├── index.html
├── projetos.html
├── cadastro.html
├── README.md
│
├── css/
│   └── styles.css
│
├── js/
│   ├── ...
│   └── ...
│
└── assets/
    └── images/
        ├── ong-animais.svg
        ├── ong-animais.png
        └── ong-animais.webp
```

Essa organização facilita a manutenção e permite separar as responsabilidades de cada tipo de arquivo.

---

## 📋 Pré-requisitos

Para executar o projeto, são necessários:

* Um navegador web atualizado, como Google Chrome, Microsoft Edge ou Mozilla Firefox;
* Um editor de código, como Visual Studio Code, caso seja necessário editar os arquivos.

O uso do **Live Server** no Visual Studio Code é opcional, mas pode facilitar a execução durante o desenvolvimento.

### Dependências

O projeto **não possui dependências externas obrigatórias**.

Não é necessário instalar pacotes por NPM e não existe um arquivo `package.json` necessário para a execução da aplicação.

A aplicação utiliza HTML, CSS e JavaScript sem dependência de frameworks ou bibliotecas externas obrigatórias.

---

## 🚀 Instalação e execução

Como não existem dependências externas, não é necessário executar comandos como:

```bash
npm install
```

Para executar o projeto:

1. Baixe ou clone o repositório;
2. Abra a pasta do projeto;
3. Abra o arquivo `index.html` no navegador.

Durante o desenvolvimento, também pode ser utilizado o **Live Server** para executar a aplicação localmente.

---

## 🏗️ Build

O projeto **não utiliza ferramentas de build, bundlers ou processos de compilação**.

Por ser desenvolvido com HTML, CSS e JavaScript, os arquivos são interpretados diretamente pelo navegador.

Consequentemente, não existe um comando como:

```bash
npm run build
```

A versão entregue corresponde aos próprios arquivos-fonte utilizados pela aplicação.

---

## 📱 Responsividade

A interface foi desenvolvida considerando diferentes tamanhos de tela.

Foram utilizadas **Media Queries** para adaptar:

* Navegação;
* Menu mobile;
* Cards de projetos;
* Formulários;
* Espaçamentos;
* Distribuição dos conteúdos;
* Tamanhos dos componentes.

O **CSS Grid** foi utilizado principalmente para estruturas bidimensionais, enquanto o **Flexbox** foi utilizado para alinhamentos e distribuição dos elementos.

---

## ♿ Acessibilidade

Foram considerados princípios básicos de acessibilidade durante o desenvolvimento.

Entre as práticas utilizadas estão:

* HTML semântico;
* Hierarquia adequada de títulos;
* Texto alternativo nas imagens;
* `label` associado aos campos;
* Contraste entre elementos;
* Estados visuais de interação;
* Mensagens de erro e sucesso;
* Navegação organizada;
* Feedback visual para ações do usuário.

Essas práticas ajudam a tornar a interface mais compreensível e utilizável.

---

## 📝 Validação do formulário

O formulário utiliza recursos nativos do HTML5 e validações implementadas em JavaScript.

São tratados dados como:

* CPF;
* Telefone;
* CEP;
* E-mail;
* Data de nascimento;
* Campos obrigatórios.

Os campos inválidos recebem indicação visual e mensagens de orientação.

Após o preenchimento correto, a aplicação apresenta um modal para confirmação antes da conclusão do cadastro.

---

## 💾 Armazenamento local

Para fins acadêmicos e demonstrativos, as informações do cadastro são armazenadas localmente no navegador utilizando a API:

```javascript
localStorage
```

Antes de serem armazenados, os dados são convertidos para uma string JSON com:

```javascript
JSON.stringify()
```

Na recuperação, os dados são convertidos novamente para objetos JavaScript utilizando:

```javascript
JSON.parse()
```

> **Importante:** o projeto possui finalidade exclusivamente acadêmica. Os dados não são enviados para um servidor ou banco de dados real.

---

## 🔔 Interações e feedbacks

A aplicação possui diferentes estados visuais para orientar o usuário durante a utilização.

Foram implementados:

* Mensagens de erro;
* Mensagens de sucesso;
* Destaque de campos inválidos;
* Toast de confirmação;
* Modal de confirmação;
* Estados `hover` dos botões;
* Transições;
* Menu de navegação responsivo.

Esses recursos fornecem retorno visual após as ações realizadas pelo usuário.

---

## 🧪 Testes

O projeto **não possui uma suíte de testes automatizados**.

Foram realizados testes manuais durante o desenvolvimento para verificar o funcionamento das principais funcionalidades.

Foram verificados:

* Navegação;
* Responsividade;
* Preenchimento do formulário;
* Validação dos campos;
* Máscaras de entrada;
* Estados de erro;
* Estados de sucesso;
* Modal de confirmação;
* Toast;
* Persistência com `localStorage`;
* Menu responsivo;
* Interações dos componentes;
* Comportamento em diferentes tamanhos de tela.

Também foram utilizados os recursos de desenvolvedor do navegador para identificar possíveis erros no console e analisar o comportamento do JavaScript.

---

## 🌿 GitFlow e versionamento

O desenvolvimento foi organizado com base no modelo **GitFlow**, separando o código estável do desenvolvimento contínuo.

```text
main
 │
 └── Versões estáveis

develop
 │
 └── Desenvolvimento contínuo

feature/*
 │
 └── Novas funcionalidades
```

As mensagens de commit seguem, quando aplicável, o padrão **Conventional Commits**, utilizando tipos como:

```text
feat
fix
docs
```

Para o controle das versões foi considerado o **Semantic Versioning (SemVer)**:

```text
MAJOR.MINOR.PATCH
```

A primeira versão estável do projeto é representada por:

```text
v1.0.0
```

---

## 📌 Status do projeto

**Concluído — versão acadêmica 1.0.0**

A aplicação contempla as funcionalidades propostas para a experiência prática, incluindo:

* Estrutura semântica;
* Design responsivo;
* CSS Grid;
* Flexbox;
* Interatividade com JavaScript;
* Manipulação do DOM;
* Validação de formulário;
* Feedbacks visuais;
* Modal;
* Toast;
* Armazenamento local;
* Organização do código;
* Controle de versão.

---

## 👩‍💻 Autoria

**Raissa Freitas**

**RGM:** 48921076

**Curso:** Análise e Desenvolvimento de Sistemas

**Disciplina:** Desenvolvimento Front-End para Web

**Ano:** 2026

---

## ⚠️ Aviso

A **Amor de Quatro Patas** é uma organização fictícia criada exclusivamente para fins acadêmicos.

Os textos, informações e dados apresentados na aplicação são demonstrativos e não representam uma ONG real.

O formulário possui finalidade exclusivamente educacional e não deve ser utilizado para o envio de dados pessoais reais.
