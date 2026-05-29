# neurophysio-landing-page

## Visão Geral
O **neurophysio-landing-page** é uma aplicação web institucional desenvolvida para a apresentação de serviços especializados em Fisioterapia Neuropediátrica. O projeto foi projetado com foco em arquitetura limpa (Clean UI), usabilidade e acessibilidade, oferecendo uma interface responsiva que conecta potenciais pacientes à profissional da saúde por meio de canais dinâmicos de conversão.

---

## Funcionalidades Principais
* **Apresentação Profissional:** Seções estruturadas para exibição de perfil, especializações e abordagens clínicas.
* **Mapeamento de Serviços:** Detalhamento de tratamentos terapêuticos direcionados ao público neuropediátrico.
* **Integração Dinâmica com WhatsApp:** Acionamento de API de mensageria para direcionamento direto do formulário à profissional.
* **Design Totalmente Responsivo:** Adaptação fluida do layout para visualização consistente em dispositivos móveis, tablets e desktops.
* **Deploy Automatizado:** Hospedagem otimizada configurada e distribuída através do ecossistema GitHub Pages.

---

## Tecnologias Utilizadas
* **Estruturação:** HTML5 Semântico
* **Estilização e Layout:** CSS3 (Flexbox, CSS Grid e Media Queries para Responsividade)
* **Comportamento e Integração:** JavaScript Nativo (Vanilla JS)

---

## Estrutura do Projeto
Organização dos arquivos e ativos que integram o repositório:

```text
neurophysio-landing-page/
├── img/             # Ativos visuais, fotografias institucionais e ícones de suporte
├── index.html       # Estrutura de marcação principal e pontos de ancoragem da página
├── script.js        # Lógica de manipulação de formulários e tratamento de links de conversão
└── style.css        # Regras de layout, tipografia, paleta de cores e responsividade

```

> **Nota:** Arquivos locais de configuração de IDE (.vscode) foram adicionados ao escopo do .gitignore para preservar a leveza e integridade do código em ambiente de produção.

---

## Detalhes de Implementação

### Camada de Apresentação (HTML/CSS)

A página adota uma paleta de cores sóbria e acolhedora, adequada ao nicho da saúde infantil. O design foi concebido sob princípios de legibilidade e facilidade de navegação, permitindo que os responsáveis encontrem as informações clínicas de forma ágil.

### Camada de Integração (JavaScript)

O script `script.js` gerencia o comportamento do formulário de contato. Em vez de requerer um servidor de e-mail (backend), ele intercepta os dados de entrada inseridos pelo usuário, formata o texto e gera uma URL codificada que redireciona o fluxo de navegação diretamente para o WhatsApp da profissional com a mensagem estruturada.

---

## Como Executar o Projeto Localmente

1. **Clonar o repositório:**
```bash
git clone [https://github.com/maduaperes/neurophysio-landing-page.git](https://github.com/maduaperes/neurophysio-landing-page.git)

```


2. **Navegar até o diretório:**
```bash
cd neurophysio-landing-page

```


3. **Executar a aplicação:**
Abra o arquivo `index.html` diretamente em qualquer navegador web moderno ou utilize uma extensão de servidor estático local (como Live Server) para depuração de código em tempo real.

---

## Objetivo do Projeto

Este repositório atua como um case prático de portfólio com a finalidade de demonstrar:

* Criação de interfaces de alta conversão para o setor de saúde e prestação de serviços.
* Uso de boas práticas de semântica estrutural e layouts modernos sem dependência de frameworks pesados.
* Integração limpa com APIs de comunicação instantânea client-side.
