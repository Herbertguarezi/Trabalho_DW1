# CAMISA12 🏆

Projeto desenvolvido para a disciplina de **Desenvolvimento Web 1**, do curso da Fatec Mauá.

## 📋 Sobre o projeto

O **CAMISA12** é um site voltado para um serviço de **assinatura de camisas de futebol retrô**. A proposta é oferecer aos torcedores uma forma prática e recorrente de receber camisas clássicas do futebol, resgatando peças icônicas de times e décadas passadas.

## ✅ Status

> Projeto finalizado.

## ✨ Funcionalidades

- **Página única (one-page)** com navegação por âncoras e rolagem suave entre as seções.
- **Início** — apresentação do clube de assinatura com chamadas para as assinaturas e para o formulário.
- **Sobre Nós** — história e proposta da CAMISA12.
- **Assinaturas** — três níveis de assinatura:
  | Plano | Preço | Benefícios |
  |---|---|---|
  | Garimpo | R$ 89,90/mês | 1 camisa retrô por mês, embalagem temática |
  | Colecionador | R$ 129,90/mês | 1 camisa retrô premium, item surpresa, acesso antecipado às edições especiais |
  | Lenda | R$ 179,90/mês | 1 camisa premium, item exclusivo, personalização, benefícios VIP |
- **Compre Conosco** — formulário de assinatura com dados pessoais, foto de perfil opcional e endereço de entrega.
- **Seleção automática do plano** — ao clicar em "Assinar" em um dos cards, o plano correspondente já vem selecionado no formulário.
- **Preenchimento automático de endereço** — ao informar o CEP, logradouro, bairro, cidade e UF são preenchidos pela API [ViaCEP](https://viacep.com.br/).
- **Animações e efeitos de hover** em botões e cards.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3 (Grid Layout, transições)
- JavaScript (manipulação do DOM, eventos, `fetch` com `async/await`)
- [API ViaCEP](https://viacep.com.br/)
- Google Fonts (Bebas Neue, Fraunces, Kaushan Script, Space Mono)

## 📁 Estrutura do projeto

```
Trabalho_DW1/
├── index.html    # Página única com todas as seções
├── style.css     # Estilos do site
├── script.js     # Consulta de CEP e seleção de plano
├── media/        # Logos, imagens e ícones do site
└── README.md
```

## ▶️ Como executar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Abra o arquivo `index.html` no navegador.

> É necessária conexão com a internet para carregar as fontes e para a consulta de CEP.

## 🎯 Objetivos da disciplina

Este projeto teve como objetivo colocar em prática os conceitos fundamentais de desenvolvimento web trabalhados na disciplina: estruturação semântica de páginas com HTML, estilização e layout com CSS e interatividade com JavaScript, incluindo o consumo de uma API externa.

## 👤 Autores

- Herbert de Alencar Guarezi
- Bruno Fernando Teixeira Duarte

**Docente:** Humberto

## 🏫 Instituição

Fatec Mauá — Faculdade de Tecnologia de Mauá
