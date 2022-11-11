// calcul average of an array

function findAverage(array) {
    return array.length == 0 ? 0 : array.reduce((acc, curr) => acc + curr) / array.length;
}