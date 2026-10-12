export function range(start, end, step) {
    let result = [];

    if (step === undefined) {
        if (start < end) {
            step = 1
        } else {
            step = -1
        }
    }

    if (step > 0) {
        for(let i = start; i <= end; i+= step)
            result.push(i)
    } else {
        for(let i = start; i >= end; i+= step)
            result.push(i)
    }

    return result;
}