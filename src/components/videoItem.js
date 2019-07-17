import React from 'react'

class VideoItem extends React.Component{
    
    render(){
        console.log(this.props.item)
        return (
            <div  >
                <img alt={this.props.item.snippet.title} src ={this.props.item.snippet.thumbnails.default.url} />
                <div>
                       
                </div>
            </div>
        )
    }
}

export default VideoItem;