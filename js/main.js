$(window).load(function() {
  Animate loader off screen
  setInterval(function() {
    $(".se-pre-con").fadeOut("slow");
  }, 2000);
});

get data from localStorage
var data = JSON.parse(localStorage.update);
function updatePlayerStats(){
  var fuel = document.getElementById('userFuelStat');
  var org = document.getElementById('userOrganicStat');
  var equ = document.getElementById('userEquipmentStat');
  var cre = document.getElementById('userCreditStat');
  var turn = document.getElementById('userTurnStat');

  fuel.innerHTML = data.fuelHolds;
  org.innerHTML = data.orgHolds
  equ.innerHTML = data.equipHolds;
  cre.innerHTML = data.credits;
  turn.innerHTML = data.turnsleft;
}
//load sector's stat
function updateSectorStats(){
  var fuel = document.getElementById('sectorFuelStat');
  var org = document.getElementById('sectorOrganicStat');
  var equ = document.getElementById('sectorEquipmentStat');

  fuel.innerHTML = data.;
  org.innerHTML = data.;
  equ.innerHTML = data.; 
}
//Buy and Sell stats
function buySellStats(){
  var fuel = document.getElementById('sectorFuel');
  var org = document.getElementById('sectorOrganic');
  var equ = document.getElementById('sectorEquipment');

  fuel.value = data.
  org.value = data.
  equ.value = data.
}
//next quest logic
function updateNextQuest(){
  var sector1 = document.getElementById('sector1Name');
  var sector2 = document.getElementById('sector2Name');
  var sector3 = document.getElementById('sector3Name');
  var sector4 = document.getElementById('sector4Name');
  var sector5 = document.getElementById('sector5Name');
  sector1.innerHTML = data.
  sector1.innerHTML = data.
  sector1.innerHTML = data.
  sector1.innerHTML = data.
  sector1.innerHTML = data.
}

updateSectorStats();
buySellStats();
updatePlayerStats();
