import { useState } from 'react'
import {createContext} from 'react'

export const BookContext = createContext()

const Libros = (props) => { //recibe props para poder llamar a props.children que será el componente <BookList/> "encerrado" en las etiquetas en App.js
    const [books,setBooks]= useState([
        {id: 1, title: 'Código Da Vinci', author: 'Dan Brown'},
        {id: 2, title: 'Harry Potter', author: 'J. K. Rowling'},
        {id: 3, title: 'El Principito', author: 'Antoine de Saint-Exupéry'}
    ])
    
    //Este BookContext es el contexto creado en línea 4, no es el componente de la línea 6.
    return (
    <BookContext.Provider value={books}> 
        {props.children}
    </BookContext.Provider>
  )
}

export default Libros;
