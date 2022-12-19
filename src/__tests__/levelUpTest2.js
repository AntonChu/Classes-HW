import Character from "../js/character";

test('testing oportunity of applying method with 0 healt rank ', () => {
    const hero = new Character('vasya', 'Bowman');
    hero.health = 0;
    const result = hero.levelUp();
    const expected = new Error('Нельзя повысить уровень умершего игрока');

    expect(result).toThrow(expected);
})
