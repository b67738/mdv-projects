//alert("JavaScript works!");

// Randall Fulmer
// SDI 1302
// Project 3
// Korx's Journey

//JSON Data
var hero = {
	"name": "Korx",
	"race": "Dwarf",
	"prof": "Paladin",
	"level": 50,
	"HP": 5000,
	"MP": 2000
	
};

var monster = {
	"name": "Gannon",
	"HP": 200
};

//global variables
var sword = "Master Sword"
var armor = "Royal Armor"
var horse = "Pebbles"
var monsters = ["wolves", "bears", "skeletons", "gnolls"]
var night = true

//method procedure
var battleland = {
	zone: "badlands", //property string
	mobs: true, //property boolean
	fight: function() {
		if (this.mobs === true) {
		console.log("My name is " + hero.name + " the " + hero.race + " " + hero.prof + ". As always, there are monsters that need slaying!")
			if (this.zone === "badlands") { //nested conditional
			console.log("The badlands are a dangerous place!")
			}
		} else {
		console.log("Nothing to see here, keep moving.")
		}
	}
};

//boolean function
var difficulty = function (nightTime){
	if (nightTime === true) {
		monster.HP = monster.HP + 50
	}
	return difficulty
};

//






