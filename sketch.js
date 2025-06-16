let planta;
let agua = 100;  // Nível de água
let tempoDeCrescimento = 0;
let estadoDaPlanta = "semente";  // "semente", "planta", "flor"

function setup() {
  createCanvas(600, 400);
  planta = new Planta();
}

function draw() {
  background(220);

  // Exibindo a planta
  planta.display();

  // Tempo de crescimento
  tempoDeCrescimento++;
  if (tempoDeCrescimento > 200 && estadoDaPlanta === "semente") {
    estadoDaPlanta = "planta";
  } else if (tempoDeCrescimento > 400 && estadoDaPlanta === "planta") {
    estadoDaPlanta = "flor";
  }

  // Exibir os níveis de água
  textSize(20);
  fill(0);
  text("💧 Água: " + agua + "%", 20, height - 40);
  text("Estado: " + estadoDaPlanta, 200, height - 40);

  // Se a planta não for regada por muito tempo, ela morre
  if (agua <= 0) {
    estadoDaPlanta = "semente";
    textoEstado("⚠️ A planta morreu! Clique para recomeçar.");
  }
}

function mousePressed() {
  // Clicar para regar a planta
  regarPlanta();
}

function regarPlanta() {
  if (agua < 100) {
    agua += 10;  // A água aumenta em 10% a cada rega
  }
  tempoDeCrescimento = 0;  // Resetando o tempo de crescimento
}

class Planta {
  constructor() {
    this.x = 300;
    this.y = 200;
  }

  display() {
    if (estadoDaPlanta === "semente") {
      textSize(40);
      text("🌱", this.x - 15, this.y);  // Emoji da semente
    } else if (estadoDaPlanta === "planta") {
      textSize(40);
      text("🌿", this.x - 15, this.y);  // Emoji da planta
    } else if (estadoDaPlanta === "flor") {
      textSize(40);
      text("🌸", this.x - 15, this.y);  // Emoji da flor
    }
  }
}

function textoEstado(msg) {
  fill(255, 0, 0);
  textSize(20);
  text(msg, 150, height - 80);
}
