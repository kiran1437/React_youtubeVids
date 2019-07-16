import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state= {searchterm :''}

    }


    onSearchSubmit = (event) => {
        event.preventDefault()
        this.props.callbackF(this.state.searchterm)
    }


    onInputChange = (event) => {
        this.setState({searchterm: event.target.value})
        
    }

    render(){
        
        return (
                <div>
                    <form onSubmit = {this.onSearchSubmit} >
                        <label>search</label>
                        <input type='text' value= {this.state.searchterm} onChange={this.onInputChange} />
                    </form>
                </div>
        )
    }
}

export default SearchBar;