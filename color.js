const body = document.querySelector("body");
var min = 1
var max = 9
num1 = Math.floor((Math.random() * (max - min + 1)) + min);
num2 = Math.floor((Math.random() * (max - min + 1)) + min);
num3 = Math.floor((Math.random() * (max - min + 1)) + min);
num4 = Math.floor((Math.random() * (max - min + 1)) + min);
num5 = Math.floor((Math.random() * (max - min + 1)) + min);
num6 = Math.floor((Math.random() * (max - min + 1)) + min);
result = num1+""+num2+""+num3+""+num4+""+num5+""+num6; 

console.log(result);
body.style="background: #"+result;