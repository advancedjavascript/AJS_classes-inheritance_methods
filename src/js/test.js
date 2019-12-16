import Character from './app';
import Bowman from './classes/bowman';

test('type is Bowman, level 2, health 75', () => {
  const expected = {
    attack: 30,
    defence: 30,
    health: 100,
    level: 3,
    name: 'Lucky',
    type: 'Bowman',
  };

  const received = new Bowman('Lucky', 35, 2);
  received.levelUp();
  expect(received).toEqual(expected);
});

test('player is dead', () => {
  const received = new Character('Lucky', 0, 2);
  const output = () => received.levelUp();

  expect(output).toThrow();
});
