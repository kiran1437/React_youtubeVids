import axios from "axios";

class YoutubeApi {
  constructor() {
    this.Axios = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      headers: {
        Accept: "application/json"
      }
    });
  }

  search = async term => {
    console.log(term);
    const response = await this.Axios.get("/search", {
      params: {
        part: "snippet",
        type: "video",
        q: term,
        maxResults: "20",
        key: "AIzaSyC5fXmfpzECBRPw8ATCqPIGDl0nnzkfANk"
      }
    });
    console.log(response.data.items);
    return response.data.items;
  };
}

export default YoutubeApi;
