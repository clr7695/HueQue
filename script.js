// get middle color
function getCenterColor() {
    var color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    return color;
}

// function to make colors appear
function newColors() {
    var centerColor = getCenterColor();
    document.getElementById("cc").style.backgroundColor = centerColor;
}

// function to check clicked square
// +1 if correct, -1 if wrong


// 