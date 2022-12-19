import Character from './character';

export default class Zombie extends Character {
  constructor(name) {
    super(name, type = 'Zombie');
    this.attack = 10;
    this.defence = 40;
  }
}
