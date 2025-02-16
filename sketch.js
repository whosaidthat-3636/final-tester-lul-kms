let button;
let buttonPressed = 0; // 0 = normal, 1 = button pressed

let textX = 210;
let textY = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('Oh you found me');
  button.position(280, 320);
  button.hide(); // Start hidden
  button.mousePressed(() => {
    buttonPressed = 1; // Switch to new page
  });

  // textX = width / 2;
  // textY = height / 2;
}

function draw() {
  if (buttonPressed === 1) {
    newPage(); // Switch to eerie text page
  } else {
    mainPage(); // Normal flashlight interaction
  }
}

function mainPage() {
  background(0);

  // Flashlight effect
  fill(255, 255, 255, 150);
  noStroke();
  ellipse(mouseX, mouseY, 80, 80);

  // Eye positions
  let eyes = [
    { x: 70, y: 70, length: 95 },
    { x: 280, y: 280, length: 100 },
    { x: 420, y: 170, length: 110 }
  ];

  let showButton = 0; // Track if near red-pupil eye

  strokeWeight(5);

  for (let i = 0; i < eyes.length; i++) {
    let eye = eyes[i];
    let d = dist(mouseX, mouseY, eye.x, eye.y);
    
    if (d < 60) { // Only show if within range
      stroke(255);
      line(eye.x - eye.length / 2, eye.y, eye.x + eye.length / 2, eye.y);

      if (eye.x === 70) {
        line(60, 70, 100, 70);
        line(90, 70, 120, 70);
      } else if (eye.x === 280) { // Red-pupil eye
        line(280, 280, 280 + 50, 280);
        stroke(255, 0, 0);
        point(280, 280);
        showButton = 1; // Show button when near this eye
      } else if (eye.x === 420) {
        line(420, 155, 420 + 45, 155);
        line(420, 185, 420 + 45, 185);
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
}

// function newPage() {
//   background(0);
//   button.hide();

//   // Shaky text effect
//   let jitterX = random(-1.5, 1.5);
//   let jitterY = random(-1.5, 1.5);

//   fill(255, 255, 255);
//   stroke(0);
//   textSize(20);
//   textAlign(CENTER, TOP);
 
//   // textFont(fontBold);
//   text('Do me favour, you have to keep on. Whatever it is, DO NOT turn it off', textX + jitterX, textY + jitterY);

  // "false" optionA
  // button = createButton('Okay');
  // button.position(130, 320);

  // // optionB
  // button = createButton('Not yet');
  // button.position(200, 320);


