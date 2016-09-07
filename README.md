# template-regexp [![Build Status](https://travis-ci.org/icodeforlove/template-regexp.png?branch=master)](https://travis-ci.org/icodeforlove/template-regexp)

regular expressions inside of template literals

## install

```
npm install --save template-regexp
```


### regexp template strings

- removes need to double escape
- supports auto escaping of embeded expressions 
- automatically returns a valid RegExp

### getters

- g - adds global flag
- i - adds ignore flag
- m - adds multiline flag
- u - adds unicode flag
- y - adds sticky flag
- _ - clears flags on regexp

### usage

```javascript
import r from 'template-regexp';

r`foo(bar)` // => /foo(bar)/

r`foo(bar)`.g // => /foo(bar)/g

r`foo${'(bar)'}`.g // => /foo\(bar\)/g

r`foo(${'(bar)'})`.g // => /foo(\(bar\))/g

r`foo(${'(bar)'})`.g.i.m.u.y // => /foo(\(bar\))/gimuy
```
