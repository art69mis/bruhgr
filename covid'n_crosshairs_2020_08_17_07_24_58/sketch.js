var annoying = {
  x: 00,
  y: 200,
  xspeed: 4,
  yspeed: -3
}
var a = {
  x: 200,
  y: 200,
  xs: 6,
  ys: 4
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225, 141, 87);
  hat()
  dash()
  bonk()
  bal()
  al()
  b2()
  stroke(225)
  strokeWeight(5)
  noFill()
  noCursor()
  circle(mouseX, mouseY, 30)
  line(mouseX, mouseY, mouseX + 20, mouseY)
  line(mouseX, mouseY, mouseX - 20, mouseY)
  line(mouseX, mouseY, mouseX, mouseY + 20)
  line(mouseX, mouseY, mouseX, mouseY - 20)
}

function hat() {
  stroke(0)
  line(annoying.x, annoying.y, annoying.x + 40, annoying.y + 40)
  line(annoying.x, annoying.y, annoying.x + 40, annoying.y - 40)
  line(annoying.x, annoying.y, annoying.x - 40, annoying.y + 40)
  line(annoying.x, annoying.y, annoying.x - 40, annoying.y - 40)
  line(annoying.x, annoying.y, annoying.x, annoying.y + 50)
  line(annoying.x, annoying.y, annoying.x, annoying.y - 50)
  line(annoying.x, annoying.y, annoying.x + 50, annoying.y)
  line(annoying.x, annoying.y, annoying.x - 50, annoying.y)
  stroke(225, 0, 0)
  strokeWeight(4)
  fill(225, 0, 0)
  ellipse(annoying.x, annoying.y, 60, 60)
}

function dash() {
  annoying.x = annoying.x + annoying.xspeed;
  annoying.y = annoying.y + annoying.yspeed;
}

function bonk() {
  if (annoying.x > width || annoying.x < 0) {
    annoying.xspeed = annoying.xspeed * -1
  }
  if (annoying.y > height || annoying.y < 0) {
    annoying.yspeed = annoying.yspeed * -1
  }
}


function bal() {
  stroke(0)
  line(a.x, a.y, a.x + 40, a.y + 40)
  line(a.x, a.y, a.x + 40, a.y - 40)
  line(a.x, a.y, a.x - 40, a.y + 40)
  line(a.x, a.y, a.x - 40, a.y - 40)
  line(a.x, a.y, a.x, a.y + 50)
  line(a.x, a.y, a.x, a.y - 50)
  line(a.x, a.y, a.x + 50, a.y)
  line(a.x, a.y, a.x - 50, a.y)
  stroke(0, 0, 225)
  strokeWeight(4)
  fill(0, 0, 225)
  ellipse(a.x, a.y, 60, 60)
}
function al() {
  a.x = a.x + a.xs;
  a.y = a.y + a.ys;
}

function b2() {
  if (a.x > width || a.x < 0) {
    a.xs = a.xs * -1
  }
  if (a.y > height || a.y < 0) {
    a.ys = a.ys * -1
  }
}