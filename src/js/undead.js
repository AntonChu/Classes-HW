import Character from './character';

export default class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 40;
    this.defence = 10;
  }
}
