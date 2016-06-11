const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Tail call optimization for Fibonacci sequence
// --
// This type of recursion will never need more stack space
// since as soon as it receives a value from the recursive
// call it will return it to its caller
fibo = (index, current, next) => {
  if (index == 0) return current;

  return fibo(index - 1, next, current + next);
};

rl.question('Gimme a number - ', (value) => {
  var startTime = new Date();
  console.log('The ' + value + 'th term of Fibonacci sequence is: ' + fibo(value, 1, 1));
  var endTime = new Date();

  console.log('Took: ' + (endTime - startTime) / 1000 + ' seconds');

  rl.close();
});
