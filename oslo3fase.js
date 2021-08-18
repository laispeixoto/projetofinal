var escolha;

function escolha_oslo() {
  while (escolha !=="acredito"|| escolha !=="volto") {
     
    var escolha = prompt('Mas e você, acredita que ele irá conseguir superar mais esse desafio ou acha que seria melhor ele voltar? Acredita ou volta?');
      if (escolha === 'acredito') {
        alert ("Uaaauuu! Esse é um momento de muita alegria...Sua determinação nas escolhas e o voto de confiança em Oslo fizeram a diferença para que esse trio se reencontrasse e pudesse continuar derrotando o mal juntos. Afinal, a união faz a força.");
        location.replace('index.html')
        break
      }
      else if (escolha === 'volto') {
        alert ( 'Não posso acreditar! Em sua última batalha, tão próximo de reencontrar seu companheiros, parece que Oslo não foi digno de sua confiança e precisará começar a jornada novamente.');
        location.replace('index.html')
        break
      }
      else {
        alert("Resposta inválida. Digite 'acredito' ou 'volto'")
        escolha_oslo();
        break
      }
    }
  }