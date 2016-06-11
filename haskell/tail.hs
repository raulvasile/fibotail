fib :: Integer -> Integer -> Integer -> Integer
fib 0 current next = current
fib n current next = fib (n - 1) next (current + next)
