import { test, allWords } from './index.js';
console.log(test)

let slider = document.getElementById("myRange");
let output = document.getElementById("result");
let sliderOutput = document.getElementById("myRangeLable");
let letter= document.getElementById("inputText")
sliderOutput.innerHTML = slider.value;

slider.oninput = function() {
    sliderOutput.innerHTML = this.value;

    if(letter.value != undefined){
        output.innerHTML = letter.value
      

        const startsWith = allWords.filter((country) => country.startsWith(letter.value));
        let results = [];
        for (const element of startsWith) {
            if(element.length >= slider.value){
                results.push(element)
            }
        }
        // output.innerHTML = startsWith[Math.floor(Math.random() * 20)]
        
        output.innerHTML = ` Number of words = ${results.length} <br> <br> 5 random words  - <br><br> `

        if(results.length<0){
            output.innerHTML = `lol no words `

        }
        else{

            output.innerHTML += `${results[Math.floor(Math.random() * results.length)]},  `
            // let resultsWithComma =[]
            
            
            
            for (let i = 0; i < 6; i++) {
                output.innerHTML +=  `${results[Math.floor(Math.random() * results.length)]}, `
                // resultsWithComma.push(results[Math.floor(Math.random() * results.length)])
            }
            // output.innerHTML =  resultsWithComma
            output.innerHTML +=  `${results[Math.floor(Math.random() * results.length)]}`
        }
        
    }
}
