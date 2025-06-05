import React from 'react'

const StatusPedido = () => {
    const defineStatus = (status) => {
        if (status === "enviado"){
            return <h4>Seu pedido foi enviado! 📦</h4>
        } else if (status === "pendente") {
            return <h4>Seu pedido está em processamento ⏳</h4>
        } else if (status === "cancelado") {
            return <h4>Seu pedido foi cancelado ❌</h4>
        } else {
            return <h4>Opção Inválida!</h4>
        }

    }
        
  return (
    <>
        {defineStatus("pendente")}
        {defineStatus("enviado")}
        {defineStatus("cancelado")}
        {defineStatus("outra opcao")}
    </>
  )
}

export default StatusPedido