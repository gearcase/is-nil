# is-nil

> Checks if the given value is null or undefined. 

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/is-nil/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/is-nil/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/is-nil)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/is-nil/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/is-nil)


## Install

```
$ npm install --save is-nil 
```


## Usage

```js
var isNil = require('is-nil');

isNil(null);     // => true
isNil(void 0);   // => true

isNil('abc');    // => false
isNil(123);      // => false
isNil(true);     // => false
isNil(false);    // => false
isNil({});       // => false
isNil([]);       // => false
isNil(NAN);      // => false
```

## Related

- [is-null](https://github.com/bubkoo/is-null) - Checks if the given value is null.
- [is-window](https://github.com/bubkoo/is-window) - Checks if the given value is a window object.
- [is-native](https://github.com/bubkoo/is-native) - Checks if the given value is a native function.
- [is-array-like](https://github.com/bubkoo/is-array-like) - Checks if the given value is an array or an array-like object.
- [is-index](https://github.com/bubkoo/is-index) - Checks if the given value is a valid array-like index.
- [is-length](https://github.com/bubkoo/is-length) - Checks if the given value is a valid array-like length.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/is-nil/issues/new).
