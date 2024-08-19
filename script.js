function predict() {
    const inputData = document.getElementById('inputData').value;
    // Aqui você pode adicionar a lógica para a previsão
    // Vamos simular uma previsão aleatória para este exemplo
    const result = Math.random() > 0.5 ? 'Voo Alto' : 'Voo Baixo';
    document.getElementById('result').innerText = `Previsão: ${result}`;
      
