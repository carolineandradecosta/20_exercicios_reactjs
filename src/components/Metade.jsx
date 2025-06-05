import React from 'react'

const Metade = ({numero}) => {
  return (
    <>
        <h4>A metade do numero {numero} é: {(numero / 2).toFixed(2)}</h4>
    </> 
  )
}

export default Metade