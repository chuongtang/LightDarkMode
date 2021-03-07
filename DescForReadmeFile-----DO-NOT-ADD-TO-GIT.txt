 
To build a switch which toggle between light and dark mode on the web page

Credit:
- Patter:https://www.svgbackgrounds.com/#subtle-prism
- Photos:https://undraw.co/illustrations
- Icons: https://fontawesome.com/



:not(#favicon)

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

// Function mode selection
function modeSelection(color, a, b){
    toggleIcon.children[0].textContent = `${color} Mode`;
    toggleIcon.children[1].classList.replace (a,b);
    for (let i=1; i<5; i++) {
        let imageNumber = 'image'+i;
        console.log(`${imageNumber}`);
        document.getElementById('image'+i).src=`img/${i}_${color}.svg`;    
    }
}

// Dark mode style
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    modeSelection("dark", 'fa-sun', 'fa-moon');
}

// Light mode style
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    modeSelection('light', 'fa-moon', 'fa-sun');
}

// Switch theme dynamically
function switchTheme(event) {
    console.log(event.target.checked);
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }

}

toggleSwitch.addEventListener('change', switchTheme);

//  Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
 document.documentElement.setAttribute('data-theme', currentTheme);
 if (currentTheme==='dark'){
     toggleSwitch.checked = true;
     darkMode();
 }
} 
