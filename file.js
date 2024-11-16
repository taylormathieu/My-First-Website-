"use strict";

// Creating footer element and adding copyright 
document.getElementById("myF").innerHTML = `Copyright ©️ 2024 Taylor Mathieu`;

const fYear = document.getElementById("copyright-year");
const d = new Date();
fYear.textContent = d.getFullYear();

console.log(`November 15th 2024`);

// setting the button to display greeting text based on time of day

const greeting = () => {
    if (d.getHours() <= 11) {
        alert('Good Morning');
    } else if (d.getHours() < 18 ) {
        alert('Good Afternoon');
    } else {
        alert('Good Evening');
    }
}

const myBtn = document.getElementById('myBtn');
myBtn.addEventListener("click", greeting);

// displaying a greeting when the page opens
function displayGreeting() {
    greetingMessage.textContent = "Hello, welcome to my personal website!";
}


const myBtn = document.getElementById('myBtn');
myBtn.addEventListener('mouseover', function() {
    myBtn.textContent = "Mouse is hovering";
});
myBtn.addEventListener('mouseout', function() {
    myBtn.textContent = "Click Me!";
});
















 