export default class Character {
  constructor(name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += (this.attack * 20) / 100;
      this.defence += (this.defence * 20) / 100;
      this.health = 100;
    } else {
      throw Error('Error: you are dead.');
    }
  }
}
