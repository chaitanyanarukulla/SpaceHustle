'use strict'
var userName = document.getElementById("userName").value;
var diffculity = document.getElementById("diffculity").value;
var shipName = document.getElementById("shipName").value;
var proPic = document.getElementById("proPic").value;


proPic = [pic1,pic2,pic3];

function User(userName,diffculity,shipName,proPic) {
    this.userName = userName;
    this.diffculity = diffculity;
    this.shipname = shipName;
    this.proPic = proPic;
    currentSector = 1 ;
    visitedSectorsArray = [];
    currentHolds = 20;
    turnsleft = 10; 
    credits = 100 ;
    maxHolds = 500;
}