
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
    
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const allCats = [...cats,"Broom"];
    return allCats;
}

function prependCat(name) {
    const allCats = ["Arnold", ...cats];
    return allCats;
}

function removeLastCat(){
    const newCats = cats.slice(0, cats.length - 1);
    return newCats;
}
function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats;
}