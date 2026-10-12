export function arrayFiltering(array, test) {
    let result = [];

    for (let i = 0; i< array.length; i++) {
            if ( test(array[i]) === true ) {
            result.push(array[i])
        }
    }

    return result;
}