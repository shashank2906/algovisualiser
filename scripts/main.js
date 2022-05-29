var inp_as = document.getElementById('a_size'),
  array_size = inp_as.value;
var inp_gen = document.getElementById('a_generate');
var inp_aspeed = document.getElementById('a_speed');
//var array_speed=document.getElementById('a_speed').value;

var butts_algos = document.querySelectorAll('.algos button');

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById('array_container');
var cont2 = document.getElementById('array_container2');
cont.style = 'flex-direction:row';

// ---------------------------------------------------------
// Array generation and updation functions

inp_gen.addEventListener('click', generate_array);
inp_as.addEventListener('input', update_array_size);

// ---------------------------------------------------------
// generating arrays

function generate_array() {
  cont.innerHTML = '';

  for (var i = 0; i < array_size; i++) {
    div_sizes[i] =
      Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    divs[i] = document.createElement('div');
    cont.appendChild(divs[i]);
    margin_size = 0.3;
    divs[i].style =
      ' margin:0% ' +
      margin_size +
      '%; background-color: #343a40; width:' +
      (100 / array_size - 2 * margin_size) +
      '%; height:' +
      div_sizes[i] +
      '%;';
  }
}

// ---------------------------------------------------------
// Array size update

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}

window.onload = update_array_size();

// ---------------------------------------------------------
// Running the appropriate algorithm.

for (var i = 0; i < butts_algos.length; i++) {
  butts_algos[i].addEventListener('click', runalgo);
}

// ---------------------------------------------------------
// disable buttons

function disable_buttons() {
  for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].classList = [];
    butts_algos[i].classList.add('butt_locked');

    butts_algos[i].disabled = true;
    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_aspeed.disabled = true;
  }
}

// ---------------------------------------------------------
// enable buttons

function enable_buttons() {
  window.setTimeout(function () {
    for (var i = 0; i < butts_algos.length; i++) {
      butts_algos[i].classList = [];
      butts_algos[i].classList.add('butt_unselected');

      butts_algos[i].disabled = false;
      inp_as.disabled = false;
      inp_gen.disabled = false;
      inp_aspeed.disabled = false;
    }
  }, (c_delay += delay_time));
}

// ---------------------------------------------------------
// divs update

function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      ' margin:0% ' +
      margin_size +
      '%; width:' +
      (100 / array_size - 2 * margin_size) +
      '%; height:' +
      height +
      '%; background-color:' +
      color +
      ';';
  }, (c_delay += delay_time));
}

// ---------------------------------------------------------
// running algorithm

function runalgo() {
  disable_buttons();

  this.classList.add('butt_selected');
  switch (this.innerHTML) {
    case 'Bubble':
      Bubble();
      break;
    case 'Selection':
      Selection_sort();
      break;
    case 'Insertion':
      Insertion();
      break;
    case 'Merge':
      Merge();
      break;
    case 'Quick':
      Quick();
      break;
    case 'Heap':
      Heap();
      break;
    case 'Linear':
      Linear();
      break;
    case 'Binary':
      Binary();
      break;
  }
}

// ---------------------------------------------------------
// time delay

var speed = 100;

inp_aspeed.addEventListener('input', vis_speed);

function vis_speed() {
  var array_speed = inp_aspeed.value;
  switch (parseInt(array_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }

  delay_time = 10000 / (Math.floor(array_size / 10) * speed); //Decrease numerator to increase speed.
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed); //Decrease numerator to increase speed.
var c_delay = 0; //This is updated ov every div change so that visualization is visible.
