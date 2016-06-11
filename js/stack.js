const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Classic recursion for Fibonacci sequence
// --
// There is a standard problem here:
// if one has a recursive function then every time
// it recurses one needs extra stack space
fibo = (val) => {
  if (val == 0 || val == 1) {
    return 1;
  }

  return fibo(val - 1) + fibo(val - 2);
};

rl.question('Gimme a number - ', (value) => {
  var startTime = new Date();
  console.log('The ' + value + 'th term of Fibonacci sequence is: ' + fibo(value));
  var endTime = new Date();

  console.log('Took: ' + (endTime - startTime) / 1000 + ' seconds');

  rl.close();
});
