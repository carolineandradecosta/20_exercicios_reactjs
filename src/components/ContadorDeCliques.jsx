import React from 'react'
import { useState } from 'react'

const ContadorDeCliques = () => {

    const [contador, setContador] = useState(0)

    function incrementarContador () {
        setContador(contador +1)
    }

  return (
    <>
        <h2>Contador de Cliques</h2>
        <p>Você clicou {contador} vezes!</p>
        <button onClick={incrementarContador}>
            Incrementar contador
        </button>
    </>
  )
}

export default ContadorDeCliques