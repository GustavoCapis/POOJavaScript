var ingredientes = ['mel','água', 'sal', 'mostarda'];
var modificado = []

for (let i = 0; i < ingredientes.length; i++){
   let letraInicial = ingredientes[i].charAt(0).toUpperCase(); //o charAt é um método que pega uma letra numa posição especifica da string e o toUpperCase transforma em caixa alta
   let restoTexto = ingredientes[i].slice(1);
   let resultado = letraInicial + restoTexto;
   
   modificado[i] = resultado;

}

var ordenado = modificado.sort(function(a,b){
    return a.localeCompare(b); //localeCompare leva em consideração o idioma do seu navegador, nesse caso considerando os caracteres acentuados
});
console.log(ordenado);