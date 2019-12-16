import Character from '../app';

export default class Bowman extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}
