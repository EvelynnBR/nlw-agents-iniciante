# NLW Agents - Assistente de Meta

Este projeto é um assistente de meta para jogos, desenvolvido durante o evento NLW (Next Level Week) da Rocketseat. Ele utiliza inteligência artificial, especificamente o modelo Gemini do Google, para fornecer estratégias, builds e dicas personalizadas para diversos jogos.

## Funcionalidades

*   **Assistente de IA**: Responde a perguntas sobre estratégias, builds e dicas para jogos específicos.
*   **Integração com Gemini**: Utiliza a API do Google Gemini para gerar respostas inteligentes e contextuais.
*   **Seleção de Jogos**: Permite ao usuário selecionar o jogo para o qual deseja assistência (Valorant, League of Legends, Wild Rift).
*   **Interface Intuitiva**: Formulário simples para inserir a chave da API, selecionar o jogo e fazer perguntas.
*   **Markdown para HTML**: Converte as respostas da IA formatadas em Markdown para HTML para uma melhor visualização.

## Tecnologias Utilizadas

*   **HTML5**: Estrutura da página web.
*   **CSS3**: Estilização da interface do usuário.
*   **JavaScript**: Lógica de frontend, interação com a API do Gemini e manipulação do DOM.
*   **Google Gemini API**: Modelo de inteligência artificial para geração de conteúdo.
*   **Showdown.js**: Biblioteca JavaScript para converter Markdown em HTML.

## Como Configurar e Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina local:

### Pré-requisitos

*   Um navegador web moderno (Chrome, Firefox, Edge, etc.).
*   Uma chave de API válida para o Google Gemini. Você pode obtê-la no [Google AI Studio](https://aistudio.google.com/app/apikey).

### Instalação

1.  **Clone o repositório**:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd nlw-agents-iniciante
    ```

2.  **Baixe os arquivos**: Se você recebeu os arquivos diretamente, certifique-se de ter todos os arquivos (`index.html`, `script.js`, `styles/index.css`, `assets/logo.png`) na mesma estrutura de pastas.

### Executando o Projeto

1.  **Abra o `index.html`**: Simplesmente abra o arquivo `index.html` em seu navegador web. Você pode fazer isso clicando duas vezes no arquivo ou arrastando-o para a janela do navegador.

2.  **Insira sua Chave de API**: No campo "Informe a API KEY do Gemini", cole sua chave de API do Google Gemini.

3.  **Selecione um Jogo**: Escolha um dos jogos disponíveis no menu suspenso.

4.  **Faça sua Pergunta**: Digite sua pergunta relacionada ao jogo no campo "Informe o que você deseja ver.".

5.  **Obtenha a Resposta**: Clique no botão "Perguntar" para que a IA gere uma resposta.

## Estrutura do Projeto

```
. 
├── assets/
│   └── logo.png
├── styles/
│   └── index.css
├── index.html
└── script.js
```

*   `index.html`: Contém a estrutura HTML da aplicação.
*   `script.js`: Contém a lógica JavaScript, incluindo a interação com a API do Gemini.
*   `styles/index.css`: Contém os estilos CSS para a aplicação.
*   `assets/`: Contém recursos como imagens.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. (Se você tiver um arquivo LICENSE, caso contrário, remova esta seção ou adicione um).
