/* 
Objetivo: Mostrar apenas o video cujo o titulo for correspondente com o do campo da pesquisa. 
Passos: 
//1 - Criar os data-atributes no html
//2 - Importar o conectaAPI e a função constroiCard 
3 - Selecionar o campo de preenchimento e o botão da pesquisa.
4 - Criar Função 
5 - Criar laços while e um foreach
6 - Criar funcionamento do botão 
*/
import { conectaApi } from './conectaAPI.js'
import criaCard from './carregaVideo.js'

async function buscarVideo(event) {
  event.preventDefault()
  const pesquisa = document.querySelector('[data-src]').value
  const buscaPesquisa = await conectaApi.buscaVideoApi(pesquisa)
  const lista = document.querySelector('[data-lista]')

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild)
  }

  buscaPesquisa.forEach(element =>
    lista.appendChild(
      criaCard(element.titulo, element.descricao, element.url, element.imagem)
    )
  )
  if (buscaPesquisa.length == 0) {
    lista.innerHTML = `<h2 class='mensagem__titulo'>Não há nenhum video com esse nome</h2>`
  }
}
const botaoPesquisa = document.querySelector('[data-botao-pesquisa]')

botaoPesquisa.addEventListener('click', event => buscarVideo(event))
