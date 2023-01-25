let mainInputs = document.querySelectorAll('.input-cont input'),
    tipBtns = document.querySelectorAll('.tip-boxes button'),
    tipCustom = document.querySelector('.tip-boxes input'),
    errText = document.querySelectorAll('.label-box .alert-box'),
    resetBtn = document.querySelector('.result-box button'),
    result = document.querySelectorAll('.cont .result');
    
var bill, tip, pple;
    
for (var i = 0; i < mainInputs.length; i++) {
  mainInputs[i].addEventListener('focus', function(){
    this.parentElement.classList.add('focus');
  });
  
  mainInputs[i].addEventListener('blur', function(){
    this.parentElement.classList.remove('focus');
  });
}

tipBtns[0].addEventListener('click', function() {
    this.classList.add('selected');
    tip = 5;
    tipBtns[1].classList.remove('selected');
    tipBtns[2].classList.remove('selected');
    tipBtns[3].classList.remove('selected');
    tipBtns[4].classList.remove('selected');
    errText[1].innerHTML = "";
    
  });
  
tipBtns[1].addEventListener('click', function() {
  this.classList.add('selected');
  tip = 10;
  tipBtns[0].classList.remove('selected');
  tipBtns[2].classList.remove('selected');
  tipBtns[3].classList.remove('selected');
  tipBtns[4].classList.remove('selected');
  errText[1].innerHTML = "";
});
  
tipBtns[2].addEventListener('click', function() {
  this.classList.add('selected');
  tip = 15;
  tipBtns[1].classList.remove('selected');
  tipBtns[0].classList.remove('selected');
  tipBtns[3].classList.remove('selected');
  tipBtns[4].classList.remove('selected');
  errText[1].innerHTML = "";
});

tipBtns[3].addEventListener('click', function() {
  this.classList.add('selected');
  tip = 25;
  tipBtns[1].classList.remove('selected');
  tipBtns[2].classList.remove('selected');
  tipBtns[0].classList.remove('selected');
  tipBtns[4].classList.remove('selected');
  errText[1].innerHTML = "";
});

tipBtns[4].addEventListener('click', function() {
  this.classList.add('selected');
  tip = 50;
  tipBtns[1].classList.remove('selected');
  tipBtns[2].classList.remove('selected');
  tipBtns[3].classList.remove('selected');
  tipBtns[0].classList.remove('selected');
  errText[1].innerHTML = "";
});

for (var p = 0; p < tipBtns.length; p++) {
  tipBtns[p].addEventListener('click', function (){
    tipCustom.classList.remove('warn');
    tipCustom.value = '';
  });
}

tipCustom.addEventListener('focus', function () {
  removeSelected();
});

resetBtn.addEventListener('click', function(){
  mainInputs[0].value = '';
  mainInputs[1].value = '';
  tipCustom.value = '';
  removeSelected();
  displayNull();
});

mainInputs[0].addEventListener('keyup', function() {
  bill = this.value;
  if (bill == '') {
    errText[0].innerHTML = "Can't be Empty!";
    this.parentElement.classList.add('warn');
    displayNull();
  } else if (bill == 0) {
    errText[0].innerHTML = "Can't be Zero!";
    this.parentElement.classList.add('warn');
    this.value = '';
    displayNull();
  } else if (isNaN(bill)) {
    errText[0].innerHTML = "Not a number!";
    this.parentElement.classList.add('warn');
    this.value = '';
    displayNull();
  } else{
    errText[0].innerHTML = "";
    this.parentElement.classList.remove('warn');
    this.parentElement.classList.add('focus');
    calcResult();
  }
});

mainInputs[1].addEventListener('keyup', function() {
  pple = this.value;
  if (pple == '') {
    errText[2].innerHTML = "Can't be Empty!";
    this.parentElement.classList.add('warn');
    displayNull();
  } else if (pple == 0) {
    errText[2].innerHTML = "Can't be Zero!";
    this.parentElement.classList.add('warn');
    this.value = '';
    displayNull();
  } else if (isNaN(pple)) {
    errText[2].innerHTML = "Not a number!";
    this.parentElement.classList.add('warn');
    this.value = '';
    displayNull();
  } else {
    errText[2].innerHTML = "";
    this.parentElement.classList.remove('warn');
    this.parentElement.classList.add('focus');
    calcResult();
  }
});

tipCustom.addEventListener('focus', function(){
  this.classList.add('focus');
});

tipCustom.addEventListener('blur', function(){
  this.classList.remove('focus');
});

tipCustom.addEventListener('keyup', function() {
  tip = this.value;
  if (tip == '') {
    errText[1].innerHTML = "Can't be Empty!";
    this.classList.add('warn');
    displayNull();
  } else if (tip == 0) {
    errText[1].innerHTML = "Can't be Zero!";
    this.classList.add('warn');
    this.value = '';
    displayNull();
  } else if (isNaN(tip)) {
    errText[1].innerHTML = "Not a number!";
    this.classList.add('warn');
    this.value = '';
    displayNull();
  } else if (tip > 100) {
    errText[1].innerHTML = "Must not be >100!";
    this.classList.add('warn');
    displayNull();
  } else {
    errText[1].innerHTML = "";
    this.classList.remove('warn');
    this.classList.add('focus');
    calcResult();
  }
});

function tipAmount() {
  var rslt = ((tip * bill) / (pple * 100)).toFixed(2);
  return rslt;
  //var to2DecPlace = rslt.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
  //return to2DecPlace;
}

function calcResult() {
   if (bill == null || bill == undefined || tip == null || tip == undefined || pple == null || pple == undefined) {
    displayNull();
  } else {
    var amount = tipAmount();
    result[0].innerHTML = `$${amount}`;
    result[1].innerHTML = `$${((bill / pple) + Number(amount)).toFixed(2)}`;
  }
}

function displayNull() {
  result[0].innerHTML = '$0.00';
  result[1].innerHTML = '$0.00';
}

function removeSelected() {
  tipBtns[0].classList.remove('selected');
  tipBtns[1].classList.remove('selected');
  tipBtns[2].classList.remove('selected');
  tipBtns[3].classList.remove('selected');
  tipBtns[4].classList.remove('selected');
}