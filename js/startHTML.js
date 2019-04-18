document.addEventListener('DOMContentLoaded', function() {
  // Warp and Port Animation call.
  setTimeout(function(){
    fadeOutWarp();
  }, 2000);
});

function fadeOutWarp(){
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
