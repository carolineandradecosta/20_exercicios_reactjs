import React from 'react'
import { useState } from 'react'

const SorteadorDeNumeros = () => {

    const [numeroSorteado, setNumeroSorteado] = useState(null)

    function sortearNumero () {
        
        let sorteado = Math.floor(Math.random() * 100) + 1
        setNumeroSorteado(sorteado)
    }

  return (
    <div>
        <h2>Sorteador de números de 1 a 100</h2>
        <button onClick={sortearNumero}>
            Sortear Número
        </button>
        <p>Número Sorteado: {numeroSorteado}</p>
    </div>
  )
}

export default SorteadorDeNumeros