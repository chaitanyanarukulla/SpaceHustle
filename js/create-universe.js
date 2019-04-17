'use strict';

let sectors = 100;
let allPorts = [];
let allSectors = [];
let bigBangArray = [];
let portClass = ['NO-PORT','Class1', 'Class2', 'Class3', 'Class4', 'Class5', 'Class6', 'Class7', 'Class8'];
let name1 = ['orion','avatar','proxima','jupiter', 'barite', 'cana', 'pappus', 'bendor', 'catuz', 'new', 'old', 'zodiak', 'kodiak', 'creeper', 'lamblon', 'bevy', 'troy', 'zabion', 'zion', 'refurbished', 'xide', 'hellcat', 'buthcer', 'farley', 'micro', 'shadow', 'zip', 'zep', 'rider', 'alpha', 'omega', 'beta', 'zeta', 'pi', 'jaku', 'hoth', 'alderan', 'tatooine', 'maldacur', 'dantoine', 'degaboh', 'system', 'stellar'];
let name2 = ['people', 'noctra', 'jets', 'lakers', 'pirates', 'underground', 'annex', 'fluffer', 'carnage', 'carthage', 'ford', 'mustang', 'sally', 'bob', 'billy', 'goat', 'george', 'leona', 'killer', 'instinct', 'hydra'];
let name3 = ['I', 'II', 'III', 'IV', 'V', 'VI','VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];

// Adds all sectors to the BigBangArray to ensure that a sector does not get duplicated
  generateBigBangArray(); // Sets Array to random order
  setStaticSectors();
  generatePortSectorOneToTen();
  setAllOtherSectors();

function SectGenerator(sectorNumber,sectorOut1=0, sectorOut2=0, sectorOut3=0, sectorOut4=0, sectorOut5=0, sectorOut6=1, port=sectorNumber){
  this.sectorNumber = sectorNumber;
  this.sectorname = generateName(); // Random Generate Name
  this.sectorOut1 = sectorOut1;
  this.sectorOut2 = sectorOut2;
  this.sectorOut3 = sectorOut3;
  this.sectorOut4 = sectorOut4;
  this.sectorOut5 = sectorOut5;
  this.sectorout6 = sectorOut6;
  this.port = port;
  allSectors.push(this);
}

function PortGenerator(portSector,portClass='Class0'){
  this.portSector = portSector;
  this.portClass = portClass;
  this.fuel = getRandomNumber(3000,4000);
  this.organics = getRandomNumber(1000,4000);
  this.equpment = getRandomNumber(500,1500);
  this.sellPercent = getRandomNumber(60,80)/100;
  this.buyPercent = getRandomNumber(81,100)/100;
  allPorts.push(this);
}

function setStaticSectors() {
  // Function that sets sectors 1-10 to always look a certain way
  new SectGenerator(1, 2, 3, 4, 5, 6, 'Earth');
  new SectGenerator(2, 1, 3, 7, 8, 9,);
  new SectGenerator(3, 1, 2, 4, 10, rndSectorGenerator());
  new SectGenerator(4, 1, 3, 5, rndSectorGenerator(), rndSectorGenerator());
  new SectGenerator(5, 1, 4, 6, rndSectorGenerator(), rndSectorGenerator());
  new SectGenerator(6, 1, 5, 7, rndSectorGenerator(), rndSectorGenerator());
  new SectGenerator(7, 2, 6, 8, rndSectorGenerator(), rndSectorGenerator());
  new SectGenerator(8, 2, 7, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator());
  new SectGenerator(9, 2, 10, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator());
  new SectGenerator(10, 3, 9, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator());
}

function generatePortSectorOneToTen(){
  new PortGenerator(1,'Class9');
  new PortGenerator(2, 'Class3');
  new PortGenerator(3, 'Class1');
  new PortGenerator(4, 'Class2');
  new PortGenerator(5, 'Class7');
  new PortGenerator(6, 'Class8');
  new PortGenerator(7, 'Class3');
  new PortGenerator(8, 'Class2');
  new PortGenerator(9, 'Class4');
  new PortGenerator(10, 'Class5');
}

function generateBigBangArray(){
  for (let i=11; i <= sectors; i++){
    bigBangArray.push(i);
  }
  shuffleArray();
}

function shuffleArray() {
    for (let i = bigBangArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = bigBangArray[i];
        bigBangArray[i] = bigBangArray[j];
        bigBangArray[j] = temp;
    }
}


function rndSectorGenerator() {
    return bigBangArray.shift();
}

function setAllOtherSectors(){
  for(let i=11; i <=sectors; i++) {
    console.log('The current Sector is', i);
    console.log('The bigBangArray Length is: ', bigBangArray.length);
    if (bigBangArray.length >= 6) {
      new SectGenerator(i, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator());
    } else if ((bigBangArray.length < 2) && (bigBangArray.length != 0)){
      new SectGenerator(i, rndSectorGenerator(),getRandomNumber(11,sectors),getRandomNumber(11,sectors),getRandomNumber(11,sectors),getRandomNumber(11,sectors),getRandomNumber(11,sectors));
    } else if ((bigBangArray.length < 3) && (bigBangArray.length != 0)){
      new SectGenerator(i, rndSectorGenerator(), rndSectorGenerator(),getRandomNumber(11,sectors),getRandomNumber(11,sectors),getRandomNumber(11,sectors),getRandomNumber(11,sectors));
    } else if ((bigBangArray.length < 4) && (bigBangArray.length != 0)){
      new SectGenerator(i, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(),getRandomNumber(11,sectors),getRandomNumber(11,sectors),getRandomNumber(11,sectors));
    } else if ((bigBangArray.length <=5) && (bigBangArray.length != 0)){
      new SectGenerator(i, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(),getRandomNumber(11,sectors),getRandomNumber(11,sectors));
    }else {
      new SectGenerator(i,getRandomNumber(11,sectors),getRandomNumber(11,sectors),getRandomNumber(11,sectors),getRandomNumber(11,sectors),getRandomNumber(11,sectors),getRandomNumber(11,sectors),getRandomNumber(11,sectors));
    }
    new PortGenerator(i, portClass[getRandomNumber(0,9)]);

  }
}

function getRandomNumber(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //inclusive of min, not inclusive of max
}

function capFirst(string) {
  console.log(string);
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateName(){
	let name = capFirst(name1[getRandomNumber(0, name1.length)]) + ' ' + capFirst(name2[getRandomNumber(0, name2.length)]) + ' ' + capFirst(name3[getRandomNumber(0, name3.length)]);
	return name;
}
