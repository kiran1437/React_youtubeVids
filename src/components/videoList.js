import React from "react";
import VideoItem from "./videoItem";

class VideoList extends React.Component {
  genrateVidItems = item => {
    return item;
  };
  callback = item => {
    this.props.onClickCallback(item);
  };

  render() {
    console.log(this.props);
    var items = this.props.vids.vidarr.map(x => {
      return <VideoItem item={x} onClickCallback={this.callback} />;
    });
    console.log(items);
    return <div> {items} </div>;
  }
}

export default VideoList;
