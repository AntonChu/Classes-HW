import Character from '../js/character';

test.each([
  ['shortName', 'a', new Error('Имя не соответсвует параметрам')],
  ['longName', 'vladimirpetrovich', new Error('Имя не соответсвует параметрам')],
  ['notStringName', 12345, new Error('Имя не соответсвует параметрам')],
])('testing type of name %s with %i value', (_, nameValue) => {
  expect(() => new Character(nameValue, 'Bowman')).toThrowError();
});
