const cats = [ 'Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(larry) {
    cats.push(larry)
    return cats;
}

function destructivelyPrependCat(name) { 
    cats.unshift(name)
    return cats;
}

function destructivelyRemoveLastCat(Garfield){
    cats.pop("Garfield");
    return cats;
}

function destructivelyRemoveFirstCat(jalashinsky){
    cats.shift("namesake");
    return cats;
}

function appendCat(ja) { 
    return appendCat = [ ...cats, "Broom"]
}


function prependCat(Harry) { 
    return appendCat = [ "Arnold", ...cats, ]
}

function removeLastCat(name) {
    let removeLastCat = cats.slice(0,2)
    return removeLastCat

}

function removeFirstCat(namesake) {
    let removeFirstCat = [...cats]
    removeFirstCat.shift();
    return removeFirstCat
    np
}
