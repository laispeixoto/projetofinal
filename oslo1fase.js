var escolha;

function escolha_oslo() {
  while (escolha !=="não"|| escolha !=="sim") {
     
    var escolha = prompt('Concorda que Oslo deve fugir? Sim ou não?');
      if (escolha === 'não') {
        alert ("Você mandou muito bem nessa escolha! Nosso guardião se recompôs e colocou Dimitri para correr. Ele está se aproximando de rever seus companheiros.")
        location.replace('oslo2fase.html')
        break
      }
      else if (escolha === 'sim') {
        alert ( 'Poxa, Oslo não esperava por essa decisão. Ele tem tanta sabedoria e capacidade de vencer Dimitri que, quem sabe, você pudesse retornar ao início do jogo e dar outra chance a ele.');
        location.replace('index.html')
        break
      }
      else {
        alert("Resposta inválida. Digite 'sim' ou 'não'")
        escolha_oslo();
        break
      }
    }
  }