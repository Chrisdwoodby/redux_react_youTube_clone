import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  switch(action.type) {
    case "CHANGE_VIDEO":
      return {
        script: action.video.script
      };
    default:
      return state
  }
};

export default currentVideoReducer;
