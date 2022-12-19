import Character from "../js/character";

test('testing oportunity of applying method with !0 healt rank ', () => {
    const hero = new Character('vasya', 'Bowman');
    hero.health = 80;
    hero.attack = 10;
    hero.defence = 10;
    const result = hero.levelUp();
    const expected = {name: 'vasya', type: 'Bowman', health: 100, level: 2, attack: 12, defense: 12};

    expected(result).toEqual(expected);
})
