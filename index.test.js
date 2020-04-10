const { Greeting } = require('./index');

test('uuid', () => {
  const greeting = new Greeting();
  expect(greeting.hi()).toMatch(/你好世界.+/);
});

test('add', () => {
  const greeting = new Greeting();
  expect(greeting.add(20, 6)).toEqual(26);
});
