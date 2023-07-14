function outerFunction () {
  const outerVar = 'i am from outside'

  function innerFunction () {
    console.log(outerVar)
  }

  return innerFunction
}
const innerFunc = outerFunction()
innerFunc(); // returned i am from outside


