var seedRandom = require('seed-random');

exports.getRandomSubarray = function (uid, arr, n) {
    var shuffled = arr.slice(0), i = arr.length, temp, index, fakeRandomA = seedRandom(uid), size = Math.floor(arr.length * fakeRandomA());
    while (i--) {
        index = Math.floor(i * fakeRandomA());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, n==null?size:n);
};
exports.keys = Object.keys || function (obj) {
    var results = [];
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            results.push(k);
        }
    }
    return results;
};