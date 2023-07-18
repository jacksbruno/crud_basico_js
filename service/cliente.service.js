const listarClientes = () => {
  return fetch('http://localhost:3000/profile')
  .then(resp => {
    return resp.json()
  })
}

const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`)
  .then(resp => {
    return resp.json()
  })
}

const editaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      nome: nome,
      email: email
    })
  }).then(resp => {
    return resp.body
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
    return resp.json()
  })
}

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE'
  })
}

export const clienteService = {
  listarClientes,
  detalhaCliente,
  editaCliente,
  cadastrarClientes,
  removeCliente
}