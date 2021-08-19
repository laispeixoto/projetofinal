var escolha;

function escolha_merlim() {
  while (escolha !=="esconder"|| escolha !=="lutar") {
     
    var escolha = prompt('O que Merlim deverá fazer? Lutar ou se esconder?')
      if (escolha === 'lutar') {
      alert ('Nossa, essa foi demais! Você acreditou que Merlim seria capaz de derrotar Lich e ele conseguiu. Agora falta pouco para ele reencontrar sua equipe.')
        location.replace('merlim3fase.html')
        break
    }
      else if (escolha === 'esconder') {
        alert ( 'Infelizmente você tomou a pior decisão: a de se esconder. Merlim estaria bem perto de reencontrar sua equipe se tivesse enfrentado Lich, mas agora terá que começar o jogo novamente.')
        location.replace('index.html')
        break
      }
      else {
        alert("Resposta inválida. Digite 'esconder' ou 'lutar'")
        escolha_merlim();
        break
      }
  }
}