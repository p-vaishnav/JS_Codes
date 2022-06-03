let arr = [[[1, [1.1, [7, [8, [9]]]]], 2, 3], [4, 5]]
/*
recursion, with a for loop
*/

function flatten(result) {
    return recursive = (arr) => {
        for(let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'object') {
                recursive(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }
}
const result = [];
flatten(result)(arr);
console.log(result);