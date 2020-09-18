# Screamer
Let's face it, we use console.log more than we would like to admit.

Use this tiny helper to ease the pain of finding an output in a sea of text.

`npm install screamer --save-dev`

Basic use
```js
const screamer = require('screamer')
screamer.scream('Bob', 'Name')
```
Output:
```
-------------------------------------------------------
    .-.                                              1 
  ((o,O))
   \\O//                      Name                     
    )V(   
-------------------------------------------------------
Bob
-------------------------------------------------------
```

Global setup
```js
const screamer = require('screamer')
screamer.setup({ global: true })
scream('Bob', 'Name')
```

Custom log
```js
const screamer = require('screamer')
screamer.setup({
    logger: (what, label) => {
        // ...
    }
})
scream('Bob', 'Name')
```

Other examples:

```js
const screamer = require('screamer')
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

```

```
-------------------------------------------------------
    .-.                                              1 
  ((o,O))
   \\O//                      Name                     
    )V(   
-------------------------------------------------------
Bob
-------------------------------------------------------
-------------------------------------------------------
    .-.                                              2 
  ((o,O))
   \\O//                       Age                     
    )V(   
-------------------------------------------------------
45
-------------------------------------------------------
-------------------------------------------------------
    .-.                                              3 
  ((o,O))
   \\O//                     Numbers                   
    )V(   
-------------------------------------------------------
[
  3,
  4,
  5,
  6
]
-------------------------------------------------------
-------------------------------------------------------
    .-.                                              4 
  ((o,O))
   \\O//                     Object                    
    )V(   
-------------------------------------------------------
{
  "name": "Bob",
  "age": 45
}
-------------------------------------------------------
-------------------------------------------------------
    .-.                                              5 
  ((o,O))
   \\O//                 JSON.stringify                
    )V(   
-------------------------------------------------------
{"name":"Bob","age":45}
-------------------------------------------------------
-------------------------------------------------------
    .-.                                              6 
  ((o,O))
   \\O//                    Circular                   
    )V(   
-------------------------------------------------------
{
  "works": "yeah!",
  "myself": {
    "$ref": "$"
  }
}
-------------------------------------------------------
```
