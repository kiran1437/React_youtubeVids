import React from 'react';

class VideoPlayer extends React.Component{
    
    render(){
        return(
            <div>
                <iframe title = "abs" width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>
        )
    }
}

export default VideoPlayer;