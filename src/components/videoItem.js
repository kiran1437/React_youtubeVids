import React from "react";

class VideoItem extends React.Component {
  state = this.props.item;

  onThumbnailClick = event => {
    this.props.onClickCallback(this.state);
  };
  render() {
    return (
      <div>
        <img
          onClick={this.onThumbnailClick}
          alt={this.props.item.snippet.title}
          src={this.props.item.snippet.thumbnails.default.url}
        />
        <div />
      </div>
    );
  }
}

export default VideoItem;
