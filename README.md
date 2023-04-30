# playolaizq-utilities

Utilities library example - It exports basic utilities with type declarations

* @playolaizq/local-storage
* @playolaizq/styles

## Getting Started

Configure your `.npmrc` file to pull scoped `@playolaizq` packages:

```
// .npmrc

//npm.pkg.github.com/:_authToken=${NPM_READ_GITHUB}
@playolaizq:registry=https://npm.pkg.github.com
always-auth=true
```

Then install the package:

```bash
npm install @playolaizq/styles
```

## Usage

```js
import { classNames } from '@playolaizq/styles';

classNames('foo', 'boo', false && 'koo'); // returns "foo boo"
```
