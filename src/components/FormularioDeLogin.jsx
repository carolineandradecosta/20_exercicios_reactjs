import React from 'react'
import { useState } from 'react'

const FormularioDeLogin = () => {

    const [formulario, setFormulario] = useState({
        email: "",
        senha: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormulario({...formulario, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const jsonToSend = JSON.stringify(formulario)

        console.log(`${jsonToSend}`)
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Formulário de Login</h2>
            <div>
                <label>Email: </label>
                <input 
                    type="email"
                    name="email"
                    value={formulario.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Senha: </label>
                <input 
                    type="password"
                    name="senha"
                    value={formulario.senha}
                    onChange={handleChange}
                />
            </div>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default FormularioDeLogin