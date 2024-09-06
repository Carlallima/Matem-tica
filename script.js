let numero1, numero2, operador, respostaCorreta;

function gerarNovaEquacao() {
  numero1 = Math.floor(Math.random() * 10) + 1;
  numero2 = Math.floor(Math.random() * 10) + 1;
  const operadores = ['+', '-', '*'];
  operador = operadores[Math.floor(Math.random() * operadores.length)];

  // Garantir que numero1 seja maior ou igual a numero2 em subtrações
  if (operador === '-') {
    while (numero1 < numero2) {
      numero1 = Math.floor(Math.random() * 10) + 1;
      numero2 = Math.floor(Math.random() * 10) + 1;
    }
  }

  // Calcular a resposta correta
  switch (operador) {
    case '+':
      respostaCorreta = numero1 + numero2;
      break;
    case '-':
      respostaCorreta = numero1 - numero2;
      break;
    case '*':
      respostaCorreta = numero1 * numero2;
      break;
  }

  // Mostrar a equação
  document.getElementById('equacao').textContent = `${numero1} ${operador} ${numero2} = ?`;
  document.getElementById('resposta').value = '';
}

function verificarResposta() {
  const respostaUsuario = parseInt(document.getElementById('resposta').value);

  if (respostaUsuario === respostaCorreta) {
    document.getElementById('mensagem').textContent = 'Parabéns você Acertou!';
    document.getElementById('mensagem').style.color = 'green';
  } else {
    document.getElementById('mensagem').textContent = 'Oh não, Vamos de Novo';
    document.getElementById('mensagem').style.color = 'red';
  }
}

// Iniciar com uma equação ao carregar a página
window.onload = gerarNovaEquacao;