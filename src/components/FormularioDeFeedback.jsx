import React from 'react'
import { useState } from 'react'

const FormularioDeFeedback = () => {

    const [nome, setNome] = useState("")
    const [feedback, setFeedback] = useState("")

    const handleNome = (e) => {setNome(e.target.value)}

    const handleFeedback = (e) => {setFeedback(e.target.value)}

    const handleSubmit = (e) => {e.preventDefault()

        const dados = {
            nome: nome,
            feedback: feedback
        }

        const jsonToSend = JSON.stringify(dados)
        console.log(`${jsonToSend}`)
    }

  return (
    <div>
        <h2>Formulário de Feedback</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome: </label>
                <input type="text" name='nome' onChange={handleNome} />
            </div>
            <div>
                <label>Feedback: </label>
                <textarea name="feedback" id="feedback" onChange={handleFeedback}></textarea>
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default FormularioDeFeedback