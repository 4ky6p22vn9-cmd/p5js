let planeX = -200; // 편대 X 위치
let planeY = 150;  // 편대 Y 위치
let cloudX1 = 0;   // 구름 1의 X 위치
let cloudX2 = 200; // 구름 2의 X 위치

function setup() {
  createCanvas(600, 400);
  // 과제 제출 시 아래 주석을 지우고 실행하면 3초간 녹화됩니다.
  // saveGif('black_eagles_final.gif', 3); 
}

function draw() {
  // 1. 세련된 배경: 하늘, 태양, 움직이는 구름
  if (keyIsPressed) {
    background(100, 140, 200); // 가속 시 깊고 진한 푸른 하늘
    planeX = planeX + 12;      
  } else {
    background(180, 210, 240); // 평소 맑고 부드러운 파스텔톤 하늘
    planeX = planeX + 4;       
  }

  // 빛나는 태양 (겹친 원으로 번짐 효과)
  noStroke();
  fill(255, 240, 150, 200);
  ellipse(100, 100, 80, 80);
  fill(255, 240, 150, 100);
  ellipse(100, 100, 120, 120); 

  // 흘러가는 구름 (배열 없이 변수로 움직임 구현)
  fill(255, 255, 255, 200);
  ellipse(cloudX1 + 150, 150, 100, 40);
  ellipse(cloudX1 + 180, 140, 80, 50);
  ellipse(cloudX2 + 400, 100, 120, 45);
  ellipse(cloudX2 + 430, 110, 90, 40);
  cloudX1 -= 0.5; 
  cloudX2 -= 0.3; // 구름이 왼쪽으로 천천히 이동
  if (cloudX1 < -300) cloudX1 = width; // 화면 밖으로 나가면 재등장
  if (cloudX2 < -500) cloudX2 = width;

  if (planeX > width + 200) {
    planeX = -200;
    planeY = random(80, 200); 
  }

  // 2. 비행기 편대 (연기 및 태극마크 포함)
  for (let i = 0; i < 5; i++) {
    let px = planeX;
    let py = planeY;
    
    if (i == 1) { px = planeX - 60; py = planeY - 40; }
    else if (i == 2) { px = planeX - 60; py = planeY + 40; }
    else if (i == 3) { px = planeX - 120; py = planeY - 80; }
    else if (i == 4) { px = planeX - 120; py = planeY + 80; }

    if (keyIsPressed) {
      noStroke();
      fill(255, 255, 255, 180); // 흰색 스모크 연기
      ellipse(px - 10, py + 8, 15, 15);
      ellipse(px - 25, py + 8, 22, 22);
      ellipse(px - 45, py + 8, 30, 30);
      ellipse(px - 70, py + 8, 40, 40); 
    }

    noStroke();
    fill(30); 
    rect(px, py, 70, 16, 5); // 비행기 몸체
    triangle(px + 10, py, px + 35, py, px + 5, py - 20); // 꼬리날개
    fill(255, 200, 0); 
    triangle(px + 20, py + 10, px + 50, py + 10, px + 10, py + 35); // 주 날개
    fill(200, 255, 255);
    rect(px + 45, py + 2, 15, 8, 4); // 조종석

    if (mouseIsPressed) {
      noStroke();
      fill(210, 30, 30); arc(px + 30, py + 8, 10, 10, PI, TWO_PI); // 태극마크 빨강
      fill(30, 40, 150); arc(px + 30, py + 8, 10, 10, 0, PI); // 태극마크 파랑
      stroke(255); strokeWeight(1);
      line(px + 20, py + 5, px + 24, py + 5); line(px + 36, py + 5, px + 40, py + 5);
      line(px + 20, py + 8, px + 24, py + 8); line(px + 36, py + 8, px + 40, py + 8);
      line(px + 20, py + 11, px + 24, py + 11); line(px + 36, py + 11, px + 40, py + 11);
    }
  }

  // 3. 세련된 블랙이글스 조종복 캐릭터
  stroke(0);
  strokeWeight(2);
  
  // 다크 네이비 조종복 베이스
  fill(20, 30, 50); 
  rect(150, 270, 300, 160, 40); // 둥근 어깨선
  stroke(10);
  line(300, 270, 300, 400); // 조종복 중앙 지퍼

  // 노란색 마후라(스카프)
  noStroke();
  fill(255, 200, 0);
  triangle(270, 240, 330, 240, 300, 290);
  
  // 어깨 하네스(안전벨트) 디테일
  fill(40);
  stroke(0);
  strokeWeight(1);
  rect(200, 270, 25, 130);
  rect(375, 270, 25, 130);

  // 세련된 가슴 패치
  fill(0);
  stroke(255, 200, 0);
  rect(240, 310, 35, 12); // 우측 금장 테두리 명찰
  fill(210, 30, 30);
  ellipse(355, 315, 18, 18); // 좌측 붉은 부대 마크

  // 목
  stroke(0);
  strokeWeight(2);
  fill(255, 224, 205); 
  rect(275, 220, 50, 40);
  
  // 귀와 얼굴
  ellipse(235, 200, 25, 35); 
  ellipse(365, 200, 25, 35); 
  fill(40, 20, 15); 
  arc(300, 160, 130, 140, PI, 0); // 뒷머리
  fill(255, 224, 205);
  ellipse(300, 195, 130, 145); // 얼굴형

  // 앞머리, 눈썹, 눈 (예쁜 디테일 유지)
  fill(40, 20, 15);
  noStroke();
  arc(280, 140, 80, 60, 0, PI);
  arc(330, 140, 70, 50, 0, PI);
  stroke(0);
  fill(40, 20, 15); 
  arc(265, 175, 35, 15, PI, TWO_PI);
  arc(335, 175, 35, 15, PI, TWO_PI);
  fill(255); ellipse(265, 190, 28, 28); ellipse(335, 190, 28, 28); 
  fill(60, 30, 15); ellipse(265, 190, 20, 20); ellipse(335, 190, 20, 20);
  fill(0); ellipse(265, 190, 12, 12); ellipse(335, 190, 12, 12);
  fill(255); noStroke();
  ellipse(262, 186, 6, 6); ellipse(268, 194, 3, 3);
  ellipse(332, 186, 6, 6); ellipse(338, 194, 3, 3);

  // 홍조, 코, 미소
  fill(255, 120, 130, 80); 
  ellipse(250, 215, 35, 15); ellipse(350, 215, 35, 15);
  stroke(0); strokeWeight(2);
  curve(285, 200, 300, 210, 300, 225, 295, 225);
  noFill(); stroke(200, 80, 80); strokeWeight(3);
  arc(300, 235, 30, 15, 0, PI); 

  // 세련된 공군 캡 모자 (조종복과 깔맞춤)
  stroke(0);
  strokeWeight(2);
  fill(20, 30, 50); 
  arc(300, 135, 140, 80, PI, 0); // 조금 더 날렵해진 핏
  fill(10); 
  rect(230, 130, 140, 12, 5); // 검은색 챙
  fill(255, 200, 0);
  noStroke();
  triangle(300, 105, 290, 120, 310, 120); // 금장 마크

  // 4. 마우스 호버 이벤트: 얼굴 주변에 올리면 경례
  if (mouseX > 230 && mouseX < 370 && mouseY > 110 && mouseY < 270) {
    fill(20, 30, 50); // 상의와 동일한 다크 네이비로 수정
    stroke(0);
    strokeWeight(2);
    quad(130, 370, 180, 380, 260, 175, 230, 165); // 팔
    fill(255, 224, 205);
    ellipse(260, 165, 35, 20); // 손
  }
}
