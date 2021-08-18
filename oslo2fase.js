var escolha;

function escolha_oslo() {
  while (escolha !=="sim"|| escolha !=="não") {
     
    var escolha = prompt(' E aí, ele deve enfretá-lo? Sim ou não?');
      if (escolha === 'sim') {
        alert ("Arrasou! Sua decisão fez com que Oslo não duvidasse de sua capacidade de seguir em frente, mesmo que tenhamos imprevistos no caminho. Agora falta pouco para o trio se reunir novamente.");
        location.replace('oslo3fase.html')
        break
      }
      else if (escolha === 'não') {
        alert ( 'Que pena! Essa não foi uma decisão acertada. Oslo não irá rever seus companheiros se ele evitar confrontos, pois não há outro caminho. É o fim do jogo pra vocês.');
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