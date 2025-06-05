import React from 'react'

const RealParaDolar = ({valorReal}) => {
    const valorDolar = (valorReal / 5).toFixed(2)

  return (
    <div>
        <h4>{valorReal} reais equivalem a {valorDolar} dólares.</h4>
    </div>
  )
}

export default RealParaDolar