import React from 'react'

const Destino = () => {
    const mostrarDestino = (pais) => pais === "BR"? <h1>Brasil</h1> : <h2>Exterior</h2>

  return (
    <>
        {mostrarDestino("BR")}
        {mostrarDestino("USA")}
    </>
  )
}

export default Destino