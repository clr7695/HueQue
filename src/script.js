import Color from 'node_modules\color\index.js';

// the colors for all of the squares
var allColors = {
    "tl": null,
    "tc": null,
    "tr": null,
    "cl": null,
    "cc": null,
    "cr": null,
    "bl": null,
    "bc": null,
    "br": null
}

var match = null;
var centerColor = null;

// get middle color
function getCenterColor() {
    var color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    allColors.cc = color;
    centerColor = Color(allColors.cc);
}

function getMatch() {
    var squareList = ["tl", "tc", "tr", "cl", "cr", "bl", "bc", "br"];
    var index = Math.floor(Math.random() * 7);
    match = squareList[index];
    delete squareList[index];
    allColors[match] = allColors.cc;
    squareList = squareList.filter(elm => elm);
    console.log(squareList);
    console.log(allColors);
    return squareList;
}

function getSimilarColors() {
    var hexes = [];
    var current = centerColor;
    current.lighten(0.5);
    hexes.concat(current.hex());
    current.darken(0.5);
    hexes.concat(current.hex());
    current.saturate(0.5);
    hexes.concat(current.hex());
    current.desaturate(0.5);
    hexes.concat(current.hex());
    current.fade(0.5);
    hexes.concat(current.hex());
    current.saturate(0.7);
    hexes.concat(current.hex());
    current.lighten(0.6);
    hexes.concat(current.hex());
    return hexes;
}

// reset all colors
function reset() {
    allColors = {
        "tl": null,
        "tc": null,
        "tr": null,
        "cl": null,
        "cc": null,
        "cr": null,
        "bl": null,
        "bc": null,
        "br": null
    }
    
    // set score to zero
    document.getElementById("score").innerText = "0";

    match = null;
    centerColor = null;
}

// create random order
function randomOrder() {
    var done = false;
    var indexes = [];
    var newNum;
    while(!done) {
        newNum = Math.floor(Math.random() * 7);
        if(indexes.find(newNum) == null) {
            indexes.concat(newNum);
        }
        if(indexes.length >= 7) {
            done = true;
        }
    }
    return indexes;
}

// function to make colors appear
function newColors() {
    reset();
    getCenterColor();
    document.getElementById("cc").style.backgroundColor = allColors.cc;
    var squareList = getMatch();
    var similarColors = getSimilarColors(); // get the similar colors
    var order = randomOrder(); // random order of color assignments
    for(let i = 0; i < squareList.length; i++) { // assign the colors to the remaining squares
        allColors[squareList[order[i]]] = similarColors[i];
    }
    console.log(allColors);
}

// function to check clicked square
// +1 if correct, -1 if wrong


// 