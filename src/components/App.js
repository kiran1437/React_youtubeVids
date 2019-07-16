import React from 'react';
import SearchBar from './searchBar'
import YoutubeApi from '../Api/youtubeApi'



class App extends React.Component{
    constructor(){
        super()
        this.state = {searchresults : []}
        this.youtubeapi = new YoutubeApi()
    }


     getSearchTerm = (term) =>{
        /* callback function */
        this.youtubeapi.search(term)
        
    }
    
    render(){
        console.log(this.state)
        return (
            
            <div><SearchBar callbackF = {this.getSearchTerm}/></div>
        )    
    }
}

export default App