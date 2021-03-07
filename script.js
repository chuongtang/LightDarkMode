const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
let navColor = document.getElementById('nav').style.backgroundColor;
let textBoxColor = textBox.style.backgroundColor;
const lightColor = 'rgb(255 255 255 / 50%)';
const darkColor = 'rgb(0 0 0 / 50%)';
let modeIcon = toggleIcon.children[1].classList;

// Function mode selection
function modeSelection(color){
    document.documentElement.setAttribute('data-theme', `${color}`);
    toggleIcon.children[0].textContent = `${color} Mode`;
    navColor = `${color}color`;
    localStorage.setItem('theme', `${color}`);
    for (let i=1; i<5; i++) {
        document.getElementById('image'+i).src=`img/${i}_${color}.svg`;    
    }
    (color === 'light')? textBoxColor = darkColor : textBoxColor = lightColor;  
    (color === 'light')? modeIcon = "fas fa-sun" : modeIcon = "fas fa-moon"  
}

// Switch theme dynamically
function switchTheme(event) {
    console.log(event.target.checked);
    (event.target.checked)? modeSelection('dark') : modeSelection('light');
}

toggleSwitch.addEventListener('change', switchTheme);

//  Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
 document.documentElement.setAttribute('data-theme', currentTheme);
 if (currentTheme==='dark'){
     toggleSwitch.checked = true;
     modeSelection('dark');
 }
} 
