let a = 48;
let b = 24;

let c = "Anything";
let d = "Something";


alert( "The sum of my numbers="+(a+b));
alert(c+d);
alert(c+d+(a+b));
alert("My first number + 1="+(a + 1));
alert("My numbers substraction="+(a-b));
alert("Remainder of my numbers division="+(a%b));
alert("My numbers division="+(a/b));
alert(a!==b);
alert(a==b);
alert(c!==d);
alert(c==d);
alert("My first variable type="+typeof a);
alert("My third variable type="+typeof c);

let e = prompt("What is your name???");
alert("HI," + e);

let f = Number(prompt("Choose your first number"));
let g = Number(prompt("Choose your second number"));
alert("Your numbers sum is ->"+(f+g));
alert("Your numbers multiplication is ->"+(f*g));
alert("Division of your number is ->"+(f/g));
alert("Remainder of your numbers division is ->"+(f%g));

let x = Number(prompt("Choose your third number"));
let y = Number(prompt("Choose your fourth number"));
let max;

if(x>y) {
    alert("Max of your numbers is ->"+x)
}else {
    alert("Max of your numbers is ->"+y)
}

alert("Sum of your numbers is ->"+(x+y))

let s = Number(prompt("Choose any number"));
let m = Number(prompt("Choose any number"));
let r = Number(prompt("Choose any number"));

let min;
if (s<m && s<r) {
    alert("YOUR NUMBERS MIN IS ->"+s)
}
if (m<s && m<r) {
    alert("YOUR NUMBERS MIN IS ->"+m)
}
if (r<m && r<s) {
    alert("YOUR NUMBERS MIN IS ->"+r)
}

let yournumbers = [s,m,r]//
yournumbers.sort((a,b) => b-a) //Ays hatvacy ogtvel em AI
alert("Your numbers in descending order -->"+yournumbers)//