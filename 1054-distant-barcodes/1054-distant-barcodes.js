/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    let barcodeMap = new Map();
    for (let num of barcodes) {
        barcodeMap.set(num, barcodeMap.get(num) + 1 || 1);
    }
    let sortedArr = Array.from(barcodeMap.keys()).sort((a,b) => barcodeMap.get(b) - barcodeMap.get(a));
    const bLength = barcodes.length;
    let idx = 0;
    const result = [];
    for (let element of sortedArr) {
        let count = barcodeMap.get(element);
        while (count) {
            result[idx] = element;
            idx += 2;
            if (idx >= bLength) {
                idx = 1;
            }
            count -= 1;
        }
    }
    return result;
};