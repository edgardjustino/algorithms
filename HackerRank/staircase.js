function staircase(n){
let steps = '';
for (let i = 1; i <= n; i++){
  let empty = ' '.repeat(n - i);

  steps += empty + '#'.repeat(i) + '\n';
}
return steps;
}

console.log(staircase(8))


//- - - *  vai por 4 linhas, loop de linha 
//- - * *  saber uma condição pra botar vazio, q é o nro de n - 1, mas o nro de n vai diminuindo
//- * * * 
//* * * * 

// *
// * *
// * * *
// * * * *