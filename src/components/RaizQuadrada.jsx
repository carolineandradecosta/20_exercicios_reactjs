import React from 'react'

const RaizQuadrada = ({numero}) => {
  return (
    <>
        <h4>A raiz quadrada de {numero} é: {Math.sqrt(numero).toFixed(2)} </h4>
    </>
  )
}

export default RaizQuadrada