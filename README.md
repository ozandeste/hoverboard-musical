# Musical Hoverboard App with PURE JavaScript

Live Version: <a href="https://ozandeste.github.io/hoverboard-musical/" target="_blank" rel="noopener" title="Musical Hoverboard">Link</a>

I developed a musical hoverboard that gives you a music notee when you click on a tile!
I used JavaScript to create tiles automatically and to add events to everything.
I used Tone.js web audio framework to render musical notes.
I made a skeleton loading for the tiles.


## CHANGELOG:
1. Added more tiles and expanded the width of the app!
2. Increased the loading animation time for enjoy.
3. Added forwarding url to `copyright` button.
4. Added 'RGB Mode' when you click on "Let's Get Started" button.
5. Some improvements on the code readibility and added comment blocks.


![Musical Hoverboard](https://user-images.githubusercontent.com/59998499/231579441-2e373575-3c6a-42ca-930c-8f8e3f3789c1.png)

If you want to edit the number of tiles you have to change `const TILE_COUNT = 500` in 'app.js'

The app is responsive but if you want more tiles on a one row than you need to change the col-count variable in app.css <br>
`
  #app {
  --col-count: 20;
  }
`

