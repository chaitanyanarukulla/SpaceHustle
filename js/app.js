'use strict'
var user = {};
function subbmitUserinfo() {
    event.preventDefault();
    var userName = document.getElementById('userName').value;
    var diffculity = document.getElementById('diffulity').value;
    var shipName = document.getElementById('shipName').value;
    var proPic = document.getElementById('proPic').value;
    user = new User(userName,diffculity,shipName,proPic);

  }

    var User = function(userName,diffculity,shipName,proPic) {
    this.userName = userName;
    this.diffculity = diffculity;
    this.shipName = shipName;
    this.proPic = proPic;
    this.currentSector = 1 ;
    this.visitedSectorsArray = [];
    this.currentHolds = 20;
    this.turnsleft = 10; 
    this.credits = 100 ;
    this.maxHolds = 500;
}