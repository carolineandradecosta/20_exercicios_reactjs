import React from 'react'
import { useState } from 'react'

const SorteadorDeDados = () => {

    const [numeroSorteado, setNumeroSorteado] = useState(null)
    const [listaSorteados, setListaSorteados] = useState([])

    function sortearNumero () {

        let sorteado = Math.floor(Math.random() * 6) + 1
        setNumeroSorteado(sorteado)
        setListaSorteados([...listaSorteados, sorteado])
    }

  return (
    <>
        <h2>Sorteador de Dados</h2>
        <button onClick={sortearNumero}>
            Sortear Número
        </button>
        <p>Último sorteado: {numeroSorteado}</p>
        <p>Lista de sortedos: {listaSorteados.join(" - ")} </p>

    </>
  )
}

export default SorteadorDeDados