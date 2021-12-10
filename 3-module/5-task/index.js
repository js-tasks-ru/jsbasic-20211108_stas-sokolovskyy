function getMinMax(str) {
  arr = str.split(' ').map(item => +item).filter((item) => item);
  let obj = {};
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  return obj; // ваш код...
}
