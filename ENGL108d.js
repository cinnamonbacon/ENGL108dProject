// The first text on the page
const source1 = document.getElementById("src1");
// The second text on the page
const source2 = document.getElementById("src2");


// Keeps track of which of the texts is the human one
let correct = -1;

// The button to go to the next text
const next = document.getElementById("next-button");

// Keeps track of what text it is on
let counter = 0;

// An array that holds the texts
// texts[i+0] is the ith human text
// texts[i+1] is the ith ai generated text
let texts;

// Fetches the file with the texts and parses it before setting up the text.
fetch("texts.txt")
  .then((res) => res.text())
  .then((text) => {
    texts = text.split('\n\n\n');
    console.log("test2");
   })
  .then((x) => change())
  .catch((e) => console.error(e));

// Adds event listener to the next button that goes to the next text.
next.addEventListener("click", 
function(){
    counter++;
    if(counter*2 >= texts.length) {
        counter = 0;
    }
    change();
});

// Updates the text on the page randomizing where each one goes
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

// Adds event listener to the first text so user can click on it to choose it
source1.addEventListener("click", 
function(){
    choose(1);
});

// Adds event listener to the second text so user can click on it to choose it
source2.addEventListener("click", 
function(){
    choose(2);
});


// Changes the text choice to green or red whether it is the correct or false choice respectively.
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
