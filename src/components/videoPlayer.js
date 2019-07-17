import React from 'react';

class VideoPlayer extends React.Component{
    
    render(){
        return(
            <div>
                <iframe title = {this.props.vidtitle} width="420" height="315" src={this.props.source}>
                </iframe>
            </div>
        )
    }
}

export default VideoPlayer;