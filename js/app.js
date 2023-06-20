// SOME SHORTCUT UTILS THAT I WILL USE
$ = (id) => document.getElementById(id);
_ = (element, event, func) => element.addEventListener(event, func);

// Setting up the elements
const App = $('app');
const getStartedBTN = $('get-started-btn');

// VARIABLES
const TILE_COUNT = 1000; // change this for setting a new amount for tiles count
const COL_COUNT = getComputedStyle(App).getPropertyValue('--col-count'); // this comes from css and it sets the column count
const MUSIC_NOTES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

eventListener();
function eventListener() {
  _(document, 'DOMContentLoaded', createHoverboard);
  _(getStartedBTN, 'click', () => {
    let interval;
    if (!document.documentElement.classList.contains('rgb--mode')) {
      interval = setInterval(playAudio, 300);
      document.documentElement.classList.add('rgb--mode');
    }

    setTimeout(() => {
      document.documentElement.classList.remove('rgb--mode');
      clearInterval(interval);
    }, 2000);

    App.scrollIntoView({ behavior: 'smooth' });
  });
}

function createHoverboard() {
  for (let i = 0; i < TILE_COUNT; i++) {
    const tileContainer = document.createElement('div');
    const tile = document.createElement('div');

    i % COL_COUNT == 0 && tile.classList.add('tile-loading'); // if it's the first element then add class "loading"
    tileContainer.classList.add('tile-container');
    tile.classList.add('tile');

    _(tile, 'mouseenter', mouseEnterHandler);
    _(tile, 'mouseleave', mouseLeaveHandler);
    _(tileContainer, 'click', playAudio);

    // Splash - loading tiles animation
    tilesLoadingAnimation(tile, i);

    // adding elements to DOM
    tileContainer.appendChild(tile);
    App.appendChild(tileContainer);
  }
}

function tilesLoadingAnimation(tile, i) {
  const color = getRandomColor();
  tile.style.backgroundColor = color;

  setTimeout(() => {
    tile.setAttribute('style', 'background-color: rgb(95, 95, 95);');
  }, 700 * (i / TILE_COUNT) * 3.8);

  setTimeout(() => {
    tile.classList.remove('tile-loading');
  }, 3000);
}

function mouseEnterHandler(e) {
  const color = getRandomColor();
  e.target.style.backgroundColor = color;
  e.target.style.boxShadow = `0px 0px 4px ${color}, inset 0px 0px 4px 8px rgba(255, 255, 255, .5)`;
}

function mouseLeaveHandler(e) {
  setTimeout(() => {
    e.target.style.backgroundColor = '';
    e.target.style.boxShadow = '';
  }, 500);
}

function playAudio(e) {
  const synth = new Tone.PolySynth().toDestination();

  synth.triggerAttackRelease(
    `${MUSIC_NOTES[Math.floor(Math.random() * 7)]}4`,
    '16n'
  );
  e.stopPropagation();
}

function getRandomColor() {
  const hex_code = [];
  for (let i = 0; i < 3; i++) {
    const color = Math.floor(Math.random() * 255).toString(16);

    hex_code.push(color.length > 1 ? color : `0${color}`);
  }
  return `#${hex_code.join('')}`;
}

// COPYRIGHT BUTTON WITH REDIRECTING URL IN NEW PAGE
const copyrightBtn = $('copyright');

_(copyrightBtn, 'click', (e) => {
  window.open('https://github.com/ozandeste', '_blank');
});

/*
###################################
### AUTHOR: OZAN DESTE          ###
### PROJECT: hoverboard-musical ###
###################################
*/
