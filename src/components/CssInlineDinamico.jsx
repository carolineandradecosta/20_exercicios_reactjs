import React from 'react'

const CssInlineDinamico = () => {

    const defineEstilo = (ativo) => ativo
        ? { backgroundColor: 'green', color: 'white' }
        : { backgroundColor: 'gray', color: 'black' };

  return (
    <div style={defineEstilo(false)}>
        Texto com estilo inline dinâmico!
    </div>
  )
}

export default CssInlineDinamico