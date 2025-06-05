import React from 'react'

const Dobro = ({numero}) => {
  return (
    <>
        <h4>O dobro do número {numero} é: {(numero * 2).toFixed(2)}</h4>
    </>
  )
}

export default Dobro