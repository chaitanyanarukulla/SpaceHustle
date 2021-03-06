// getting data from local storage
var data = JSON.parse(localStorage.player);
//array to hold rules of Buy and Sell based on class name
var buySellRule=[];
//to update the planet name
var sectorName = document.getElementById('planetName');
//to next information about which sector user is going next
var nextSector = document.getElementById('hyper');
//logic for BUY/SELL , what all is user doing
var tradeBtn1 = document.getElementById('sectorFuel');
var tradeBtn2 = document.getElementById('sectorOrganic');
var tradeBtn3 = document.getElementById('sectorEquipment');

// User object has default game setting :------------------------>
function updatePlayerStats(){
  var fuel = document.getElementById('userFuelStat');
  var org = document.getElementById('userOrganicStat');
  var equ = document.getElementById('userEquimentStat');
  var cre = document.getElementById('userCreditStat');
  var turn = document.getElementById('userTurnStat');
  fuel.innerHTML = data.fuelHolds;
  org.innerHTML = data.orgHolds;
  equ.innerHTML = data.equipHolds;
  cre.innerHTML = data.credits;
  turn.innerHTML = data.turnsleft;
}
//load sector's stat :------------------------------------------->
function updateSectorStats(){
  var fuel = document.getElementById('sectorFuelStat');
  var org = document.getElementById('sectorOraganicStat');
  var equ = document.getElementById('sectorEquimentStat');
  var curSec = data.currentSector;
  if(curSec === 0){
    var rearCurSec = parseInt(data.currentSector) +1;
    sectorName.innerHTML = 'SECTOR: [' + rearCurSec + '] ' + allSectors[allPorts[curSec].portSector].sectorName;
  } else {
    sectorName.innerHTML = 'SECTOR: [' + curSec + '] ' + allSectors[allPorts[curSec].portSector].sectorName;
  }
  fuel.innerHTML = allPorts[curSec].fuel;
  org.innerHTML = allPorts[curSec].organics;
  equ.innerHTML = allPorts[curSec].equipment;
}

//Buy and Sell stats :------------------------------------------->
function buySellStats(){
  var fuel = document.getElementById('sectorFuel');
  var org = document.getElementById('sectorOrganic');
  var equ = document.getElementById('sectorEquipment');
  var index = 0;
  var curSec = data.currentSector;
  sectorRules(allPorts[curSec].portClass);
  fuel.innerHTML = buySellRule[index];
  index++;
  org.innerHTML = buySellRule[index];
  index++;
  equ.innerHTML = buySellRule[index];
  //now setting the values in the button such that inner logic can be used
  index = 0;
  fuel.value = buySellRule[index];
  index++;
  org.value = buySellRule[index];
  index++;
  equ.value = buySellRule[index];
}

// to fill the array of buySellRule rules :--------------------->
function sectorRules(className){
  //NO-PORT','Class1', 'Class2', 'Class3', 'Class4', 'Class5', 'Class6', 'Class7', 'Class8'
  if(className==='NO-PORT'){
    buySellRule=['No Stock','No Stock','No Stock'];
  }
  else if(className==='Class1'){
    buySellRule=['Buy','Buy','Sell'];
  }
  else if(className==='Class2'){
    buySellRule=['Buy','Sell','Buy'];
  }
  else if(className==='Class3'){
    buySellRule=['Sell','Buy','Buy'];
  }
  else if(className==='Class4'){
    buySellRule=['Sell','Sell','Buy'];
  }
  else if(className==='Class5'){
    buySellRule=['Sell','Buy','Sell'];
  }
  else if(className==='Class6'){
    buySellRule=['Buy','Sell','Sell'];
  }
  else if(className==='Class7'){
    buySellRule=['Sell','Sell','Sell'];
  }
  else if(className==='Class8'){
    buySellRule=['Buy','Buy','Buy'];
  }
  else if(className==='Class8'){
    buySellRule=['Buy','Buy','Buy'];
  }
  else if(className==='Class9'){
    buySellRule=['No Stock','No Stock','No Stock'];
  }
}

