// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки Доставка в <страна> будет стоить <цена> кредитов, где вместо <страна> и <цена> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Ямайка - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку 'Извините, в вашу страну доставки нет'

function getShippingCost(country) {
    let message;
    // Пиши код ниже этой строки
    let price;

    switch (country) {
        case 'Китай':
            price = 100;
            message = `Доставка в ${country} будет стоить ${price} кредитов`;
            break;
        
        case 'Чили':
            price = 250;
            message = `Доставка в ${country} будет стоить ${price} кредитов`;
            break;
        
        case 'Австралия':
            price = 170;
            message = `Доставка в ${country} будет стоить ${price} кредитов`;
            break;
        
        case 'Ямайка':
            price = 120;
            message = `Доставка в ${country} будет стоить ${price} кредитов`;
            break;
    
        default:
            message = 'Извините, в вашу страну доставки нет';
    }

    console.log(message)
  // Пиши код выше этой строки
    return message;
}
getShippingCost('Чили')