import React from "react";

class VideoPlayer extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.selectedVid) {
      const src =
        "https://www.youtube.com/embed/" + this.props.selectedVid.id.videoId;
      console.log(src);
      const title = this.props.selectedVid.snippet.title;
      return (
        <div>
          <iframe title={title} width="420" height="315" src={src} />
        </div>
      );
    }
    return <div />;
  }
}
export default VideoPlayer;
