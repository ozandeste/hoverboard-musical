const App = document.getElementById('app');
const getStartedBTN = document.getElementById('get-started-btn');

const TILE_COUNT = 500;
const COL_COUNT = getComputedStyle(App).getPropertyValue('--col-count');

const MUSIC_NOTES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

eventListener();

function eventListener() {
  document.addEventListener('DOMContentLoaded', createHoverboard);
  getStartedBTN.addEventListener('click', playAudio);
}

function createHoverboard() {
  for (let i = 0; i < TILE_COUNT; i++) {
    const tileContainer = document.createElement('div');
    const tile = document.createElement('div');

    i % COL_COUNT == 0 && tile.classList.add('tile-loading'); // if it's the first element then add class "loading"
    tileContainer.classList.add('tile-container');
    tile.classList.add('tile');

    tile.addEventListener('mouseenter', mouseEnterHandler);
    tile.addEventListener('mouseleave', mouseLeaveHandler);
    tileContainer.addEventListener('click', playAudio);

    // Splash - loading animation
    tilesLoadingAnimation(tile, i);

    tileContainer.appendChild(tile);
    App.appendChild(tileContainer);
  }
}

function tilesLoadingAnimation(tile, i) {
  const color = getRandomColor();
  tile.style.backgroundColor = color;

  setTimeout(() => {
    tile.setAttribute('style', 'background-color: rgb(95, 95, 95);');
  }, 700 * (i / TILE_COUNT));

  setTimeout(() => {
    tile.classList.remove('tile-loading');
  }, 2000);
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
