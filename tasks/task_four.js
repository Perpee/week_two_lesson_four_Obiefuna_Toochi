function greet (name = 'guest') {
  console.log('hello ' + name + '!')
}

greet() // output: hello guest!
greet('tom') // output: hello tom!
greet('ken') // output: hello everybody!
