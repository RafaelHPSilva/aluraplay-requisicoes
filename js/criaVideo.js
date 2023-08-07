import { conectaApi } from '../js/conectaAPI.js'

const formulario = document.querySelector('[data-formulario]')

async function criarVideo(event) {
  event.preventDefault()

  const titulo = document.querySelector('[data-titulo]').value
  const descricao = Math.floor(Math.random() * 10)
    .toFixed(2)
    .toString()
  const url = document.querySelector('[data-url]').value
  const imagem = document.querySelector('[data-imagem]').value

  try {
    await conectaApi.criaVideoApi(titulo, descricao, url, imagem)
    window.location.href = '../pages/envio-concluido.html'
  } catch (error) {
    alert(error)
  }
}
formulario.addEventListener('submit', event => criarVideo(event))
