'use strict';

let sectors = 1000;
let totalPorts = sectors*.75;
let allPorts = [];
let allSectors = [];
let bigBangArray = [];
const portClass = ['Class1', 'Class2', 'Class3', 'Class4', 'Class5', 'Class6', 'Class7', 'Class8']

// Adds all sectors to the BigBangArray to ensure that a sector does not get duplicated
generateBigBangArray();
setStaticSectors();
setAllOtherSectors();
generateBigBangArray();
// generatePorts();

function SectGenerator(sectorNumber,sectorOut1=0, sectorOut2=0, sectorOut3=0, sectorOut4=0, sectorOut5=0, sectorName){
  this.sectorNumber = sectorNumber;
  this.sectorname = sectorName; // Random Generate Name
  this.sectorOut1 = sectorOut1;
  this.sectorOut2 = sectorOut2;
  this.sectorOut3 = sectorOut3;
  this.sectorOut4 = sectorOut4;
  this.sectorOut5 = sectorOut5;

  allSectors.push(this);
}

function PortGenerator(){
  sector = rndSectorGenerator();
  let rndNumber = Math.floor(Math.random() * portClass.length + 1);
  portClass = portClass[rndNumber];
  fuel = 2000;
  organics = 2000;
  equpment = 3000;
  
  allPorts.push(this);
}


function setStaticSectors() {
  // Function that sets sectors 1-10 to always look a certain way
  new SectGenerator(1, 2, 3, 4, 5, 6, 'Earth');
  new SectGenerator(2, 1, 3, 7, 8, 9, rndSectorName());
  new SectGenerator(3, 1, 2, 4, 10, rndSectorGenerator(), rndSectorName());
  new SectGenerator(4, 1, 3, 5, rndSectorGenerator(), rndSectorGenerator(), rndSectorName());
  new SectGenerator(5, 1, 4, 6, rndSectorGenerator(), rndSectorGenerator(), rndSectorName());
  new SectGenerator(6, 1, 5, 7, rndSectorGenerator(), rndSectorGenerator(), rndSectorName());
  new SectGenerator(7, 2, 6, 8, rndSectorGenerator(), rndSectorGenerator(), rndSectorName());
  new SectGenerator(8, 2, 7, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorName());
  new SectGenerator(9, 2, 10, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorName());
  new SectGenerator(10, 3, 9, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorName());
}

function generateBigBangArray(){
  for (let i = 11; i <= sectors; i++){
    let rndNumber = Math.floor(Math.random() * sectors);
    if (bigBangArray.includes(rndNumber) && (rndNumber < 11)){
      rndNumber = Math.floor(Math.random() * sectors);
    }
    console.log('Random number to push into bigBanArray', rndNumber);
    bigBangArray.push(rndNumber);
  }
}

function randomFill(){
    let rndNumber = Math.floor(Math.random() * sectors);
    console.log('Random Fill number to push into bigBanArray', rndNumber);
}

function rndSectorGenerator() {
    return bigBangArray.shift();
}

function rndSectorName() {
    return 'random_name_will_go_here'; // Generate a random name for a sector/
}

function setAllOtherSectors(){
  for(let i=11; i <=sectors; i++) {
    console.log('The current Sector is', i);
    console.log('The bigBangArray Length is: ', bigBangArray.length);
    if (bigBangArray.length > 6) {
      new SectGenerator(i, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorName());
    } else if (bigBangArray.length < 2) {
      new SectGenerator(i, rndSectorGenerator(), rndSectorName());
    } else if (bigBangArray.length < 3) {
      new SectGenerator(i, rndSectorGenerator(), rndSectorGenerator(), rndSectorName());
    } else if (bigBangArray.length < 4) {
      new SectGenerator(i, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorName());
    } else if (bigBangArray.length < 5){
      new SectGenerator(i, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorName());
    }else {
      new SectGenerator(i,randomFill(),randomFill(),randomFill(),randomFill(),randomFill(),randomFill(),rndSectorName());
    }
  }
}
