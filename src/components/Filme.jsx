import React from 'react'

const Filme = ({titulo, diretor, ano}) => {
  return (
    <div>
        <h4>Título: {titulo}</h4>
        <p>Diretor: {diretor}</p>
        <p>Ano: {ano}</p>
    </div>
  )
}

export default Filme