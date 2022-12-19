import Character from './character';

export default class Magician extends Character {
  constructor(name) {
    super(name, type = 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
