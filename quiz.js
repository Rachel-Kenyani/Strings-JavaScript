//Question 1
// Extract the last four characters from the string:
let girl="beautiful";
let s=girl.slice(-4);
console.log(s);

// Question 2
// Insert string at the fourth index given variable:
const food = "I was feeling hungry today";
let foodie = "eat";
let food2 = `${food.slice(0,5)}foodie ${food.slice(5)}`;
console.log(food2);

//Question 3
// Counting how many times the following string appears in the string variable:the, brown
const story="The quick brown fox jumps over the lazy dog";

word = "the";
times = 0;
position = story.indexOf(word);

while (position > -1) {
++times;
position = story.indexOf(word, ++position);
}
console.log(times);

word2 = "brown";
times = 0;
position = story.indexOf(word2);

while (position > -1) {
++times;
position = story.indexOf(word2, ++position);
}

console.log(times);

//Question 4
// Finding words from the following strings:now,sitting

const string1 = "We are now going to school";
 let aa = string1.search("now");
console.log(aa);

const string2 = "The child was sitting on the table before it fell";
let bb=string2.search("sitting");
console.log(bb);

// //Question 5
// // Converting strings into the specified format:
let c="wonderful";
let result = c.toUpperCase();
console.log(result);

let d="amazing,BEneath";
let result2 = d.toLowerCase();
console.log(result2);

let e="A beautiful wedding";
let result3 =e.split("").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join("")

console.log(result3);

