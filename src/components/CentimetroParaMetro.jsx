import React from 'react'

const CentimetroParaMetro = ({valorCentimetro}) => {
    const valorMetro = (valorCentimetro / 100).toFixed(2) 
  return (
    <>
        <h4>{valorCentimetro} centimetros equivalem a {valorMetro} metros.</h4>
    </>
  )
}

export default CentimetroParaMetro