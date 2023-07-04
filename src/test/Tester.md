# jest & jest-expo

https://www.npmjs.com/package/jest-expo

```
npm i jest-expo
```

## Package.json
```
"scripts": {
  ...
  "test": "jest"
},
"jest": {
  "preset": "jest-expo"
}
```

```
// 👉 babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

## Create files with extension
```.test.js ``` or ```.test.jsx ```

---

**Finally to test the file**
```
npm test
```


