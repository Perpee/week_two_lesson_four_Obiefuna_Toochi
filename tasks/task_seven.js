function materials () {
  const insideVar = 'ankara'
}
materials()
console.log(insideVar) // error: insideVar is not defined

const outsideVar = 'sequin'
function material () {
  console.log(outsideVar) // output: sequin
}
material()
