var escolha;

function escolha_elfa() {
  while (escolha !=="sim"|| escolha !=="não") {
     
    var escolha = prompt('E você, acredita que ela é capaz, mesmo estando esgotada de suas batalhas anteriores? Sim ou não?');
      if (escolha === 'sim') {
        alert ("Aeeeee. Parabéns! Você foi sensacional nas decisões e ajudou a Elfa a reencontrar seus companheiros. Agora, com esses reforços, ela será capaz de enfrentar seus obstáculos com muito mais certeza de que não está sozinha na batalha.")
        location.replace('index.html')
        break
      }
      else if (escolha === 'não') {
        alert ( 'Nossa! Faltava tão pouco para a Elfa encontrar seus companheiros, mas parece que você não confiou na sua capacidade de resiliência. Infelizmente, você voltará para o início e ela também.');
        location.replace('index.html')
        break
      }
      else {
        alert("Resposta inválida. Digite 'sim' ou 'não'")
        escolha_elfa();
        break
      }
    }
  }