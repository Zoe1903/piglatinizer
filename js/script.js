$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("button").click(function(){

let words=$("input").val();
let word=translate(words)
$(".output").text(`${word}`)

})

function translate(word) {
 let firstLetter = word.charAt(0);
 let theRest= word.slice(1);
 return `${theRest}${firstLetter}ay`


}



});
