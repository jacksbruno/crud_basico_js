import { clienteService } from '../service/cliente.service.js'

const gerarLinha = (nome, email, id) => {
  const linha = document.createElement('tr')
  const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button" data-excluir>Excluir</button></li>
        </ul>
    </td>
  `
  linha.innerHTML = conteudo
  linha.dataset.id = id
  return linha
}

const tabela = document.querySelector('[data-tabela]')

clienteService.listarClientes()
.then(resp => {
  resp.forEach(e => {
    tabela.appendChild(gerarLinha(e.nome, e.email, e.id))
  })
})


tabela.addEventListener('click', (evento) => {
  const excluir = evento.target.className == 'botao-simples botao-simples--excluir'
  const linha = evento.target.closest('[data-id]')
  const id = linha.dataset.id
  if(excluir){
    clienteService.removeCliente(id)
    .then(() => {
      linha.remove()
    })
  }
})