import React from 'react'

const MetroParaCentimetro = ({valorMetro}) => {
   
    const valorCentimetro = (valorMetro * 100).toFixed(2)

  return (
    <>
        <h4>{valorMetro} metros equivalem a {valorCentimetro} centimetros.</h4>
    </>
  )
}

export default MetroParaCentimetro