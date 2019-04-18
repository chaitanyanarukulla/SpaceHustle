document.addEventListener('DOMContentLoaded', function() {
  // Warp and Port Animation call.
  var el = document.getElementById('portImg');
  el.style.opacity = 0;

  setTimeout(function(){
    fadeOutWarp();
    fadeInPort();
  }, 2000);
  // Warp button animation.
  setTimeout(function() {
    move();
    console.log('running hyper animation.');
  }, 8000);
});

function fadeOutWarp(){
  var el = document.getElementById('warp');
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .05) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function fadeInPort(){
  var el = document.getElementById('portImg');
  // el.style.display = display || "block";
  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .005) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

function move() {
  var elem = document.getElementById("hyper");   
  var elemText = document.getElementById("hyperText");  
  var width = 20;
  var id = setInterval(frame, 80);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      elem.classList.remove('pulse');
      elem.classList.add('pulseReady');
      elemText.innerHTML = 'WARPDRIVE READY!';
    } else {
      width++; 
      elem.style.width = width + '%';
      elemText.innerHTML = width * 1  + '%'; 
    }
  }
}
// var portImg = document.getElementById("portImg"); 
// portImg.addClass("fadein");
// $(document).ready(function() {
//   $('.home').hover(function() {
//     $(this).html('Warning!');
//   }, function() {
//     $(this).html('Recall');
//   });
// });

