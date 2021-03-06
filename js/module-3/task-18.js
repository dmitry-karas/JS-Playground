// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    console.log(product.name);

    if (product.name === productName) {
      console.log('Цена:', product.price);

      return product.price;
    }
  }
  return null;
}

getProductPrice('Радар');
getProductPrice('Захват');
getProductPrice('Сканер');
getProductPrice('Дроид');
getProductPrice('Двигатель');
