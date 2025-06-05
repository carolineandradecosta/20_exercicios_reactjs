import React from 'react'

const Potenciacao = ({numero, potencia}) => {
  return (
    <>
        <h4>O número {numero} elevado a potência {potencia} é: {(numero**potencia).toFixed(2)} </h4>
    </>
  )
}

export default Potenciacao