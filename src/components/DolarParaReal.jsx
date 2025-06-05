import React from 'react'

const DolarParaReal = ({valorDolar}) => {

    const valorReal = (valorDolar * 5).toFixed(2)

  return (
    <div>
        <h4>{valorDolar} dólares equivalem a {valorReal} reais.</h4>
    </div>
  )
}

export default DolarParaReal