function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-placeholder', {
    width: 640,
    height: 360,
    videoId: 'HdzI-191xhU',
    events: {
      onReady: initialize
    }
  });
}
function initialize(){

}            

function deployVideo() {
  jQuery('.mm-product-video-modal-container').addClass('open');
  setTimeout(function() {
    jQuery('.mm-product-video-modal').addClass('open');
    player.playVideo();
  }, 250);
}

function destroyVideo() {
  jQuery('.mm-product-video-modal').removeClass('open');
  setTimeout(function() {
    jQuery('.mm-product-video-modal-container').removeClass('open');
    player.pauseVideo();
  }, 250);
}

jQuery('.mm-video-overlay').on('click', function() {
  destroyVideo();
});

jQuery('.mm-launch').on('click',function() {
  deployVideo();
});