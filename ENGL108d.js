// The first text on the page
const source1 = document.getElementById("src1");
// The second text on the page
const source2 = document.getElementById("src2");


// Keeps track of which of the texts is the human one
let correct = -1;

// The button to go to the next text
const next = document.getElementById("next-button");
// The button to go to the previous text
const prev = document.getElementById("prev-button");

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
   })
  .then((x) => change())
  .catch((e) => console.error(e));

// Goes to the next text
function nextText(){
    counter++;
    if(counter*2 >= texts.length) {
        counter = 0;
    }
    change();
}

// Goes to the previous text
function prevText(){
    counter--;
    if(counter < 0) {
        counter = texts.length/2-1;
    }
    change();
}


// Adds event listener to the next button that goes to the next text.
next.addEventListener("click", function() {nextText()});



// Adds event listener to the previous button that goes to the previous text.
prev.addEventListener("click", function() {prevText()});

document.addEventListener("keydown", (e) => {
    const key = e.which;
    console.log(key);
    if(key == 8 || key == 37) {
        prevText();
    } else if(key == 32 || key == 13 || key == 39) {
        nextText();
    }
});

// Updates the text on the page randomizing where each one goes
function change(){
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
