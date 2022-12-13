export default class Character {
  constructor(name, type) {
    const types = [
      { type: 'Bowman', attack: 25, defence: 25 },
      { type: 'Swordsman', attack: 40, defence: 10 },
      { type: 'Magician', attack: 10, defence: 40 },
      { type: 'Daemon', attack: 25, defence: 25 },
      { type: 'Undead', attack: 40, defence: 10 },
      { type: 'Zombie', attack: 10, defence: 40 },
    ];
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = types.find((el) => el.type === this.type).attack;
    this.defence = types.find((el) => el.type === this.type).defence;

    if (!(this.name.length > 1 && this.name.length < 11 && typeof this.name === 'string')) {
      throw new Error('Имя не соответсвует параметрам');
    }

    if (!(types.find((el) => el.type === this.type))) {
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
