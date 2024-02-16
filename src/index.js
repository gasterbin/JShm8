function factorial(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    return "Ошибка: Аргумент должен быть неотрицательным целым числом";
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(-5));