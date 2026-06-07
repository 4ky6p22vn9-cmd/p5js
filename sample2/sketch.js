function setup() {
  createCanvas(600, 400);
  noLoop(); 
}

function draw() {
  // 배경
  background(245, 235, 220); 

  // ㅅㅏㅇㅇㅡㅣ
  fill(50, 90, 50); // 짙은 올리브색 군복
  stroke(0);
  strokeWeight(2);
  // 칼라
  rect(150, 270, 300, 160, 20); 
  fill(40, 70, 40); // 깃 안쪽 그림자
  rect(240, 260, 120, 60, 10);
  // 단추
  fill(180, 150, 0); 
  ellipse(300, 300, 10, 10); 
  ellipse(300, 330, 10, 10);

 
  // 목
  fill(255, 210, 180); 
  rect(270, 240, 60, 60);
  // 귀
  ellipse(230, 200, 30, 40); 
  ellipse(370, 200, 30, 40); 
  // 모자, 머리카락
  fill(50, 30, 10); // 짙은 갈색 머리
  arc(300, 160, 120, 130, PI, 0); 


  fill(255, 210, 180);
  ellipse(300, 190, 140, 160); 
  // 눈썹
  fill(30); 
  arc(270, 170, 40, 15, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
  arc(330, 170, 40, 15, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
  // 눈 
  fill(255); 
  ellipse(270, 180, 30, 20); 
  ellipse(330, 180, 30, 20); 
  fill(30); 
  ellipse(270, 180, 15, 15); // 눈동자
  ellipse(330, 180, 15, 15);
  fill(255); 
  ellipse(273, 177, 5, 5); // 하이라이트
  ellipse(333, 177, 5, 5);
  // 홍조
  noStroke();
  fill(255, 100, 100, 50); // 투명도 있는 붉은색
  ellipse(260, 220, 30, 20);
  ellipse(340, 220, 30, 20);
  stroke(0); 
  strokeWeight(2);
  // 코
  curve(280, 200, 300, 210, 300, 230, 290, 230);
  // 입
  fill(200, 80, 80);
  arc(300, 245, 40, 20, 0, PI); 
  noFill();
  arc(300, 245, 40, 20, 0, PI); // 아랫입술


  // 모자 
  fill(50, 90, 50); 
  arc(300, 140, 150, 100, PI, 0); 
  rect(225, 135, 150, 15, 5); // 챙
  // ㄱㅖㄱㅡㅂㅈㅏㅇ
  fill(0, 0, 200); 
  stroke(1);
  rect(290, 110, 20, 4, 2); 
  rect(290, 118, 20, 4, 2); 
}
