import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '' //initializes a place to store the search term
        }
    this.handleClear = this.handleClear.bind(this)
    this.handleClick = this.handleClick.bind(this)
    }

    handleChange(val){
        this.setState({userInput: val}) //changes the state to the search term

    }

    handleClick(){ //filters the books based on the term -- runs the filterBooks method from app.js
        this.props.filterBooks(this.state.userInput)
    }

    handleClear(){ //resets the search to an empty string
        this.props.reset()
    }

    render(){
        return (
            <div className='search-container'>
                <div className='search'>
                    <input onChange={(e) => this.handleChange(e.target.value)}></input>
                    <button onClick={this.handleClick}>search</button>
                    <button onClick={this.handleClear}>clear search</button>
                </div>
            </div>
        )
    }

}

export default SearchBar