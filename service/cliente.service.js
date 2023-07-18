const listarClientes = () => {
  return fetch('http://localhost:3000/profile')
  .then(resp => {
    return resp.json()
  })
}

const cadastrarClientes = (nome, email) => {
  return fetch('http://localhost:3000/profile', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  }).then(resp => {
    return resp.body
  })
}

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE'
  })
}

export const clienteService = {
  listarClientes,
  cadastrarClientes,
  removeCliente
}