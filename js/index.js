'use strict';

document.addEventListener('DOMContentLoaded', function() {
  // Warp and Port Animation call.
  setTimeout(function(){
    fadeOutLoader();
  }, 2000);
  var el = document.getElementById('mainloader');
  el.style.opacity = 0;
});

function fadeOutLoader(){
  var el = document.getElementById('mainloader');
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .05) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}
