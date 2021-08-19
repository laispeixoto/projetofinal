function escolha_elfa() {
  while (escolha !=="enfrentar"|| escolha !=="esconder") {
     
    var escolha = prompt('O que ela deverá fazer? Esconder ou enfrentar a criatura?');
      if (escolha === 'enfrentar') {
      alert ('Uaauu, que demais! Com sua ajuda na tomada de decisão, nossa guerreira foi muito corajosa e acabou com o Homem-Pássaro, ficando mais próxima de rever seus companheiros.')
        location.replace('elfa2fase.html')
        break
      }
      else if (escolha === 'esconder') {
        alert ( 'Ahhh, que pena! Quando a gente se esconde, o medo nos domina e não conseguimos prosseguir. A Elfa não vai encontrar seus companheiros se ficar escondida, não é mesmo?! Então, pense melhor e recomece');
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