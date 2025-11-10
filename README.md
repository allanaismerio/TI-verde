# Projeto TI-Verde

Este é um projeto acadêmico e portal informativo focado nos conceitos de **TI Verde** (Green IT), desenvolvido como parte de um Projeto Extensionista. O objetivo do site é conscientizar e fornecer informações práticas sobre sustentabilidade na área de tecnologia.

O projeto consiste em um site multipágina responsivo que aborda desde a eficiência energética e o descarte de e-lixo até práticas de Cloud Computing sustentável, culminando em um dashboard interativo que apresenta dados de uma pesquisa sobre o tema.

## 🏛️ Estrutura do Site

O portal é composto pelas seguintes páginas:

* **`index.html`**: Página inicial e portal principal para os outros tópicos.
* [cite_start]**`eficiencia.html`**: Detalha práticas de eficiência energética em hardware e software[cite: 533].
* [cite_start]**`e-lixo.html`**: Informa sobre o impacto e o descarte correto de resíduos eletrônicos[cite: 669].
* [cite_start]**`cloud.html`**: Aborda o conceito de "Cloud Sustentável" e como migrar de forma responsável[cite: 604].
* [cite_start]**`ods12.html`**: Conecta as práticas de TI Verde com o Objetivo de Desenvolvimento Sustentável 12 da ONU (Consumo e Produção Responsáveis)[cite: 563, 571].
* [cite_start]**`dashboard.html`**: Um painel interativo que exibe dados de pesquisa através de gráficos e tabelas[cite: 635].
* [cite_start]**`sobre.html`**: Descreve a metodologia, escopo e autoria do projeto[cite: 585].

## Funcionalidades (Features)

* [cite_start]**Design Responsivo:** O site se adapta a diferentes tamanhos de tela (desktop, tablets e celulares) usando o framework Bootstrap.
* [cite_start]**Navegação Coesa:** Uma barra de navegação consistente em todas as páginas, destacando a página ativa[cite: 601, 602].
* [cite_start]**Conteúdo Semântico:** Uso de tags HTML5 modernas (`<main>`, `<section>`, `<aside>`) para melhor acessibilidade e SEO.
* **Dashboard Dinâmico:** A página `dashboard.html` utiliza JavaScript para:
    * [cite_start]Carregar dados de pesquisa (embutidos no formato CSV).
    * [cite_start]Processar os dados usando a biblioteca **PapaParse**.
    * [cite_start]Renderizar múltiplos gráficos (barra e rosca) usando a biblioteca **Chart.js**[cite: 655, 656].
    * [cite_start]Permitir o download dos dados de exemplo com um botão.

## Tecnologias Utilizadas

Este projeto foi construído inteiramente com tecnologias front-end:

* **HTML5:** Para a estruturação e semântica do conteúdo.
* **CSS3:** Para estilização customizada (cores, fontes, espaçamentos).
* **Bootstrap (v5.3.3):** Framework CSS/JS principal para o layout em grid, componentes (navbar, cards, botões) e responsividade.
* **JavaScript (Vanilla):** Para a manipulação do DOM e lógica do dashboard.
* **Chart.js:** Biblioteca JavaScript para a criação dos gráficos de visualização de dados.
* **PapaParse:** Biblioteca JavaScript para o parsing (leitura) dos dados em formato CSV no lado do cliente.

## 🏃 Como Executar

Por ser um projeto puramente front-end, não é necessária nenhuma instalação de servidor.

1.  Clone este repositório:
    ```sh
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  Navegue até a pasta do projeto:
    ```sh
    cd seu-repositorio
    ```
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência.

## 👤 Autoria

* [cite_start]**Pesquisa, Design e Desenvolvimento:** [Allana Ismério](https://github.com/allanaismerio) [cite: 592]
