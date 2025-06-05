import React from 'react'
import styles from './DiaDaSemana.module.css'

const DiaDaSemana = ({dia}) => {

    function defineMensagem (diaSemana){
        if(diaSemana === "segunda"){
            return "Começo da semana!"
        } else if (diaSemana === "sexta") {
            return "Sextou!"
        } else if (diaSemana === "domingo"){
            return "Dia de descanso!"
        }
    }

    function defineCorFundo (diaSemana) {
        if(diaSemana === "segunda"){
            return styles.segunda
        } else if (diaSemana === "sexta"){
            return styles.sexta
        } else if (diaSemana === "domingo"){
            return styles.domingo
        }
    }

  return (
    <div className={defineCorFundo(dia)}>
        {defineMensagem(dia)}
    </div>
  )
}

export default DiaDaSemana