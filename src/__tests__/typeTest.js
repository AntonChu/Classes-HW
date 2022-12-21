import Character from '../js/character';

test('checking correct setting type of name', () => {
  const type = 'Ork';
  expect(() => new Character('Ivan', type)).toThrowError();
});
// test('checking correct setting type of name', () => {
//     const type = 'Ork';
//     const result = new Character('Ivan', type);

//     expect(() => result).toThrowError();
// });
