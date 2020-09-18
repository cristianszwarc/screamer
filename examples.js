const screamer = require('./index')
screamer.setup({ global: true })
scream('Bob', 'Name')
scream(45, 'Age')
scream([3,4,5,6], 'Numbers')
scream({ name: 'Bob', age: 45}, 'Object')
screamify({ name: 'Bob', age: 45}, 'JSON.stringify')

const circularReference = {
  works: 'yeah!'
};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
scream(circularReference, 'Circular')
