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
