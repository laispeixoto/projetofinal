var escolha;

function escolha_merlim() {
  while (escolha !=="não"|| escolha !=="sim") {
     
    var escolha = prompt('Concorda que Oslo deve fugir? Sim ou não?');
      if (escolha === 'não') {

        location.replace('merlim2fase.html')
        break
      }
      else if (escolha === 'sim') {
        alert ( 'Ahhh, que pena! Quando a gente se esconde, o medo nos domina e não conseguimos prosseguir. A Elfa não vai encontrar seus companheiros se ficar escondida, não é mesmo?! Então, pense melhor e recomece.');
        location.replace('index.html')
        break
      }
      else {
        alert("Resposta inválida. Digite 'sim' ou 'não'")
        escolha_merlim();
        break
      }
    }
  }