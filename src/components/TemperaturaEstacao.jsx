import React from 'react'
import styles from './TemperaturaEstacao.module.css'

const TemperaturaEstacao = ({estacao}) => {

    function defineMensagem (estacao) {
        if(estacao === "verao"){
            return "Verão"
        } else if (estacao === "inverno"){
            return "Inverno"
        } else if (estacao === "outono") {
            return "Outono"
        } else if (estacao === "primavera"){
            return "Outono"
        }
    }

    function defineCorFundo (estacao) {
        if(estacao === "verao"){
            return styles.verao
        } else if (estacao === "inverno"){
            return styles.inverno
        } else if (estacao === "outono") {
            return styles.outono
        } else if (estacao === "primavera"){
            return styles.primavera
        }
    }


  return (
    <div className={defineCorFundo(estacao)}>
        {defineMensagem(estacao)}
    </div>
  )
}

export default TemperaturaEstacao