import adventures from '../models';
import Character from '../models/Character';

test.each(adventures)('LevelUp method test on %s subclass (adventure is alive)', (Subclass) => {
  const adventure = new Subclass('Some name');
  const oldChars = [adventure.level, adventure.attack, adventure.defence];
  adventure.health = 50;
  adventure.levelUp();
  const newChars = [adventure.level, adventure.attack, adventure.defence, adventure.health];
  expect(newChars).toEqual([oldChars[0] + 1, oldChars[1] * 1.2, oldChars[2] * 1.2, 100]);
});

test('dead adventure attempts to LevelUp', () => {
  const adventure = new Character('Unlucky', 'Undead');
  adventure.health = 0;
  expect(() => { adventure.levelUp(); }).toThrowError('Death cannot be cheated');
});

test.each(adventures)('damage method on %s subclass (non fatal)', (Subclass) => {
  const adventure = new Subclass('Some name');
  const stats = [adventure.health, adventure.defence];
  const dmg = 1;
  adventure.damage(dmg);
  expect(adventure.health).toBe(stats[0] - dmg * (1 - stats[1] / 100));
});

test.each(adventures)('damage method on %s subclass (fatal)', (Subclass) => {
  const adventure = new Subclass('Some name');
  const dmg = adventure.health + 1000;
  adventure.damage(dmg);
  expect(adventure.health).toBe(0);
});
