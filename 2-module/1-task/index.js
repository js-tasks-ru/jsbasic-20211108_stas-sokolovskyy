function sumSalary(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] == 'number' && isFinite(obj[key])) {
      sum += obj[key];
    }
  }
  return sum;
}
