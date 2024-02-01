const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = [];

for (let i =  colors.length -1 ; i >= 0; i--) {
    reversedColors.push(colors[i]);
}

console.log("Original Colors:", colors);
console.log("Reversed Colors:", reversedColors);
