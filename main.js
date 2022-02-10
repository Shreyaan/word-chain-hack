import {
    allWords
} from './allWords.js';

let slider = document.getElementById("myRange");
let output = document.getElementById("result");
let sliderOutput = document.getElementById("myRangeLable");
let letter = document.getElementById("inputText")
sliderOutput.innerHTML = slider.value;
let cheatBtn = document.getElementById("cheat-btn")

function button(element) {
    let buttonHtml = `<span class=" btn-light"> ${element} </span> 
`
    // navigator.clipboard.writeText(element);

    return buttonHtml
}


function gameCheat() {
    let letterVar = letter.value
    let smallLetter = letterVar.toLowerCase()

    output.innerHTML = smallLetter


    const startsWith = allWords.filter((country) => country.startsWith(smallLetter));
    let results = [];
    for (const element of startsWith) {
        if (element.length >= slider.value) {
            results.push(element)
        }
    }

    output.innerHTML = ` Number of words = ${results.length} <br>`

    if (results.length <= 0) {

        output.innerHTML += `lol no words `

    } else {

        if (results.length < 6) {

            output.innerHTML += ` <br> few random words  - <br><br> `
            output.innerHTML += button(results)
        } else {
            output.innerHTML += ` <br> few random words  - <br><br> `

            for (let i = 0; i < 6; i++) {
                // output.innerHTML += `${results[Math.floor(Math.random() * results.length)]}, `
                output.innerHTML += button(results[Math.floor(Math.random() * results.length)])
            }

        }
    }
}


slider.oninput = function () {
    sliderOutput.innerHTML = this.value;
    gameCheat()
}


cheatBtn.addEventListener('click', function (event) {
    event.preventDefault()
    gameCheat()
});


function enterOnPress(event) {
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        cheatBtn.click();
    }
}

// letter.addEventListener("keyup", function (event) {
//     enterOnPress(event)
// });

// slider.addEventListener("keyup", function (event) {
//     enterOnPress(event)
// });

document.querySelector('body').addEventListener("keyup", function (event) {
    enterOnPress(event)
});