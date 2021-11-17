function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* or 
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
} */