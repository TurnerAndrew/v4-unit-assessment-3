import './App.css';
import Header from './components/header'
import React, {Component} from 'react'
import data from './data'  //brings in the data to be used
import SearchBar from './components/searchBar'
import Shelf from './components/shelf'
import BookList from './components/bookList'

class App extends Component{
  constructor(){
    super()
    this.state ={
      books: data, //sets the value of books to be equal to the data
      shelf: [],
      id: 0
    }

    this.addToShelf = this.addToShelf.bind(this)//allows these functions to be passed to children components while operating in this component
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)

  }

  addToShelf(book){
    this.setState({shelf: [book, ...this.state.shelf]}) //adds a book to the front of the existing array of books
  }

  clearShelf(){ 
    this.setState({shelf: []})
    //removes all entries from the shelf
  }

  filterBooks(input){ 
    let filteredBooks = this.state.books.filter((element) => {  //filters the books based on the user Input of the search bar
      if(element.title.toLowerCase().indexOf(input.toLowerCase()) !== -1){
        return element
      } else if(element.author.toLowerCase().indexOf(input.toLowerCase()) !== -1){ //converting both search and titles/authors allows to ignore case during search
        return element
      }
      }
    ) 
    this.setState({books: filteredBooks})//assigns the filtered array of books to the current state of books
    }

  reset(){
    this.setState({books: data})//clears search results
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <SearchBar filterBooks={this.filterBooks} reset={this.reset}/> 
        <div className='container'>
          <BookList bookList={this.state.books} addToShelf={this.addToShelf} filterBooks={this.filterBooks}/> 
          <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/> 
        </div>
      </div>
    )
  }
}
// this.filterBooks sends the filterBooks method as a prop to SearchBar component
// this.state.books sends the list of books to the BookList component as a property called bookList
// this.state.shelf sends shelf as a property to the Shelf Component
export default App;