/*
  
    Calculadora de Partidas Rankeadas

*/

function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
  } else if (saldoVitorias >= 101) { 
    nivel = "Imortal";
  }

  return { saldoVitorias, nivel };

}

// Exemplo de uso:
const resultado = calcularNivel(100, 20);

console.log("O Herói tem de saldo de " + resultado.saldoVitorias + " está no nível de " + resultado.nivel);

// Resultado: O Herói tem de saldo de 80 está no nível de Ouro
