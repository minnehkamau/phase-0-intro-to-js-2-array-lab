// Write your solution here!
let cats = ["Milo", "Otis","Garfield"]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
  }
function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)
}
function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield)
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo)
}
function appendCat(Broom){
    let newCatList = cats.slice(-3)
    newCatList.push(Broom)
    return newCatList
}
function prependCat(Arnold){
    let newCatList = cats.slice(0)
    newCatList.unshift(Arnold)
    return newCatList
}
function removeLastCat(Garfield){
    let newCatList = cats.slice(-3)
        newCatList.pop(Garfield)
    return newCatList
}
function removeFirstCat(Milo){
    let newCatList = cats.slice(0)
    newCatList.shift(Milo)
    return newCatList
}





























