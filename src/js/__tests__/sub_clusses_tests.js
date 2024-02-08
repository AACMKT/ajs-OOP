import adventures from '../models';

test.each(adventures)('%s subclass correct creation (with default skills) test', (Subclass, specs) => {
  const adventure = new Subclass('Some name');
  expect(adventure).toEqual({
    attack: specs[1], defence: specs[2], health: 100, level: 1, name: 'Some name', type: specs[0],
  });
});
