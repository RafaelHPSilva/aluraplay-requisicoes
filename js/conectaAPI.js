async function listaVideosApi(params) {
  const conexaoApi = await fetch('http://localhost:3000/videos')
  const converteConexaoApi = await conexaoApi.json()
  return converteConexaoApi
}

export default async function criaVideoApi(titulo, descricao, url, imagem) {
  const conexaoApi = await fetch('http://localhost:3000/videos', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil vizualizações`,
      url: url,
      imagem: imagem
    })
  })
  if (!conexaoApi.ok) {
    throw new Error('Ops! Não foi possível adicionar o vídeo')
  }
  const converteConexaoApi = await conexaoApi.json()
  return converteConexaoApi
}

async function buscaVideoApi(pesquisa) {
  const conexaoApi = await fetch(`http://localhost:3000/videos?q=${pesquisa}`)
  const converteConexaoApi = conexaoApi.json()
  return converteConexaoApi
}

export const conectaApi = {
  listaVideosApi,
  criaVideoApi,
  buscaVideoApi
}
