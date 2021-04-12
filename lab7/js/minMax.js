export const min = (arr) => {
    let min = arr[0];
    arr.forEach(el => {
        if (el.main.temp < min.main.temp) {
            min = el;
        }
    });
    return min;
};

export const max = (arr) => {
    let max = arr[0];
    arr.forEach(el => {
        if (el.main.temp > max.main.temp) {
            max = el;
        }
    });
    return max;
};