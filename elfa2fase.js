var escolha;

function escolha_elfa() {
  while (escolha !=="enfrentar"|| escolha !=="fugir") {
     
    var escolha = prompt('O que ela deverá fazer? Fugir ou enfrentar o vampiro?');
      if (escolha === 'enfrentar') {
      alert ('Muito sábia a sua decisão! A Elfa é muito poderosa e conseguiu matar o malvado Tausi. Falta bem pouco para ela encontrar seus companheiros.')
        location.replace('elfa3fase.html')
        break
      }
      else if (escolha === 'fugir') {
        alert ( 'Ahhh, não...Essa decisão prejudicou a Elfa, pois fugir de uma batalha quando se está com medo é afirmar que não conseguirá seguir em frente e, se não seguimos, não alcançamos nossos objetivos. A Elfa precisará recomeçar para encontrar seus companheiros.');
        location.replace('index.html')
        break
      }
      else {
        alert("Resposta inválida. Digite 'enfrentar' ou 'fugir'")
        escolha_elfa();
        break
      }
    }
  }