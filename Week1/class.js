



//console.log("Hello world")

//Content made by javascript
const content = `
    <div>
        <p>Second paragraph</p>
    </div>
`

//Content made by javascript
const content2 = `
    <div>
        <p>Third paragraph</p>
    </div>
`

// Create the paragraph
const paragraph = document.createElement("div")

paragraph.innerHTML = content

//add the paragraph to the bottom of the main content


//this finds the right spot to insert the content, the class .maincontent
const main = document.querySelector(".maincontent");
// adds to the end of maincontent
main.append(paragraph)

//Alternative way to add content
// Create the paragraph
const paragraph2 = document.createElement("div")
paragraph2.innerHTML = content2

//adds after the body instead
document.body.appendChild(paragraph2);


//Asynchronous functions

// var async = function () {
//     setTimeout(function () { log("second function")}, 2000)
// }
// var adder = function (first, second) {
//     var sum = first + second
// }
// var log = function (message) {
//     console.log("[Log] : ", message)
// }

// log("The the sum is " + adder(5,6))
// async();
// log("third function")




