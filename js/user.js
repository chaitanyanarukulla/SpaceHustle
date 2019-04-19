'use strict';

let player = {};
let credits, turns, holds;
//Is called in HTML upon form submission ------------------------------------------->
function subbmitUserinfo() {
  console.log('user.js running sumbitUserinfo');
  event.preventDefault();
  let userName = document.getElementById('userName').value;
  //userInfo is the id of the form and level is the name for all the radio buttons in that form
  var difficulty = getLevelValue(document.getElementById('userInfo'),'level');
  if (difficulty === 'easy'){
    credits = 1000000; turns = 500; holds = 1000;
  } else if (difficulty === 'medium'){
    credits = 500000; turns = 400; holds = 800;
  } else if (difficulty === 'hard'){
    credits = 100000; turns = 450; holds = 600;
  }
  player = new User(userName,credits, turns, holds);
  localStorage.setItem('player', JSON.stringify(player));
  window.open ('mainHTML.html','_self',false);
}

// User object has default game setting :------------------------------------------->
var User = function(userName, credits, turns, holds) {
  this.userName = userName;
  this.currentSector = 0;
  this.visitedSectorsArray = [1];
  this.currentHolds = holds;
  this.turnsleft = turns;
  this.credits = credits;
  this.maxHolds = holds;
  this.fuelHolds = 0;
  this.orgHolds = 0;
  this.equipHolds = 0;
  this.emptyHolds = holds;
};

function getLevelValue(form,name){
  var value ='';
  var radio = form.elements[name];

  for(var i =0 ; i< radio.length;i++){
    if(radio[i].checked){
      value = radio[i].value;
    }
  }
  return value;
}
