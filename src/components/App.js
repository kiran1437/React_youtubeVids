import React from "react";
import SearchBar from "./searchBar";
import YoutubeApi from "../Api/youtubeApi";
import VideoList from "./videoList";
import VideoPlayer from "./videoPlayer";

class App extends React.Component {
  state = { vidarr: [], selectedVid: null };
  constructor() {
    super();
    this.youtubeapi = new YoutubeApi();
  }

  getSearchTerm = term => {
    /* callback function */
    this.youtubeapi
      .search(term)
      .then(response => this.setState({ vidarr: response }));

    console.log();
  };

  onThumbnailClick = selectedVid => {
    /* callback */
    console.log(selectedVid);
    this.setState({ selectedVid });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <SearchBar callbackF={this.getSearchTerm} />
        <VideoPlayer selectedVid={this.state.selectedVid} />
        <div>
          <VideoList
            vids={this.state}
            onClickCallback={this.onThumbnailClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
