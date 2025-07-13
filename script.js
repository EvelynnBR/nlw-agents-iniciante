const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('form')

const markdownToHTML = (text) => {
  const convert = new showdown.Converter()
  return convert.makeHtml(text)
}

const aiQuestion = async (question, game, apiKey) => {
  const model = 'gemini-2.0-flash'
  const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
  const questions = `
    ## Especialidade
    Você é um assistente de meta para o jogo ${game}

    ## Tarefa
    Você deve responder as perguntas do Usúario com base no seu conhecimento do jogo, estratégia, build e dicas...

    ## Regras
    - Se você não sabe a resposta responda com 'Não sei' e não tente inventar uma resposta.
    - Se a pergunta não ta relacionada ao jogo, responta com 'Essa pergunta não está relacionada ao jogo'
    - Considere a data atual ${new Date().toLocaleDateString()}
    - Faça pesquisas atualizadas sobre o patch atual, baseado na data atual, para dar uma resposta coerente.
    - Nunca responda itens que você não tenha certeza de que existe no patch atual.

    ## Resposta
    Economize na resposta, seja direto e responda no máximo 500 caractere.
    - Responda em markdown
    - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usúario está querendo. 

    ## Exemplo de resposta
    pergunta do usuário: Melhor build rengar jungle
    resposta: A build mais atual é: \n\n **Itens:**\n\n coloque os itens aqui.\n\n**Runas:**\n\nexemplo de runas\n\n

    ---
    Aqui está a pergunta do usuário: ${question}
  `
  const contents = [{
    role: 'user',
    parts: [{
      text: questions
    }]
  }]

  const tools = [{
    google_search: {}
  }]

  const response = await fetch(geminiURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        contents,
        tools,
    })
  })

  const data = await response.json()

  return data.candidates[0].content.parts[0].text
}

const sendForm = async (event) => {
  event.preventDefault()
  const apiKey = apiKeyInput.value
  const game = gameSelect.value
  const question = questionInput.value

  if (apiKey == ''|| game == '' || question == '') {
    alert('Por favor, preencha todos os campos')
    return
  }

  askButton.classList.add('disabled')
  askButton.disabled = true
  askButton.textContent = 'Perguntando...'
  askButton.classList.add('loading')

  try {
    const text = await aiQuestion(question, game, apiKey)
    aiResponse.querySelector('.response-content').innerHTML = markdownToHTML(text)

    aiResponse.classList.remove('hidden')

  } catch (error) {
    alert('Error ao gerar resposta, tente novamente mais tarde😢')

  } finally {
    askButton.classList.remove('disabled')
    askButton.disabled = false
    askButton.textContent = 'Perguntar'
    askButton.classList.remove('loading')

  }
}
form.addEventListener('submit', sendForm)