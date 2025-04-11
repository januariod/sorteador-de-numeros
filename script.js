function sortear() {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);
  const resultado = document.getElementById('resultado');
  const erro = document.getElementById('mensagem-erro');

  erro.textContent = '';
  resultado.textContent = '';
  resultado.classList.remove('aparecer');

  if (isNaN(min) || isNaN(max)) {
    erro.textContent = 'Insira valores numéricos válidos.';
    return;
  }

  if (min >= max) {
    erro.textContent = 'O número mínimo deve ser menor que o máximo.';
    return;
  }

  const numeroFinal = Math.floor(Math.random() * (max - min + 1)) + min;

  let tempoTotal = 3500; // duração total: 3.5s
  let start = null;
  let lastTimestamp = 0;
  let delay = 30; // começa bem rápido

  function animar(timestamp) {
    if (!start) start = timestamp;
    const progresso = timestamp - start;

    if (timestamp - lastTimestamp >= delay) {
      const fake = Math.floor(Math.random() * (max - min + 1)) + min;
      resultado.textContent = `🎲 ${fake}`;
      lastTimestamp = timestamp;

      // aumenta o delay pra desacelerar
      delay += 3; // desaceleração gradual
    }

    if (progresso < tempoTotal) {
      requestAnimationFrame(animar);
    } else {
      resultado.textContent = `🎉 Número sorteado: ${numeroFinal}`;
      resultado.classList.add('aparecer');
    }
  }

  requestAnimationFrame(animar);
}
