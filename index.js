var yes = document.getElementById("yes_button");
var no = document.getElementById("no_button");
var size = 20;
document.getElementById("no_button").onclick = function () {
    size += 40;
    yes.style.fontSize = size + 'px';
}
document.getElementById("yes_button").onclick = function () {
    alert("dankssss")
}