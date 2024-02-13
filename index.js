// Twoje zadanie: zaimplementuj algorytm zliczający spacje w ciągu tekstowym. Funkcja spaceCounter() będzie odpowiedzialna za zliczanie spacji w ciągu tekstowym. Oczekujemy, że twoja funkcja da następujące wyniki:

// Twoim zadaniem w tym wypadku będzie implementacja funkcji spaceCounter(). Poradzisz sobie?

// let result = 0
// const spaceCounter = (text) => {
//     for(let i=0; i < text.length; i++){
//         if(text[i] === " ")
//         result++
//     } return result
// }

// const spaceCounter = (text) => {
//     return text.match(/ /g).length
// }

// // spaceCounter("Hello !") -> 1
// // spaceCounter(" ") -> 1
// // spaceCounter("") -> 0
// // spaceCounter("Hello JS !") -> 2


// console.log(spaceCounter("Hell  o JS !"))

// const underscore = (text) => {
//     const newText = text.split("")
//     convertedText = ""

//     newText.map((element, index) => {if(index === newText.length-1){
//         convertedText += element
//     } else {
//         convertedText += `${element}_`
//     }
// }) 
// return convertedText
// }

// console.log(underscore("aaaa"))