import Character from "../js/character";

test('checking correct setting type of name', () => {
    const type = 'Ork';
    const result = new Character('Ivan', type);
    const expected = new Error('Тип героя не соответсвует параметрам');

    expected(result).toThrow(expected);
})