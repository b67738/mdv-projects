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

//global variables
var sword = "Master Sword"
var armor = "Royal Armor"
var horse = "Pebbles"

//method procedure
var battleland = {
	zone: "badlands",
	mobs: true,
	fight: function() {
		if (this.mobs === true) {
		console.log("My name is " + hero.name + " the " + hero.race + " " + hero.prof + ". Looks like there are monsters that need slaying!")
		} else {
		console.log("Nothing to see here, keep moving.")
		}
	}
};

//




