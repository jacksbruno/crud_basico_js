const gerarLinha = (nome, email) => {
  const linha = document.createElement('tr')
  const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
  `
  linha.innerHTML = conteudo
  return linha
}

const tabela = document.querySelector('[data-tabela]')

const listarClientes = () => {
  return fetch('http://localhost:3000/profile')
  .then(resp => {
    return resp.json()
  })
}

listarClientes()
.then(resp => {
  resp.forEach(e => {
    tabela.appendChild(gerarLinha(e.nome, e.email))
  })
})