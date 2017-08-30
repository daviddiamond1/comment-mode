(function(window, $, undefined){

  $('.ytp-right-controls').append('<button class="ytp-button comment-mode-button" id="comment-mode-enable" title="Enable Comment Mode"><svg class="comment-mode-icon" fill="#fff" height="95%" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button> <button class="ytp-button comment-mode-enabled" id="comment-mode-disable" title="Disable Comment Mode" style="display: none;"><svg width="22px" height="95%" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-2" transform="translate(-2.000000, 0.000000)"><g id="ic_comment_white_24px"><g id="Group"><path d="M21.99,4 C21.99,2.9 21.1,2 20,2 L4,2 C2.9,2 2,2.9 2,4 L2,16 C2,17.1 2.9,18 4,18 L18,18 L22,22 L21.99,4 Z M18,14 L6,14 L6,12 L18,12 L18,14 Z M18,11 L6,11 L6,9 L18,9 L18,11 Z M18,8 L6,8 L6,6 L18,6 L18,8 Z" id="Shape" fill="#FFFFFF"></path><polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon></g></g><circle id="Oval" fill="#F12B24" cx="21" cy="3" r="3"></circle></g></g></svg></button> <button class="ytp-button comment-mode-button" id="comment-mode-enable-theater" title="Enable Comment Mode" style="display: none;"><svg class="comment-mode-icon" fill="#fff" height="95%" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>');

})(window, jQuery);

  $("#comment-mode-enable").click(function(){
    $('.html5-video-player').prependTo( $('#related') );
    $("#player").removeAttr('www-core-2x-webp-vfl59ixOR').css("width","70%");
    $("#player").removeAttr('www-core-2x-webp-vfl59ixOR').css("height","70%");
    $("#related").removeAttr('www-core-2x-webp-vfl59ixOR').css("margin-top","35%");
  })(window, jQuery);
