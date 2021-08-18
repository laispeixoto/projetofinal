var escolha;

function escolha_elfa() {
  while (escolha !=="enfrentar"|| escolha !=="esconder") {
     
    var escolha = prompt('O que Elfa deverá fazer? Esconder ou enfrentar a criatura?');
      if (escolha === 'enfrentar') {

        location.replace('elfa2fase.html')
        break
      }
      else if (escolha === 'esconder') {
        alert ( 'Ahhh, que pena! Quando a gente se esconde, o medo nos domina e não conseguimos prosseguir. A Elfa não vai encontrar seus companheiros se ficar escondida, não é mesmo?! Então, pense melhor e recomece.');
        location.replace('index.html')
        break
      }
      else {
        alert("Resposta inválida. Digite 'enfrentar' ou 'esconder'")
        escolha_elfa();
        break
      }
    }
  }
