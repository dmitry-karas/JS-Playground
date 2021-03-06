// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

function checkFruit(fruit) {
    const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
    
    // console.log(fruits.includes(fruit));

    return fruits.includes(fruit);
}

checkFruit('слива');
checkFruit('мандарин');
checkFruit('груша');
checkFruit('Груша');