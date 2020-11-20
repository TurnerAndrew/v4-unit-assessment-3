import './App.css';
import Header from './components/header'
import React, {Component} from 'react'
import data from './data'
import SearchBar from './components/searchBar'
import Shelf from './components/shelf'
import BookList from './components/bookList'

class App extends Component{
  constructor(){
    super()
    this.state ={
      books: data, //brings in the list of books
      shelf: [],
      id: 0
    }

    this.addToShelf = this.addToShelf.bind(this)//allows these functions to be used in children components while operating in this component
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)

  }

  addToShelf(book){
    this.setState({shelf: [book, ...this.state.shelf]})
  }

  clearShelf(){ 
    this.setState({shelf: []})
    //removes all entries from the shelf
  }

  filterBooks(input){ 
    let filteredBooks = this.state.books.filter((element) => {
      if(element.title.toLowerCase().indexOf(input.toLowerCase()) !== -1){
        return element
      } else if(element.author.toLowerCase().indexOf(input.toLowerCase()) !== -1){
        return element
      }
      }
    ) 
    this.setState({books: filteredBooks})
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



export default App;
