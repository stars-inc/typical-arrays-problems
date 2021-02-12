exports.min = function min (arr) {
  return !arr || !arr.length ? 0 : Math.min(...arr)
}

exports.max = function max (arr) {
  return !arr || !arr.length ? 0 : Math.max(...arr)
}

exports.avg = function avg (arr) {
  return !arr || !arr.length 
    ? 0 
    : arr.reduce((acc, el) => acc + el) / arr.length
}