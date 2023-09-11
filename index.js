// Tabuada 

/*
Montando uma tabuada no console de 0 até 10 no seguinte formato:

Multiplicador x número = resultado
multiplicador x 0 = resultado
multiplicador x 1 = resultado 
...
multiplicador x 10 = resultado 

Obs: sem usar varios console.log(multiplicador x 3 = resultado);
*/


const multiplicador = 8;

let i = 0
for (let i = 0; i <= 10; i++){
    const calc = multiplicador * i;
    console.log(`${multiplicador} x ${i} = ${calc}`); 
}

// <= delimita até onde vai a tabuada, se colocar outro número, vai ser calculado até ele

/* usando a crase ``, você consegue usar o template literal $, podendo usar uma variavel, você
consegue puxar a variavel usando o template literal 
*/
