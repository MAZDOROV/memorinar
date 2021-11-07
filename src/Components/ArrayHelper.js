
export const getUnique = function (arr) {
    let current = {},
        unique = [];
    for (let i=0; i < arr.length; i++) {
        current = arr[i];
        if (!~unique.indexOf(current)) {
            unique.push(current);
        }
    }
    return unique;
};