//next quest logic :------------------------------------------->
function updateNextQuest(){
  var sec1 = document.getElementById('sec1Nm');
  var sec2 = document.getElementById('sec2Nm');
  var sec3 = document.getElementById('sec3Nm');
  var sec4 = document.getElementById('sec4Nm');
  var sec5 = document.getElementById('sec5Nm');
  var curSec = data.currentSector;
  var outLet = allSectors[curSec].sectorsOut;


  sec1.innerHTML = outLet[0];
  sec2.innerHTML = outLet[1];
  sec3.innerHTML = outLet[2];
  sec4.innerHTML = outLet[3];
  sec5.innerHTML = outLet[4];

  var input1 = document.getElementById('sec1');
  var input2 = document.getElementById('sec2');
  var input3 = document.getElementById('sec3');
  var input4 = document.getElementById('sec4');
  var input5 = document.getElementById('sec5');
  input1.value = outLet[0];
  input2.value = outLet[1];
  input3.value = outLet[2];
  input4.value = outLet[3];
  input5.value = outLet[4];
}

//change background to the visited sector :-------------------->
function updateSectorVisted(){
  //array to hold all label from html

  var toUpdate = document.querySelectorAll('.col4 input');
  var changeLabel = document.querySelectorAll('.col4 label');
  var visitedSec = data.visitedSectorsArray;
  console.log(visitedSec);
  for(var i = 0 ; i < toUpdate.length; i++){
    console.log(toUpdate[i].value);
    if(visitedSec.includes(toUpdate[i].value)){
      changeLabel[i].style.background='lightgreen';

    }
  }
}

//upon page load :--------------------------------------------->
function pageLoad(){
  data = JSON.parse(localStorage.player);
  updateSectorStats();
  buySellStats();
  updatePlayerStats();
  updateNextQuest();
  updateSectorVisted();
  portClassImg();
}

//going to the next sector, get called upon click :------------->
function next(){
  var formValues = document.getElementById('nextQuest');
  var nextSec =0;

  for(var i =3 ; i <8;i++){
    if(formValues[i].checked){
      nextSec = formValues[i].value;
    }
  }

  data.turnsleft -= 1;
  if (data.turnsleft < 0){
    console.log('The Game is Over! Granting Extra Turns to Have Fun');
    turns.left = 10;
  }
  data.visitedSectorsArray.push(data.currentSector);
  data.currentSector = nextSec;
  localStorage.setItem('player', JSON.stringify(data));
  // data = JSON.parse(localStorage.update);
  // buySellRule=[];
  pageLoad();
}

//trading based on sections stat, get called upon the click:---->
function tradeFuel(){
  var toDo = tradeBtn1.value;
  var itemName = ' ';
  product(toDo,'fuel');
}


function tradeOrganic(){
  var toDo = tradeBtn2.value;
  var itemName = ' ';
  product(toDo,'org');
}


function tradeEqu(){
  var toDo = tradeBtn3.value;
  var itemName = ' ';
  product(toDo,'equip');
}

function recall(){
  data.visitedSectorsArray.push(data.currentSector);
  data.currentSector = 0;
  localStorage.setItem('player', JSON.stringify(data));
  pageLoad();
}

function goIndex(){
  console.log('goIndex');
  console.log('goIndex');
  console.log('goIndex');
  window.open ('index.html','_self',false);
}

function portClassImg(){
  console.log('running');
  var portClassImg = document.getElementById('portImg');
  var curSec = data.currentSector;
  var portClass = allPorts[curSec].portClass;
  portClassImg.classList.add(portClass);
}

pageLoad();
nextSector.addEventListener('click',next);
tradeBtn1.addEventListener('click',tradeFuel);
tradeBtn2.addEventListener('click',tradeOrganic);
tradeBtn3.addEventListener('click',tradeEqu);
