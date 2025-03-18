// JavaScript source code
var classSelect = document.getElementById('class-form');

classSelect.addEventListener('change', function () {
    var classes = document.getElementsByClassName('chosen-class')
    for (var i = -1; i < classes.length-1; i++) {
        if (i+1 == classSelect.value) {
            classes[i + 1].classList.remove('hidden');
            classes[i + 1].id = 'chosen';


        } else {
            classes[i + 1].classList.add('hidden');
            classes[i + 1].id = 'nonchosen';
        }
    }
	
})

document.body.addEventListener('change', function () {
    var chosenDiv = document.querySelector('#chosen');

    var power = chosenDiv.querySelector('#power')
    
    if(power) selection = power.querySelector('#hermit-power');
    
    if(power) powers = power.getElementsByClassName('description')  
    if(power && selection) for (var i = 0; i < powers.length; i++) {
        
        if (powers[i].getAttribute('value') == selection.value) {
            powers[i].classList.remove('hidden');
        } else {
            powers[i].classList.add('hidden')
        }
    }
});

document.body.addEventListener('change', function () {
    var chosenDiv = document.querySelector('#chosen');
   
    selection = chosenDiv.querySelector('#royal-power-one');
    
    if(selection) powers = chosenDiv.querySelectorAll('.object')
  
    if(selection) for (var i = 0; i < powers.length; i++) {
        
        if (powers[i].getAttribute('value') == selection.value) {
            powers[i].classList.remove('hidden');
        } else {
            powers[i].classList.add('hidden')
        }
    }
});

document.body.addEventListener('change', function () {
    var chosenDiv = document.querySelector('#chosen');

    selection = chosenDiv.querySelector('#priest-power');

    if (selection) powers = chosenDiv.querySelectorAll('.object')

    if (selection) for (var i = 0; i < powers.length; i++) {

        if (powers[i].getAttribute('value') == selection.value) {
            powers[i].classList.remove('hidden');
        } else {
            powers[i].classList.add('hidden')
        }
    }
});
function FillForm() {
    var chosen = document.querySelector("#chosen");
    console.log(chosen);

    var strength = chosen.querySelector('#strength');
    var agility = chosen.querySelector('#agility');
    var presence = chosen.querySelector('#presence');
    var toughness = chosen.querySelector('#toughness');
    console.log(strength.value);
    var abilitiesDiv = chosen.querySelector(".misc")
    if (strength.value > 0 && agility.value > 0 && presence.value > 0 && toughness.value > 0) {
        console.log(abilitiesDiv);
        abilitiesDiv.classList.remove('hidden');
    }
}
//const chosenDiv = document.querySelector("#chosen");

//chosenDiv.querySelector("#strength").addEventListener("input", FillForm());

//console.log(chosenDiv);


/**
weapon first armor second
Classless d10 d4
Fanged Deserter d10 d4
Gutterborn Scum</option>   d10 d4
Esoteric Hermit</option>   d4 d2
Wretched Royalty</option>  d8 d3
Heretical Priest</option>  d8 d4
Occult Herbmaster</option> d6 d2

scroll d6 and d2
**/