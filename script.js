//(function(window, $, undefined){

  //alert('😄');

//})(window, jQuery);


(function(window, $, undefined){

  $('.ytp-right-controls').append('<button class="ytp-button comment-mode-button" id="comment-mode-extension" title="Enable Comment Mode"><svg class="comment-mode-icon" fill="#fff" height="95%" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>');

})(window, jQuery);

$("#comment-mode-extension").click(function(){
  $("#player-api").removeAttr('www-core-2x-webp-vfl59ixOR').css("position","fixed");
  $("#player-api").removeAttr('www-core-2x-webp-vfl59ixOR').css("height","231px");
  $("#player-api").addClass('yt-card');
  $(".player-api").removeAttr('www-core-2x-webp-vfl59ixOR').css("background","none");
  $(".player-api").removeAttr('www-core-2x-webp-vfl59ixOR').css("width","410px");
  $(".player-api").removeAttr('www-core-2x-webp-vfl59ixOR').css("left","757px");
  $("#watch7-sidebar-contents").removeAttr('www-core-2x-webp-vfl59ixOR').css("position","fixed");
  $("#watch7-sidebar-contents").removeAttr('www-core-2x-webp-vfl59ixOR').css("width","32%");
  $("#watch7-sidebar-contents").removeAttr('www-core-2x-webp-vfl59ixOR').css("top","300px");
  $(".video-stream").removeAttr('www-core-2x-webp-vfl59ixOR').css("width","410px");
  $(".video-stream").removeAttr('www-core-2x-webp-vfl59ixOR').css("height","240px");
  $(".ytp-right-controls").removeAttr('www-core-2x-webp-vfl59ixOR').css("position","absolute");
  $(".ytp-right-controls").removeAttr('www-core-2x-webp-vfl59ixOR').css("left","194px");
  $(".html5-video-player").removeAttr('www-core-2x-webp-vfl59ixOR').css("height","231px");
  $(".html5-main-video").removeAttr('www-core-2x-webp-vfl59ixOR').css("height","231px");
  $(".ytp-progress-bar-container").css("width","410px;");
  $(".ytp-progress-list").removeAttr('www-core-2x-webp-vfl59ixOR').css("width","380px");
  $(".ytp-progress-bar").removeAttr('www-core-2x-webp-vfl59ixOR').css("width","380px");
  $("#watch7-main-container").removeAttr('www-core-2x-webp-vfl59ixOR').css("margin-top","-380px");
  $("#page").removeAttr('www-core-2x-webp-vfl59ixOR').css("padding-top","10px");
  $(".ytp-size-button").removeAttr('www-player-2x-webp-vflgpIFfP').css("display","none");
});
