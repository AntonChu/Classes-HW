import Character from '../js/character';

test('testing oportunity of applying method with 0 healt rank ', () => {
  const hero = new Character('vasya', 'Bowman');
  hero.health = 0;

  expect(() => hero.levelUp()).toThrowError();
});
