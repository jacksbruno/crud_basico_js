import { clienteService } from "../service/cliente.service.js"

const url = new URL(window.location.href)
const id = url.searchParams.get('id')

const nome = document.querySelector('[data-nome]')
const email = document.querySelector('[data-email]')

clienteService.detalhaCliente(id)
.then(resp => {
  nome.value = resp.nome
  email.value = resp.email
})

const form = document.querySelector('[data-form]')
form.addEventListener('submit', (evento) => {
  evento.preventDefault()
  clienteService.editaCliente(id, nome.value, email.value)
  .then(() => {
    window.location.href = '../telas/edicao_concluida.html'
  })
})

console.log(id)