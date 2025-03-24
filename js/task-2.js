function makeArray(firstArray, secondArray, maxLength) {
    const mergeArray = [].concat(firstArray, secondArray);
    if (mergeArray.length > maxLength) {
        const copyArray = mergeArray.slice(0, maxLength);
        return copyArray;
    } else {
        return mergeArray;
    }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));               // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));    // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));    // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));          // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));          // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []