// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

function isAdult(age) {
  // Пиши код ниже этой строки
    const passed = age >= 18;
    console.log(passed);

  // Пиши код выше этой строки
  return passed;
}
isAdult(17)