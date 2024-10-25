const { sortByPrice } = require('./sorting');

test('sorts product prices', () => {
  expect(sortByPrice([50, 20, 60, 15, 30])).toEqual([15, 20, 30, 50, 60]);
});