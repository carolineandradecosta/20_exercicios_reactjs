import React from 'react'
import { useState } from 'react'

const PostarComentario = () => {

    const [formulario, setFormulario] = useState({
        nome: "",
        comentario: "",
    })

    const [comentarios, setComentarios] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormulario({...formulario, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        setComentarios([...comentarios, formulario])

        setFormulario({ nome: "", comentario: "" })
    }
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h2>Simulador de Postagem</h2>
        <div>
            <label>Nome: </label>
            <input 
                type="text" 
                name="nome"
                value={formulario.nome}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Comentário: </label>
            <textarea 
                name="comentario"
                value={formulario.comentario}
                onChange={handleChange}
            >
            </textarea>
        </div>
        <button type="submit">Enviar</button>
        </form>

        <div>
            <h4>Comentários:</h4>
            {
                comentarios.map((comentario, index) => (
                    <div key={index}>
                        <p>Nome: {comentario.nome}</p>
                        <p>Comentário: {comentario.comentario}</p>                         
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PostarComentario