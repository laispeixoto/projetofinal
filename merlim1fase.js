var escolha;

function escolha_merlim() {
  while (escolha !=="não"|| escolha !=="sim") {
     
    var escolha = prompt('Você acha que Merlim é capaz de matá-lo? Sim ou não?');
      if (escolha === 'sim') {
      alert ('Claro que ele e seu companheiro Uni iriam vencer tranquilamente o Tarrasque. Você acertou na decisão e ajudou Merlim a dar um passo importante nessa jornada.')
        location.replace('merlim2fase.html')
        break
      }
      else if (escolha === 'não') {
        alert ( 'Por essa Merlim não esperava. Com sua ajuda e a ajuda de Uni, acredito que ele tenha grandes chaces de vencer Tarrasque. Dê outra chance a ele e inicie o jogo.');
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