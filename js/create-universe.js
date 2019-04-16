'use strict';

let sectors = 100;
let allPorts = [];
let allSectors = [];
let bigBangArray = [];
const portClass = ['NO-PORT','Class1', 'Class2', 'Class3', 'Class4', 'Class5', 'Class6', 'Class7', 'Class8']

// Adds all sectors to the BigBangArray to ensure that a sector does not get duplicated
  generateBigBangArray(); // Sets Array to random order
  setStaticSectors();
  generatePortSectorOneToTen();
  setAllOtherSectors();
  generateBigBangArray(); // Sets Array to random order
  generateAllOtherPorts();


function SectGenerator(sectorNumber,sectorOut1=0, sectorOut2=0, sectorOut3=0, sectorOut4=0, sectorOut5=0, sectorName){
  this.sectorNumber = sectorNumber;
  this.sectorname = sectorName; // Random Generate Name
  this.sectorOut1 = sectorOut1;
  this.sectorOut2 = sectorOut2;
  this.sectorOut3 = sectorOut3;
  this.sectorOut4 = sectorOut4;
  this.sectorOut5 = sectorOut5;
  this.sectorout6 = 1;
  allSectors.push(this);
}

function PortGenerator(portSector,portClass='Class0'){
  this.portSector = portSector;
  this.portClass = portClass;
  this.fuel = 4000;
  this.organics = 4000;
  this.equpment = 4000;
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

function randomFill(){
    let rndNumber = Math.floor(Math.random() * sectors)+1 ;
    return rndNumber;
    console.log('Random Fill number to push into bigBangArray', rndNumber);
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
    if (bigBangArray.length >= 6) {
      new SectGenerator(i, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorName());
    } else if ((bigBangArray.length < 2) && (bigBangArray.length != 0)){
      new SectGenerator(i, rndSectorGenerator(),randomFill(),randomFill(),randomFill(),randomFill(),randomFill(), rndSectorName());
    } else if ((bigBangArray.length < 3) && (bigBangArray.length != 0)){
      new SectGenerator(i, rndSectorGenerator(), rndSectorGenerator(),randomFill(),randomFill(),randomFill(),randomFill(),rndSectorName());
    } else if ((bigBangArray.length < 4) && (bigBangArray.length != 0)){
      new SectGenerator(i, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(),randomFill(),randomFill(),randomFill(),rndSectorName());
    } else if ((bigBangArray.length <=5) && (bigBangArray.length != 0)){
      new SectGenerator(i, rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(), rndSectorGenerator(),randomFill(),randomFill(), rndSectorName());
    }else {
      new SectGenerator(i,randomFill(),randomFill(),randomFill(),randomFill(),randomFill(),randomFill(),rndSectorName());
    }
  }
}

function randomPortClassAssignment(){
  let rndNumber = Math.floor(Math.random() * portClass.length);
  return rndNumber;
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

function generateAllOtherPorts(){
  let tempSector = 0;
  let tempClass = '';
  for (let i=11; i <=sectors; i++){
    tempSector = rndSectorGenerator();
    tempClass = portClass[randomPortClassAssignment()];
    new PortGenerator(tempSector, tempClass);

  }
}
