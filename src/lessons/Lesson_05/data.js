// Повторение метода map()
// Пример: создать новый массив на основании numbers, где каждый элемент нового массива будет умножен на 2
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((value) => {
  return value * 2;
});

console.log(newNumbers);
