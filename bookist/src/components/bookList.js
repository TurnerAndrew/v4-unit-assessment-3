import React from 'react'

function BookList(props) {

    //map the books to display their title and image -- need an index
    //display each in it's own div with img and  title
    const mappedBooks = props.bookList.map((element) => {
        return (
            <div onClick={() => props.addToShelf(element)} className='book-holder'>
            <img className='book-image' src={element.img}/>
                <h4 className='title'>{element.title} by {element.author}</h4>
            </div>
        )
    }
)

    //clicking on the containing div runs addToShelf function from app.js
    //onClick() => this.props.addBook

    return (
        <div className='book-list'>
            {mappedBooks}
        </div>
    )
}


export default BookList