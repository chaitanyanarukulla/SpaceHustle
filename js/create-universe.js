'use strict';

let maxSectors = 100;
let allPorts = [];
let allSectors = [];
let bigBangArray = [];
let portClass = ['NO-PORT','Class1', 'Class2', 'Class3', 'Class4', 'Class5', 'Class6', 'Class7', 'Class8'];
// 3 Array's to randomly generate sector names
let name1 = ['orion','avatar','proxima','jupiter', 'barite', 'cana', 'pappus', 'bendor', 'catuz', 'new', 'old', 'zodiak', 'kodiak', 'creeper', 'lamblon', 'bevy', 'troy', 'zabion', 'zion', 'refurbished', 'xide', 'hellcat', 'buthcer', 'farley', 'micro', 'shadow', 'zip', 'zep', 'rider', 'alpha', 'omega', 'beta', 'zeta', 'pi', 'jaku', 'hoth', 'alderan', 'tatooine', 'maldacur', 'dantoine', 'degaboh', 'system', 'stellar'];
let name2 = ['people', 'noctra', 'jets', 'lakers', 'pirates', 'underground', 'annex', 'fluffer', 'carnage', 'carthage', 'ford', 'mustang', 'sally', 'bob', 'billy', 'goat', 'george', 'leona', 'killer', 'instinct', 'hydra'];
let name3 = ['I', 'II', 'III', 'IV', 'V', 'VI','VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];

// Adds all sectors to the BigBangArray to ensure that a sector does not get duplicated
  generateBigBangArray(); // Sets Array to random order
  bigBang(); // Generates sectors by pushing to the constructor.
  setStaticSectors(); // Sets static warps for sectors 1-10.
  generatePortSectorOneToTen();
  setAllOtherSectors(); // Generate warps for sectors 11-maxSectors
  validateUniverse();

//Constructor function to generate a game sector with 5 warps out.
  function Sectors(sectorNumber, port=sectorNumber){
  this.sectorNumber = sectorNumber;
  this.sectorName = generateName(); // Random Generate Name
  this.sectorsOut = [];
  this.port = port;

  allSectors.push(this);
}

function bigBang(){
  for(let i=1; i <= maxSectors; i++){
    new Sectors(i);
  }
}

// Constructor function to generate a port with starting product and a buy/sell percentage.
function Ports(portSector,portClass='Class0'){
  this.portSector = portSector;
  this.portClass = portClass;
  this.fuel = getRandomNumber(3000,4000);
  this.organics = getRandomNumber(1000,4000);
  this.equipment = getRandomNumber(800,3000);
  this.sellPercent = getRandomNumber(60,80)/100;
  this.buyPercent = getRandomNumber(81,100)/100;

  allPorts.push(this);
}

// Function that sets sectors 1-10 to always look a certain way
function setStaticSectors() {
  allSectors[0].sectorsOut = [2, 3, 4, 5, rndSectorGenerator()];
  allSectors[1].sectorsOut = [3, 5, 6, 7, rndSectorGenerator()];
  allSectors[2].sectorsOut = [2, 5, 6, 8, rndSectorGenerator()];
  allSectors[3].sectorsOut = [5, 6, 7, 9, rndSectorGenerator()];
  allSectors[4].sectorsOut = [2, 3, 4, 8, rndSectorGenerator()];
  allSectors[5].sectorsOut = [2, 3, 4, 10, rndSectorGenerator()];
  allSectors[6].sectorsOut = [2, 6, 8, 10, rndSectorGenerator()];
  allSectors[7].sectorsOut = [3, 5, 7, 9, rndSectorGenerator()];
  allSectors[8].sectorsOut = [3, 4, 7, 8, rndSectorGenerator()];
  allSectors[9].sectorsOut = [2, 4, 6, 7, rndSectorGenerator()];
}

function generatePortSectorOneToTen(){
  new Ports(1,'Class9');
  new Ports(2, 'Class3');
  new Ports(3, 'Class1');
  new Ports(4, 'Class2');
  new Ports(5, 'Class7');
  new Ports(6, 'Class8');
  new Ports(7, 'Class3');
  new Ports(8, 'Class2');
  new Ports(9, 'Class4');
  new Ports(10, 'Class5');
}

function generateBigBangArray(){
  for (let i=11; i <= maxSectors; i++){
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

function setAllOtherSectors(){
  for(let i=0; i <5; i++) {
    for (let j = 10; j < maxSectors; j++) {
      if (bigBangArray.length > 0) {
        allSectors[j].sectorsOut[i] = rndSectorGenerator();
      } else {
        allSectors[j].sectorsOut[i] = getRandomNumber(1, maxSectors);
        allSectors[j].sectorsOut = allSectors[j].sectorsOut.sort();
      }
      if (i === 4) {
        new Ports(j, portClass[getRandomNumber(0, 9)]);  // Creates sectors.
      }
    }
  }
}

function rndSectorGenerator() {
  return bigBangArray.shift();
}

function getRandomNumber(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //inclusive of min, not inclusive of max
}

function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateName(){
  let name = capFirst(name1[getRandomNumber(0, name1.length)]) + ' ' + capFirst(name2[getRandomNumber(0, name2.length)]) + ' ' + capFirst(name3[getRandomNumber(0, name3.length)]);
	return name;
}

// Testing Function to validate there are no 0 Warp sectors.
function validateUniverse(){
  for (let i=0; i < maxSectors; i++){
    for (let j = 0; j < 5; j++){
      if (allSectors[i].sectorsOut[j] === 0){
        allSectors[i].sectorsOut[j] = rndSectorGenerator();
      }
    }
  }
}
