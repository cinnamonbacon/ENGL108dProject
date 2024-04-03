const source1 = document.getElementById("src1");
const source2 = document.getElementById("src2");

console.log('start');

const human = ["Fake life through goggles<br>Endless possiblities<br>Unhealthy outcomes",
, "Worlds of falsehoods and ideal situations<br>No thoughts of commitments and real obligations<br>Living in your own world<br>As addiction takes hold<br><br>No concept of time<br>No sense of mind<br>The allure is too strong<br>Leave reality behind"];
const robot = ["Eyes lost in pixels<br>Disconnected from the world<br>Human touch fades fast",
"In pixelated worlds we're trapped,<br>Human bonds by screens are snapped.<br>Eyes strained in the artificial glow,<br>As real connections cease to flow<br><br>In digital confines, we reside,<br>Humanity's essence begins to slide"];
let correct = -1;

const next = document.getElementById("next-button");

let counter = 0;

change();

next.addEventListener("click", 
function(){
    counter++;
    if(counter >= human.length) {
        counter = 0;
    }
    change();
});

function change(){
    console.log('got here');
    console.log(source1);
    let random = Math.floor(Math.random()*2);
    if(random == 0) {
        source1.innerHTML = human[counter];
        source2.innerHTML = robot[counter];
        correct = 1;
    } else {
        source2.innerHTML = human[counter];
        source1.innerHTML = robot[counter];
        correct = 2;
    }
    source1.style.color="black";
    source2.style.color="black";
}

source1.addEventListener("click", 
function(){
    choose(1);
});

source2.addEventListener("click", 
function(){
    choose(2);
});


function choose(choice){
    let colour;
    if(choice == correct) {
        colour = "green";
    } else {
        colour = "red";
    }
    if(choice == 1) {
        source1.style.color=colour;
    } else {
        source2.style.color=colour;
    }
}
