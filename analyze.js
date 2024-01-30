//average
// min
//max 
//length
const analyzeArray = function (array) {
    const object = {
        average: array.reduce((total, number) => {
            return total + number;
        }, 0) / array.length,
         min: Math.min(...array),
         max: Math.max(...array),
         length: array.length
    }
    return object;
}

//analyzeArray([1, 8, 3, 4, 2, 6]);
export default analyzeArray;