// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word) {
  if (arr.length === 0)
  return null; 

  let result;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === word)
    return true;
  }
  return false;
}

console.log(doesWordExist(wordsFind, 'victoria'))