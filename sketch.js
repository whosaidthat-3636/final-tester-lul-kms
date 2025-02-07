let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('Oh, you found me...');
  button.position(280, 320); // Below the red-pupil eye
  button.hide(); // Start hidden
}

function draw() {
  background(0);

  // Define eye positions
  let eyes = [
    { x: 70, y: 70, w: 95, h: 58 },
    { x: 280, y: 280, w: 100, h: 50 },
    { x: 420, y: 170, w: 110, h: 70 }
  ];

  let textShow = 0; // Track if the torch is near the red-pupil eye

  // Draw eyes only if torch is near
  for (let eye of eyes) {
    let d = dist(mouseX, mouseY, eye.x, eye.y);
    if (d < 80) { // Only show if within torch range
      fill(255);
      ellipse(eye.x, eye.y, eye.w, eye.h);

      fill(0);
      if (eye.x === 70) {
        ellipse(60, 70, 50, 50);
        ellipse(90, 70, 30, 30);
      } else if (eye.x === 280) {
        ellipse(280, 280, 45, 35);
        fill(255, 0, 0);
        ellipse(280, 280, 10, 10);
        textShow = 1; // Torch is near the red-pupil eye
      } else if (eye.x === 420) {
        ellipse(420, 155, 45, 35);
        ellipse(420, 185, 45, 35);
      }
    }
  }

  // Show or hide the button based on the torch position
  if (textShow) {
    button.show();
  } else {
    button.hide();
  }

  // 🔦 Torch (flashlight effect) - Moved to the end to appear on top
  fill(255, 255, 255, 150);
  ellipse(mouseX, mouseY, 80, 80);
  
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}