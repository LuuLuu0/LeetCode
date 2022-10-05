/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const cities = new Set();
    for (const [cityA, cityB] of paths) {
        cities.add(cityA);
    }
    for (const [cityA, cityB] of paths) {
        if (!cities.has(cityB)) return cityB;
    }
};