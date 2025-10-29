var ingredientes = ['mel','água', 'sal', 'mostarda'];

function capitalizar(ingredientes){
    let modificado = [];
    
    for (let i = 0; i < ingredientes.length; i++){
       let letraInicial = ingredientes[i].charAt(0).toUpperCase(); //o charAt é um método que pega uma letra numa posição especifica da string e o toUpperCase transforma em caixa alta
       let restoTexto = ingredientes[i].slice(1);
       let resultado = letraInicial + restoTexto;
       
       modificado[i] = resultado;
    }

    return modificado;
}

function ordenar(ingredientes){

    return ingredientes.sort(function(a,b){
        return a.localeCompare(b); //localeCompare leva em consideração o idioma do seu navegador, nesse caso considerando os caracteres acentuados
    });
}

console.log(capitalizar(ingredientes));
console.log(ordenar(ingredientes));
