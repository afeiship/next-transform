var nx = require('next-js-core2');
require('../src/next-transform');

test('nx.transform for object', function() {
  var obj1 = { name: 'fei', email: '1290657123@qq.com' };

  var rs = nx.transform(
    obj1,
    (result, key, value) => {
      result[`${key}__`] = '__' + value + '__';
    },
    {}
  );

  expect(rs).toEqual({ name__: '__fei__', email__: '__1290657123@qq.com__' });
});

test('nx.transform for array', function() {
  var obj1 = { name: 'fei', email: '1290657123@qq.com' };

  var rs = nx.transform(
    obj1,
    (result, key, value) => {
      result.push({ key: `${key}__`, value: `@@@${value}@@@` });
    },
    []
  );

  expect(rs).toEqual([
    { key: 'name__', value: '@@@fei@@@' },
    { key: 'email__', value: '@@@1290657123@qq.com@@@' }
  ]);
});
