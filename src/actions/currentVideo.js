var changeVideo = (video) => ({
  type: "CHANGE_VIDEO",
  video: video
  // console.log(video);
});

export default changeVideo;

//TODO:  Return some action object to change the currently playing video.