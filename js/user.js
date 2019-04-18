'use strict';
var player = {};

//to held value of selected profile pic---------------------------------------------->
// var proPic = document.getElementById('img');

//previously selected profile avatar------------------------------------------------->
// var preProPic = '';

//Flag for selecting avatar --------------------------------------------------------->
var isFirst = true;

//Is called in HTML upon form submission ------------------------------------------->
function subbmitUserinfo() {
  console.log('user.js running sumbitUserinfo');
  event.preventDefault();
  var userName = document.getElementById('userName').value;
  //userInfo is the id of the form and level is the name for all the radio buttons in that form
  var diffculity = getLevelValue(document.getElementById('userInfo'),'level');
  var shipName = document.getElementById('shipName').value;
  // player = new User(userName,diffculity,shipName,proPic);
  player = new User(userName,diffculity);
  localStorage.setItem('update', JSON.stringify(player));
  window.open ('mainHTML.html','_self',false);
}

// User object has default game setting :------------------------------------------->
var User = function(userName,level) {
  this.userName = userName;
  this.level = level;
  // this.shipName = shipName;
  // this.proPic = proPic;
  this.currentSector = 0;
  this.visitedSectorsArray = [];
  this.currentHolds = 500;
  this.turnsleft = 50;
  this.credits = 100000 ;
  this.maxHolds = 500;
  this.fuelHolds = 0;
  this.orgHolds = 0;
  this.equipHolds = 0;
  this.emptyHolds = 500;
};
// function getProfileName(){
//   proPic = window.event.srcElement.id;
//   if(isFirst){
//     document.getElementById(proPic).style.opacity ='1';
//     preProPic = proPic;
//     isFirst = false;
//   }
//   else{
//     document.getElementById(preProPic).style.opacity ='0.7';
//     document.getElementById(proPic).style.opacity ='1';
//     preProPic = proPic;
//   }
// }
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

console.log('player data:', player);
//when user selects the profile pic---------------------------------------------->
// proPic.addEventListener('click',getProfileName);