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

// get middle color
function getCenterColor() {
    var color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    allColors.cc = color;
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
}

// function to make colors appear
function newColors() {
    reset();
    getCenterColor();
    document.getElementById("cc").style.backgroundColor = allColors.cc;
    getMatch();
}

// function to check clicked square
// +1 if correct, -1 if wrong


// 