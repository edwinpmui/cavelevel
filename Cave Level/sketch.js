let mapArr = [
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, true, true, false, false, true, false, false],
  [false, false, false, true, false, false, false, true, true, false],
  [false, false, false, true, true, false, false, true, false, false],
  [false, false, false, false, true, true, true, true, false, false],
  [false, false, false, false, true, true, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
];
let bg = [[],[],[],[],[],[],[]];
let x = 4;
let y = 5;
let clicked = false;
let img;
let k = false;
function preload() {
  keyImg=loadImage("key.jpg")
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 10; j++){
      try{
        bg[i][j] = loadImage(`bg/room${i}_${j}.jpg`);
      } catch {
        bg[i][j] = loadImage(`bg/placeholderbg.jpg`);
      }
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

function draw() {
  run()
}

function run(){
  //img = loadImage('room' + x + '_' + y +'.JPG');
  img = bg[y][x]
  background(220);
  //image(img, 0, 0, width, height, 0, 0, img.width, img.height, img.CONTAIN, img.LEFT);
  noStroke();
  flashlight(img);
  new upArrow(y, x).display();
  new downArrow(y, x).display();
  new leftArrow(y, x).display();
  new rightArrow(y, x).display();
  keyLoad(y,x);
  console.log(y, x);
}

class upArrow {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.up = false;
  }

  display() {
    try {
      if (mapArr[this.i - 1][this.j]) {
        if (
          pmouseX > width / 2 - 25 &&
          pmouseX < width / 2 + 25 &&
          pmouseY > height - 190 &&
          pmouseY < height - 120
        ) {
          fill("yellow");
          triangle(
            width / 2 - 25,
            height - 150,
            width / 2,
            height - 190,
            width / 2 + 25,
            height - 150
          );
          rect(width / 2 - 15, height - 150, 30, 30);
          if (clicked) {
            y = y - 1;
            clicked = false;
          }
        } else {
          fill("white");
          triangle(
            width / 2 - 25,
            height - 150,
            width / 2,
            height - 190,
            width / 2 + 25,
            height - 150
          );
          rect(width / 2 - 15, height - 150, 30, 30);
        }
        fill("white");
      }
    } catch {}
  }
}

class downArrow {
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }
  display() {
    try {
      if (mapArr[this.i + 1][this.j]) {
        if (
          pmouseX > width / 2 - 25 &&
          pmouseX < width / 2 + 25 &&
          pmouseY > height - 80 &&
          pmouseY < height - 10
        ) {
          fill("yellow");
          triangle(
            width / 2 - 25,
            height - 50,
            width / 2,
            height - 10,
            width / 2 + 25,
            height - 50
          );
          rect(width / 2 - 15, height - 80, 30, 30);
          if (clicked) {
            y = y + 1;
            clicked = false;
          }
        } else {
          fill("white");
          triangle(
            width / 2 - 25,
            height - 50,
            width / 2,
            height - 10,
            width / 2 + 25,
            height - 50
          );
          rect(width / 2 - 15, height - 80, 30, 30);
        }
        fill("white");
      }
    } catch {}
  }
}

class rightArrow {
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }
  display() {
    try {
      if (mapArr[this.i][this.j + 1]) {
        if (
          pmouseX > width / 2 + 30 &&
          pmouseX < width / 2 + 100 &&
          pmouseY > height - 120 &&
          pmouseY < height - 80
        ) {
          fill("yellow");
          triangle(
            width / 2 + 60,
            height - 120,
            width / 2 + 100,
            height - 100,
            width / 2 + 60,
            height - 80
          );
          rect(width / 2 + 30, height - 115, 30, 30);
          if (clicked) {
            x = x + 1;
            clicked = false;
          }
        } else {
          fill("white");
          triangle(
            width / 2 + 60,
            height - 120,
            width / 2 + 100,
            height - 100,
            width / 2 + 60,
            height - 80
          );
          rect(width / 2 + 30, height - 115, 30, 30);
        }
        fill("white");
      }
    } catch {}
  }
}

class leftArrow {
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }
  display() {
    try {
      if (mapArr[this.i][this.j - 1]) {
        if (
          pmouseX > width / 2 - 100 &&
          pmouseX < width / 2 - 30 &&
          pmouseY > height - 120 &&
          pmouseY < height - 80
        ) {
          fill("yellow");
          triangle(
            width / 2 - 60,
            height - 120,
            width / 2 - 100,
            height - 100,
            width / 2 - 60,
            height - 80
          );
          rect(width / 2 - 60, height - 115, 30, 30);
          if (clicked) {
            x = x - 1;
            clicked = false;
          }
        } else {
          fill("white");
          triangle(
            width / 2 - 60,
            height - 120,
            width / 2 - 100,
            height - 100,
            width / 2 - 60,
            height - 80
          );
          rect(width / 2 - 60, height - 115, 30, 30);
        }
        fill("white");
      }
    } catch {}
  }
}
function keyPressed() {
  if (keyCode === LEFT_ARROW && mapArr[y][x - 1]) {
    x = x - 1;
  } else if (keyCode === RIGHT_ARROW && mapArr[y][x + 1]) {
    x = x + 1;
  } else if (keyCode === UP_ARROW && mapArr[y - 1][x]) {
    y = y - 1;
  } else if (keyCode === DOWN_ARROW && mapArr[y + 1][x]) {
    y = y + 1;
  }
}
function mouseClicked() {
  clicked = true;
}

function flashlight(img){
  loadPixels();
	  var lightRadius = 90;
  // We must also call loadPixels() on the PImage since we are going to read its pixels.
  img.loadPixels();
  for (var y1 = 0; y1 < height; y++ ) {
    for (var x1 = 0; x1 < width; x++ ) {
      var loc = (x1 + y1 * width) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r = img.pixels[loc   ]; 
      var g = img.pixels[loc + 1];
      var b = img.pixels[loc + 2];

      // Calculate an amount to change brightness
      // based on proximity to the mouse
      var distance = dist(x1, y1, mouseX, mouseY);

      // The closer the pixel is to the mouse, the lower the value of "distance" 
      // We want closer pixels to be brighter, however, so we invert the value using map()
      // Pixels with a distance greater than the lightRadius have a brightness of 0.0 
      // (or negative which is equivalent to 0 here)
      // Pixels with a distance of 0 have a brightness of 1.0.
      var adjustBrightness = map(distance, 0, lightRadius, 1, 0);
      r *= adjustBrightness;
      g *= adjustBrightness;
      b *= adjustBrightness;

      // Constrain RGB to between 0-255
      r = constrain(r, 0, 255);
      g = constrain(g, 0, 255);
      b = constrain(b, 0, 255);
      
      // Set the display pixel to the image pixel
      pixels[loc    ] = r;
      pixels[loc + 1] = g;
      pixels[loc + 2] = b;
      pixels[loc + 3] = 255; // Always have to set alpha
    }
  }

  updatePixels();
}

function isExist(y, x, direction){
  if (direction = "UP"){
    if (bg[this.y - 1][this.x] == "placeholderbg.jpg") {

    }
  }
}

function keyLoad(i,j){
  if ((y==i) && (k=false) && (x==j)){
    image(keyImg,x,y)
    if (
      pmouseX > width / 2 - 100 &&
      pmouseX < width / 2 - 30 &&
      pmouseY > height - 120 &&
      pmouseY < height - 80
    )  
      {if (clicked) {
        k=true
        clicked = false;
      }
    }
  }
}