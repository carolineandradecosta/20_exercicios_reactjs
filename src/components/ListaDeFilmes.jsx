import React from 'react'
import Filme from './Filme'

const ListaDeFilmes = () => {

  const filmes = [
    {titulo: "Avatar", direto: "James Cameron", ano: 2009},
    {titulo: "Titanic", diretor: "James Cameron", ano: 1997},
    {titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", ano: 1972}
  ]  

  return (
    <>
        <h3>Lista de Filmes:</h3>
        {
            filmes.map((filme, index) =>(
                <Filme key={index} titulo={filme.titulo} diretor={filme.diretor} ano={filme.ano}/>
            ))
        }
    </>
  )
}

export default ListaDeFilmes