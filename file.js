"use strict";

const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();

let name = prompt("Hello! What's your name?");
alert("Nice to meet you, " + name + "!");

const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button clicked');
});

const greeting = () => {
    if (d.getHours() <= 11) {
        alert('Good Morning!');
    } else if (d.getHours() <18 ) {
        alert('Good Afternoon');
    } else {
        alert('Good Evening');
    }
}

const btn = document.getElementById("btn");
btn.addEventListener("click, greeting");



 