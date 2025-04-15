document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
  
    if (nome && email && mensagem) {
      document.getElementById('resposta').textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
      this.reset(); 
    } else {
      document.getElementById('resposta').textContent = 'Por favor, preencha todos os campos.';
      document.getElementById('resposta').style.color = 'red';
    }
  });