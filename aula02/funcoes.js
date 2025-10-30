//Função para capitalizar strings
function fnCapitalizar(stringArray) {
  let modificado = [];

  for (let i = 0; i < stringArray.length; i++) {
    let letraInicial = stringArray[i].charAt(0).toUpperCase(); //o charAt é um método que pega uma letra numa posição especifica da string e o toUpperCase transforma em caixa alta
    let restoTexto = stringArray[i].slice(1);
    let resultado = letraInicial + restoTexto;

    modificado[i] = resultado;
  }

  return modificado;
}

//Função para ordenar strings em ordem alfabética
function fnOrdenar(stringArray) {
  return stringArray.sort(function (a, b) {
    return a.localeCompare(b); //localeCompare leva em consideração o idioma do seu navegador, nesse caso considerando os caracteres acentuados
  });
}

function fnCaixaAlta(stringArray) {
  let modificado = [];
  for (let i = 0; i < stringArray.length; i++) {
    modificado[i] = stringArray[i].toUpperCase();
  }

  return modificado;
}

export default {
  capitalizar: fnCapitalizar, //chave : valor
  ordenar: fnOrdenar, // a direta é o nome da funcionalidade sendo EXPORTADA de dentro do módulo e a esquerda é o nome da funcionalidade no momento de IMPORTAÇÃO
  caixaAlta: fnCaixaAlta
};
