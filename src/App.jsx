import React from 'react'
import OlaUsuario from './components/OlaUsuario'
import Potenciacao from './components/Potenciacao'
import RaizQuadrada from './components/RaizQuadrada'
import Dobro from './components/Dobro'
import Metade from './components/Metade'
import ListaDeFilmes from './components/ListaDeFilmes'
import MensagemClima from './components/MensagemClima'
import Destino from './components/Destino'
import StatusPedido from './components/StatusPedido'
import MetroParaCentimetro from './components/MetroParaCentimetro'
import CentimetroParaMetro from './components/CentimetroParaMetro'
import RealParaDolar from './components/RealParaDolar'
import DolarParaReal from './components/DolarParaReal'
import CssGlobal from './components/CssGlobal'
import CssInline from './components/CssInline'
import CssInlineDinamico from './components/CssInlineDinamico'
import DiaDaSemana from './components/DiaDaSemana'
import TemperaturaEstacao from './components/TemperaturaEstacao'
import ContadorDeCliques from './components/ContadorDeCliques'
import SorteadorDeNumeros from './components/SorteadorDeNumeros'
import SorteadorDeDados from './components/SorteadorDeDados'
import FormularioDeFeedback from './components/FormularioDeFeedback'
import FormularioDeLogin from './components/FormularioDeLogin'
import PostarComentario from './components/PostarComentario'




const App = () => {
  return (
    <>
      <OlaUsuario nome={"Caroline"}/>
      <Potenciacao numero={4.845} potencia={2}/>
      <RaizQuadrada numero={4.505}/>
      <Dobro numero={6.8756}/>
      <Metade numero={25.809}/>
      <ListaDeFilmes/>
      <MensagemClima/>
      <Destino/>
      <StatusPedido/>
      <MetroParaCentimetro valorMetro={2.896}/>
      <CentimetroParaMetro valorCentimetro={5.784}/>
      <RealParaDolar valorReal={5.589} />
      <DolarParaReal valorDolar={10.874}/>
      <CssGlobal/>
      <CssInline/>
      <CssInlineDinamico/>
      <DiaDaSemana dia={"sexta"}/>
      <DiaDaSemana dia={"domingo"}/>
      <DiaDaSemana dia={"segunda"}/>
      <TemperaturaEstacao estacao={"verao"}/>
      <TemperaturaEstacao estacao={"inverno"}/>
      <TemperaturaEstacao estacao={"outono"}/>
      <TemperaturaEstacao estacao={"primavera"}/>
      <ContadorDeCliques/>
      <SorteadorDeNumeros/>
      <SorteadorDeDados/>
      <FormularioDeFeedback/>
      <FormularioDeLogin/>
      <PostarComentario/>
    </>
  )
}

export default App