
// Iteration #5: Unique arrays


// iterar sobre la array
// en cada loop comparar si hay otra palabra igual
// si no hay agregarla a una nueva array
/*const wordsUnique = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];
  
  function uniquifyArray() {}
   */

  // Iteration #3.1 Bonus:

  const numbers = [2, [9, 4, 10], 9, 10, 7, 4, 1, 9];
  function sum(arr) {
    
    let sum = 0;
    for (i=0; i < arr.length; i++) {
    if (typeof arr[i] === 'string')
      sum += arr[i].length;
    else if (typeof arr[i] === 'number') 
      sum += arr[i]
    else if (typeof arr[i] === 'boolean')
    sum += arr[i]
    else

    throw new Error('fkejrnf')
    }
  return sum
}
console.log(sum(numbers))