let winterDay, winterNight, summerSunset, summerSkyBlue;
let currentDayColor, currentNightColor;
let clouds = [];

function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
  
  winterDay = color(135, 206, 250);
  winterNight = color(10, 20, 80);
  
  summerSunset = color(255, 140, 100);
  summerSkyBlue = color(100, 200, 255);
  
  for (let i = 0; i < 8; i++) {
    clouds.push({
      x: random(-100, width),
      y: random(30, 130),
      speed: random(0.1, 0.3),
      size: random(0.6, 1.0)
    });
  }
}

function draw() {
  let time = millis() * 0.001; 
  let cyclePeriod = 5; 
  let phase = sin((TWO_PI / cyclePeriod) * time);
  let phaseNormal = map(phase, -1, 1, 0, 1);
  
  currentDayColor = lerpColor(winterDay, summerSunset, phaseNormal);
  currentNightColor = lerpColor(winterNight, summerSkyBlue, phaseNormal);
  
  let bgAmt = map(sin(time * 0.5), -1, 1, 0, 0.2); 
  background(lerpColor(currentDayColor, currentNightColor, bgAmt));
  
  let baseScaleRange = 0.2; 
  let sunBaseScale = 1 + phaseNormal * baseScaleRange;
  let snowmanBaseScale = 1 + (1 - phaseNormal) * baseScaleRange;
  
  noStroke();
  
  let cloudAlpha = map(phaseNormal, 0.2, 1, 0, 220, true);
  if (cloudAlpha > 0) {
    fill(255, cloudAlpha);
    for (let cloud of clouds) {
      push();
      translate(cloud.x, cloud.y);
      scale(cloud.size);
      ellipse(0, 0, 80, 50);
      ellipse(-30, 10, 60, 40);
      ellipse(30, 10, 60, 40);
      ellipse(0, -20, 60, 50);
      pop();
      
      cloud.x += cloud.speed;
      if (cloud.x > width + 100) {
        cloud.x = -100;
        cloud.y = random(30, 130);
      }
    }
  }

  let snowAlpha = map(phaseNormal, 0.8, 0, 0, 230, true);
  if (snowAlpha > 0) {
    randomSeed(42); 
    fill(255, snowAlpha);
    for (let i = 0; i < 100; i++) {
      let x = random(width);
      let speed = random(0.5, 2);
      let y = (random(height) + frameCount * speed) % height; 
      circle(x, y, random(2, 4));
    }
  }

  fill(100);
  stroke(0);
  strokeWeight(1);
  triangle(280, 350, 320, 350, 300, 300);

  push();
  translate(300, 300);
  
  let baseAngle = radians(-15);
  let wobble = sin(frameCount * 0.03) * radians(2); 
  rotate(baseAngle + wobble);
  
  fill(139, 69, 19); 
  rectMode(CENTER); 
  rect(0, 0, 350, 10);
  rectMode(CORNER);

  push();
  translate(-130, -5); 
  scale(sunBaseScale * 0.6);
  translate(0, -60); 
  
  push();
  rotate(frameCount * 0.02); 
  stroke(255, 0, 0);
  fill(255, 160, 0);
  triangle(0, -90, 20, -50, -20, -50);
  triangle(0, 90, 20, 50, -20, 50);
  triangle(-90, 0, -50, -20, -50, 20);
  triangle(90, 0, 50, -20, 50, 20);
  triangle(64, -64, 21, -49, 49, -21);
  triangle(-64, -64, -49, -21, -21, -49);
  triangle(64, 64, 21, 49, 49, 21);
  triangle(-64, 64, -49, 21, -21, 49);
  pop();
  
  stroke(255, 0, 0);
  fill(255, 160, 0);
  circle(0, 0, 100);
  fill(0);
  stroke(0);
  rect(-40, -10, 80, 5);
  rect(-35, -15, 25, 25);
  rect(5, -15, 25, 25);
  pop();

  push();
  translate(130, -5); 
  
  let meltScale = map(sin(frameCount * 0.03), -1, 1, 0.95, 1.05); 
  scale(snowmanBaseScale, snowmanBaseScale * meltScale); 
  
  stroke(0, 0, 255);
  strokeWeight(2);
  fill(255);
  circle(0, -25, 60); 
  circle(0, -65, 45); 
  circle(0, -95, 35); 
  
  fill(0);
  stroke(0);
  strokeWeight(1);
  circle(-6, -100, 5); 
  circle(6, -100, 5);  
  circle(0, -75, 6);   
  circle(0, -65, 6);   
  circle(0, -55, 6);   
  
  fill(255, 165, 0);
  stroke(225, 0, 0);
  triangle(0, -95, 0, -90, -15, -92); 
  pop();

  pop(); 
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('seesaw_seamless_long_cycle', 20);
  }
}