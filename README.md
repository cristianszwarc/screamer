# Screamer

-------------------------------
`npm install screamer --save-dev`

Basic use
```js
const screamer = require('screamer')
screamer.scream('Bob', 'Name')
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
