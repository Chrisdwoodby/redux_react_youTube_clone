import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => (
  function thunk(dispatch) {
    return $.get (`https://www.googleapis.com/youtube/v3/search`, ({videos}) => {
      dispatch({type: "CHANGE_VIDEO_LIST", video: {videos}})
    })
  }
);

export default handleVideoSearch;

// TODO:  Write an asynchronous action to handle a video search!
// need to pass a function instead of an object