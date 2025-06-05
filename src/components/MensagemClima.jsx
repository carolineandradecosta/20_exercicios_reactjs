import React from 'react'

const MensagemClima = () => {
    function defineClima(clima) {
        if(clima === "sol"){
            return <h4>Dia de praia ☀️</h4>
        } else if (clima === "chuva"){
            return <h4>Leve o guarda-chuva ☔️</h4>
        } else {
            return <h4>Opção inválida</h4>
        }
    }

  return (
    <>
        {defineClima("chuva")}
        {defineClima("sol")}
        {defineClima("outra opcao")}
    </>
  )
}

export default MensagemClima