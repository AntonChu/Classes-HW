import Undead from '../js/undead';

test('testing oportunity of applying method with !0 healt rank ', () => {
  const hero = new Undead('vasya');
  hero.damage(10);
  const expectedHealth = 91;

  expect(hero.health).toBe(expectedHealth);
});
