import React from 'react';
import VideoItem from './videoItem'


class VideoList extends React.Component{
    
    
    genrateVidItems = (item) =>{
        return item;
    }
    callback = (item) => {
        this.props.onClickCallback(item)
    }


    render(){
       console.log(this.props)
        const items = this.props.vids.vidarr.map(x =>{
                         return <VideoItem item = {x} onClickCallback = {this.callback}/>       
                        })            
        return <div> {items} </div>
    }
}

export default VideoList;