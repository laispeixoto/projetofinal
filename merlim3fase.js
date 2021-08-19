var escolha;

function escolha_merlim() {
  while (escolha !== "sim" || escolha !== "não") {

    var escolha = prompt('E então, será que ele tem chance de sair campeão desse duelo? Você aposta que sim ou que não?')
    if (escolha === 'sim') {
      alert('Você foi espetacular nessa decisão e ajudou Merlim a reencontrar Elfa e Oslo. Mais uma batalha vencida por ele e com sua ajuda. Parabéns!')
      location.replace('index.html')
      break
    }
    else if (escolha === 'não') {
      alert('Que triste você ter desacreditado Merlim. A gente adquire experiência quando se arrisca e ele poderia ter saído vitorioso. Diante de sua escolha, aqui é o fim do jogo e nosso guardião não reencontrará sua equipe se não iniciar o jogo.')
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