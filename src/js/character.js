export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (!(this.name.length > 1 && this.name.length < 11 && typeof this.name === 'string')) {
      throw new Error('Имя не соответсвует параметрам');
    }

    if (!(types.includes(this.type))) {
      throw new Error('Тип героя не соответсвует параметрам');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить уровень умершего игрока');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
