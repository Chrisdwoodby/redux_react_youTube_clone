import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var videoListReducer = (state = [], action) => {
  switch(action.type) {
    case 'CHANGE_VIDEO_LIST':
      console.log(action)
      return action.videos;
    default:
      return state;
  }
};

export default videoListReducer;
