const source1 = document.getElementById("src1");
const source2 = document.getElementById("src2");

console.log('start');

let correct = -1;

const next = document.getElementById("next-button");

let counter = 0;

let texts;

fetch("texts.txt")
  .then((res) => res.text())
  .then((text) => {
    texts = text.split('\n\n\n');
    console.log("test2");
   })
  .then((x) => change())
  .catch((e) => console.error(e));

next.addEventListener("click", 
function(){
    counter++;
    if(counter*2 >= texts.length) {
        counter = 0;
    }
    change();
});

function change(){
    console.log('got here');
    console.log(source1);
    let random = Math.floor(Math.random()*2);
    if(random == 0) {
        source1.innerHTML = texts[2*counter];
        source2.innerHTML = texts[2*counter+1];
        correct = 1;
    } else {
        source2.innerHTML = texts[2*counter];
        source1.innerHTML = texts[2*counter+1];
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
