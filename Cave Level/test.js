let bg = [[],[],[],[],[],[],[]];
let x = 4;
let y = 5;
let img;
function preload() {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 10; j++){
      try{
        bg[i][j] = loadImage(`bg/room${i}_${j}.jpg`);
      } catch {
        bg[i][j] = null;
      }
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

function draw() {
    console.log(bg)
    image(bg[y][x], 0, 0, width, height, 0, 0, bg[y][x].width, bg[y][x].height, bg[y][x].CONTAIN, bg[y][x].LEFT);
}