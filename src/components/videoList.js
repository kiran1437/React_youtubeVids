import React from 'react';
import VideoItem from './videoItem'


class VideoList extends React.Component{
    
    
    genrateVidItems = (item) =>{
        return item;
    }

    render(){
       
        const items = this.props.vids.vidarr.map(x =>{
                         return <VideoItem item = {x} />       
                        })            
        return <div> {items} </div>
    }
}

export default VideoList;