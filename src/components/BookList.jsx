import { useContext } from "react"
import { BookContext } from "./BookContextProvider"

const BookList = () => {
    const books = useContext(BookContext)

  return (
    <ul>
        {books.map(book => {
            return (
                <li key={book.id} style={{listStyle:"none"}} >
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                </li>
            )
        })}
    </ul>
  )
}

export default BookList;
