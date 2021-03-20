// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];

const sortedByAuthorName = [...books].sort((a, b) =>
  a.author.localeCompare(b.author),
);
console.log('~ sortedByAuthorName', sortedByAuthorName);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
  b.author.localeCompare(a.author),
);
console.log('~ sortedByReversedAuthorName', sortedByReversedAuthorName);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
console.log('~ sortedByAscendingRating', sortedByAscendingRating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
console.log('~ sortedByDescentingRating', sortedByDescentingRating);
