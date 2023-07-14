const greet = (name = 'guest') => {
  console.log('hello ' + name + '!')
}

greet('tom') // output: hello tom!
greet('sommy') // output: hello sommy!
greet('ben') // output: hello ben!
greet() // output: hello guest
