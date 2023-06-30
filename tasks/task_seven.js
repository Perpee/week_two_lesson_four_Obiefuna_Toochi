function materials(){
    let insideVar = "ankara"
}
materials()
console.log(insideVar); // error: insideVar is not defined


let outsideVar = "sequin"
function material(){
    console.log(outsideVar); // output: sequin
}
material()