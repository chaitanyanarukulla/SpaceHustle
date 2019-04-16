'use strict'
var user = {};
console.log('h');
function subbmitUserinfo() {
    event.preventDefault();
    var userName = document.getElementById('userName').value;
    var diffculity = document.getElementsByName('level').value;
    var shipName = document.getElementById('shipName').value;
    // var proPic = document.getElementById('proPic').value;
    var proPic = 0; 
    user = new User(userName,diffculity,shipName,proPic);

  }

    var User = function(userName,level,shipName,proPic) {
    this.userName = userName;
    this.level = level;
    this.shipName = shipName;
    this.proPic = proPic;
    this.currentSector = 1 ;
    this.visitedSectorsArray = [];
    this.currentHolds = 20;
    this.turnsleft = 10; 
    this.credits = 100 ;
    this.maxHolds = 500;
}