function staircase(n){
  let steps = '';
  
  for (let i = n; i > 0 ; i--) {
    steps += '#'.repeat(i)+'\n'

}
return steps;
}

console.log(staircase(4))

// * * * * 
// * * *
// * * 
// *