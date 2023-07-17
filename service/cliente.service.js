const listarClientes = () => {
  return fetch('http://localhost:3000/profile')
  .then(resp => {
    return resp.json()
  })
}

export const clienteService = {
  listarClientes
}