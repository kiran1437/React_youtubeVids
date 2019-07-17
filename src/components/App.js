import React from 'react';
import SearchBar from './searchBar'
import YoutubeApi from '../Api/youtubeApi'
import VideoList from './videoList'
import VideoPlayer from './videoPlayer'



class App extends React.Component{
    state = {vidarr:[]};
    constructor(){
        super()
        this.youtubeapi = new YoutubeApi()
    }


    getSearchTerm = (term) =>{
        /* callback function */
        const response = this.youtubeapi.search(term)
        Promise.resolve(response)
            .then(vidarr => this.setState({vidarr}))   
    }


    
    render(){
       
        return (            
            <div>
            <SearchBar callbackF = {this.getSearchTerm} />
            <VideoPlayer />
                <div> 
                    <VideoList vids={this.state}/>
                </div>
            </div>
        )    
    }
}

export default App