const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
const bubble = document.getElementById('speech');

// Toggle button on/off
function toggleButton () {
    button.disabled = !button.disabled;
}

// Render joke in speech bubble
function renderJoke (joke) {
    bubble.textContent = joke;
}

//  Passing Joke to VoiceRSS Api
function crackAJoke(joke){
    VoiceRSS.speech({
        key: 'ab4ea9087f444e2e98bb48acb7cc7c4d',
        src: joke,
        hl: 'en-gb',
        v: 'Alice',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Get jokes from Jokes API
async function getJokes(){
    let joke ='';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,racist,sexist,explicit';
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        (data.setup)? joke=`${data.setup}. ${data.delivery}`: joke = `${data.joke}` ;
         // Display text and read
        renderJoke(joke);
        crackAJoke(joke);
        // Disable button when audio is playing
        toggleButton();
    } catch (error) {
        console.log('fetch failed dude', error);
    }
}
// On load
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton); // Toggle button on when audio FINISHED playing
