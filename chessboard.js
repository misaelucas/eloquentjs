const tamanho = 8;
let xadrez = "";

for (let i = 0; i < tamanho; i++) {
  for (let x = 0; x < tamanho; x++) {
    if ((x + i) % 2 == 0) {
      xadrez += " ";
    }
    else {
       xadrez += "#";
    }
  }
  xadrez += "\n";

}

console.log(xadrez);