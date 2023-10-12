function sumaElemDiviz(arr, n){
    return arr.filter(x => x % n === 0).reduce((acc, x) => acc + x, 0)
}

const array = [1, 3, 12, 20, 15, 21];
const nr = 3;

console.log(sumaElemDiviz(array, nr))