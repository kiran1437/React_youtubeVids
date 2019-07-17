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

    onThumbnailClick = (viddetails) => {
        /* callback */
        console.log(viddetails)

    }

    
    render(){
       
        return (            
            <div>
            <SearchBar callbackF = {this.getSearchTerm} />
            <VideoPlayer vidtitle = "xyz" source = "https://www.youtube.com/embed/tgbNymZ7vqY"/>
                <div> 
                    <VideoList vids={this.state} onClickCallback = {this.onThumbnailClick} />
                </div>
            </div>
        )    
    }
}

export default App