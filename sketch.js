let button;
let buttonPressed = 0;

let textX = 0.25; // Percentage of windowWidth
let textY = 0.1;  // Percentage of windowHeight

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('Oh you found me');
  button.position(windowWidth * 0.4, windowHeight * 0.4); // Position as a percentage of window size
  button.hide(); 
  button.mousePressed(() => {
    buttonPressed = 1; 
  });
}

function draw() {
  if (buttonPressed === 1) {
    newPage(); 
  } else {
    mainPage(); 
  }
}

function mainPage() {
  background(0);

  // Flashlight effect (scale based on window size)
  fill(255, 255, 255, 150);
  noStroke();
  ellipse(mouseX, mouseY, windowWidth * 0.08, windowWidth * 0.08); // Use windowWidth for flashlight size

  // Eye positions (scaled)
  let eyes = [
    { x: windowWidth * 0.1, y: windowHeight * 0.1, length: windowWidth * 0.1 },
    { x: windowWidth * 0.3, y: windowHeight * 0.5, length: windowWidth * 0.12 },
    { x: windowWidth * 0.45, y: windowHeight * 0.3, length: windowWidth * 0.13 }
  ];

  let showButton = 0; // Track if near red-pupil eye

  strokeWeight(5);

  for (let i = 0; i < eyes.length; i++) {
    let eye = eyes[i];
    let d = dist(mouseX, mouseY, eye.x, eye.y);
    
    if (d < windowWidth * 0.07) { // Scale the proximity range
      stroke(255);
      line(eye.x - eye.length / 2, eye.y, eye.x + eye.length / 2, eye.y);

      if (eye.x === windowWidth * 0.1) {
        line(eye.x - 30, eye.y, eye.x + 30, eye.y);
        line(eye.x + 20, eye.y, eye.x + 50, eye.y);
      } else if (eye.x === windowWidth * 0.3) { // Red-pupil eye
        line(eye.x, eye.y, eye.x + 50, eye.y);
        stroke(255, 0, 0);
        point(eye.x, eye.y);
        showButton = 1; // Show button when near this eye
      } else if (eye.x === windowWidth * 0.45) {
        line(eye.x, eye.y - 15, eye.x + 45, eye.y - 15);
        line(eye.x, eye.y + 15, eye.x + 45, eye.y + 15);
      }
    }
  }

  if (showButton) {
    button.show();
  } else {
    button.hide();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Reposition the button relative to new window size
  button.position(windowWidth * 0.4, windowHeight * 0.4);
}
