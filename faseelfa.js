var booleano = true;
//var texto1 = 'Elfa segue na busca por seus companheiros quando, de repente, ela se depara com o macabro Homem-Pássaro. Ela fica com medo e receosa sobre o que fazer, pois nunca havia lutado com um ser assim antes, meio animal e meio humano. Então ela pensa em se esconder atrás da rocha.';
var b = texto1;
//var texto2 = 'texto2';
//var texto3 = 'texto3';

function escolha_elfa() {
  while (booleano) {
    if (b === texto1) {
      var texto1 = prompt('O que Elfa deverá fazer? Esconder ou enfrentar a criatura?');
      if (texto1 === 'enfrentar') {
        
        alert = 'Uaauu, que demais! Com sua ajuda na tomada de decisão, nossa guereira foi muito corajosa e acabou com o Homem-Pássaro, ficando mais próxima de rever seus companheiros.';
        //document.getElementById('dialogoEscolha').innerHTML = texto2;
        location.replace ('elfa2fase.html')
        //b = texto2;
        break
      }
      else if (escolha === 'esconder') {
        alert = 'Ahhh, que pena! Quando a gente se esconde, o medo nos domina e não conseguimos prosseguir. A Elfa não vai encontrar seus companheiros se ficar escondida, não é mesmo?! Então, pense melhor e recomece.';
        booleano = false;
        location.replace('index.html')
        break
      }
    }