function setup() {
  createCanvas(484, 600);
}

function draw() {
  background(220); // fondo base (no visible en la obra final)
  noStroke();
  
  // fila 1
  
  fill(117,158,238); // rectángulo celeste
  rect(0,0,484,23.5)

  strokeWeight(7);
  stroke(170,148,107); // línea horizontal café claro (mitad derecha del lienzo)
  line(242,20.4,484,21);

  noStroke();
  fill(207,185,84); // rectángulo amarillo
  rect(122,0,227,24);
  
  strokeWeight(2);
  stroke(51);
  fill(133,173,234); // triángulo celeste con borde negro (sale del lienzo)
  triangle(235,-94,122,24,349,24);
  
  // fila 2
  
  noStroke();
  fill(194,174,79); // rectángulo amarillo
  rect(0,24,242,184);
  
  fill(194,184,157); // rectángulo beige
  rect(242,24,484,184);
  
  fill(194,184,157); // triángulo beige
  triangle(38,116,122,24,122,207);
  
  fill(193,170,76); // triángulo amarillo
  triangle(445,116,349,24,349,207);
  
  fill(190,121,26); // rectángulo naranjo
  rect(122,24,227,184);
  
  strokeWeight(2);
  stroke(194,174,79);
  fill(208,49,28); // círculo rojo con borde amarillo
  circle(236, 116, 175);
  
  strokeWeight(2);
  stroke(243,243,244);
  fill(133,173,234); // círculo celeste con borde blanco
  circle(236,116,115);
  
  // fila 3
  
  noStroke();
  fill(164,25,30); // rectángulo rojo oscuro
  rect(0,208,484,188);
  
  fill(208,49,28); // triángulo rojo
  triangle(38,305,122,207,122,396);
  
  fill(208,49,28); // triángulo rojo
  triangle(445,306,349,207,349,396);
  
  strokeWeight(1);
  stroke(0);
  fill(133,173,234); // rectángulo celeste con borde negro
  rect(122,208,227,188);
    
  strokeWeight(9);
  stroke(36,34,39);
  fill(199,144,43); // círculo naranjo con borde negro
  circle(236, 306, 170);
  
  noStroke();
  fill(126,71,30); // círculo café
  circle(236,306,130);
  
  strokeWeight(3);
  stroke(199,144,43);
  fill(208,49,28); // círculo rojo con borde naranjo
  circle(236,306,112);
  
  strokeWeight(10);
  stroke(164,25,30);
  fill(208,49,28); // círculo rojo con borde rojo oscuro
  circle(236,306,93);
  
  // fila 4
  
  noStroke();
  fill(77,60,50); // rectángulo café
  rect(0,396,484,176);
  
  fill(112,62,29) // rectángulo café claro
  rect(242,396,484,184);
  
  fill(166,143,99); // triángulo café claro
  triangle(38,485,122,396,122,572);
  
  fill(185,139,51); // triángulo amarillo
  triangle(445,485,349,396,349,572);
  
  fill(208,49,28); // rectángulo rojo
  rect(122,396,227,188);
 
  fill(203,206,187); // círculo beige claro
  circle(236, 485, 168);
  
  strokeWeight(13);
  stroke(90,117,162);
  fill(36,34,39); // círculo negro con borde celeste
  circle(236,485,100);
  
  // fila 5

  strokeWeight(11);
  stroke(9,58,135); // línea horizontal azul
  line(0,577.5,484,577.5);
  
  noStroke();
  fill(117,158,238); // rectángulo celeste
  rect(0,580,484,20);
  
  fill(154,129,99); // rectángulo café claro
  rect(122,572,227,29);

  noStroke();
  fill(180,195,238); // triángulo celeste (sale del lienzo)
  triangle(235,668,122,572,349,572);
  
 
}
