import Character from "../js/character";

test('testing oportunity of applying method with !0 healt rank ', () => {
    const hero = new Character('vasya', 'Bowman');
    hero.defence = 10;
    const result = hero.damage(10);
    const expected = hero.health = 91;

    expect(result).toBe(expected);
})
