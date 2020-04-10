const { Greeting } = require('./index');

test('uuid', () => {
  const greeting = new Greeting();
  expect(greeting.hi()).toMatch(/你好世界.+/);
});
