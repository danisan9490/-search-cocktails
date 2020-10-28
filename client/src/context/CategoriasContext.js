import React, { createContext, useState } from 'react'

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {

  // crear el state del Context
  const [hola, guardarHola] = useState('hola desde state');


  return (
    <CategoriasContext.Provider
      value={{
        hola
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  )
}
export default CategoriasProvider; 