const d = document;

export const dibujarAhorcado = (contador,pantalla,pincel) => {
  

  /* CANVA */
  pincel.fillStyle = "#eff1fa";
  pincel.fillRect(0, 0, pantalla.width, pantalla.height);

  /* FUNCION DIBUJAR LINEA*/
  function dibujarLinea(x1, y1, x2, y2) {
    pincel.strokeStyle = "#072b61";
    pincel.moveTo(x1, y1);
    pincel.lineWidth = 10;
    pincel.lineCap = "round";
    pincel.lineTo(x2, y2);
    pincel.stroke();
  }
  /* FUNCION DIBUJAR CIRCULO*/
  function dibujarCirculo(x, y, r, inicio, fin, sentido) {
    //pincel.beginPath();
    pincel.arc(x, y, r, inicio, fin, sentido);
    pincel.strokeStyle = "#072b61";
    pincel.lineWidth = 10;
    pincel.lineCap = "round";
    pincel.stroke();
  }

  switch (contador) {
    case 1:
      dibujarLinea(10, 395, 290, 395);
      break;

    case 2:
      dibujarLinea(50, 395, 50, 50);
      break;

    case 3:
      dibujarLinea(50, 50, 200, 50);
      break;

    case 4:
      dibujarLinea(200, 50, 200, 100);
      break;

    case 5:
      //dibujarCirculo(200, 140, 35, 0, Math.PI * 2, true);
      dibujarCirculo(200, 140, 35, 1.5 * Math.PI, Math.PI * 1.55, true);
      break;

    case 6:
      dibujarLinea(200, 175, 200, 300);
      break;

    case 7:
      dibujarLinea(200, 200, 160, 250);
      break;

    case 8:
      dibujarLinea(200, 200, 240, 250);
      break;

    case 9:
      dibujarLinea(200, 300, 160, 350);
      break;

    case 10:
      dibujarLinea(200, 300, 240, 350);
      console.log("FIN DEL JUEGO");
      break;
  }

};
