const sentence = 'i Am a Web Developer . I Am Get Anaaargy whaana Ab Ad ';
const capitalA = 'A';
const small_a = 'a';
let countA = 0;
let count_a = 0;
for (let i = 1; i <= sentence.length; i++) {
const curentSentece = sentence[i];
// console.log(curentSentece);
if (sentence[i] === capitalA) {
countA++;
}
if (sentence[i] === small_a) {
count_a++
}
}
console.log(countA)
console.log(count_a)

