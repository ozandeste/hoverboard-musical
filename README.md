# Musical Hoverboard App with PURE JavaScript

Live Version: <a href="https://ozandeste.github.io/hoverboard-musical/" target="_blank" rel="noopener" title="Musical Hoverboard">Link</a>

I developed a musical hoverboard and when you click on a tile, it will give you a music note!
I used JavaScript to create tiles automatically and to add events to everything.
I used Tone.js web audio framework to render musical notes.
I made a skeleton loading for the tiles.


![Musical Hoverboard](https://user-images.githubusercontent.com/59998499/231579441-2e373575-3c6a-42ca-930c-8f8e3f3789c1.png)

If you want to edit the number of tiles you have to change `const TILE_COUNT = 500` in 'app.js'

The app is responsive but if you want more tiles on a one row than you need to change the col-count variable in app.css <br>
`
  #app {
  --col-count: 20;
  }
`

