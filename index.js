var yes = document.getElementById("yes_button");
var no = document.getElementById("no_button");
var size = 20;
const no_content = ["enaku unna romba pudikum😓", "yes tha solla", "plss🤒🤒", "romba tha panura nee😖", "pooi duuu na pasamata🤐", "ana nee romba panura😤", "purinjikoo yaaa😒", "enakum oru time varum😌","romba scene podura nee🙄","nalla va irruka mataa pooo😭😭","unakula marriage ha agathu"];
no_click = 0;
document.getElementById("no_button").onclick = function () {
    size += 40;
    yes.style.fontSize = size + 'px';
    if (no_click <= 10) {
        no.innerHTML = no_content[no_click];
        no_click++;
    }
    else {
        no.innerHTML = "😭😭";
    }
}
function load(){
    window.location.href = "newpage.html"
}