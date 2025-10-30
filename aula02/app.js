import funcoes from "./funcoes.js";

var ingredientes = ["mel", "água", "sal", "mostarda"];
var resultadoCapitalizado = funcoes.capitalizar(ingredientes); //O ponto permite o acesso às propriedades do objeto
var resultadoOrdenado = funcoes.ordenar(resultadoCapitalizado);
var resultadoCaixaAlta = funcoes.caixaAlta(resultadoOrdenado);

console.log(resultadoCapitalizado);
console.log(resultadoOrdenado);
console.log(resultadoCaixaAlta);
