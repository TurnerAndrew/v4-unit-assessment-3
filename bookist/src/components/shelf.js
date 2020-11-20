import React from 'react'

function Shelf (props){
    const mappedTitles = props.shelf.map((element) => {
        return (
            <div>
                <p>{element.title}</p>
            </div>
            )
        }
    )


//displays books added to the list by title
//button empties the book list
//books are stored in an array, when one is clicked it's pushed to the array
//button will empty the array
    return(
        <div className='shelf'>
            <h1>Your Shelf</h1>
            <button onClick={props.clearShelf}>clear shelf</button>
            <div className='list'>
                <p>
                    {mappedTitles}
                </p>
            </div>
        </div>
    )
}


export default Shelf