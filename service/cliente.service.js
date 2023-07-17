const listarClientes = () => {
  return fetch('http://localhost:3000/profile')
  .then(resp => {
    return resp.json()
  })
}

const cadastrarClientes = (nome, email) => {
  console.log('request',nome,email)
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

export const clienteService = {
  listarClientes,
  cadastrarClientes
}