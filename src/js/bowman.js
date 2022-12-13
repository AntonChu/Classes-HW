import Character from './character';

export default class Bowman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowman';
  }
}
