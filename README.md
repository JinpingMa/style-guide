# eslint-config-zuodashi

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the zuodashi JavaScript style guide (ES2015+ version)


## Installation

```sh
#https
$ npm install --save-dev git+https://address.git
#ssh
$ npm install --save-dev git+ssh://address.git

```


## Usage

Once the `eslint-config-zuodashi` package is installed, you can use it by specifying `zuodashi` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "zuodashi",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using the `zuodashi` config with `eslint:recommended`

To use zuodashi style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `zuodashi` last:

```js
{
  "extends": ["eslint:recommended", "zuodashi"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

To see how the `zuodashi` config compares with `eslint:recommended`, refer to the source code of `index.js`, which lists every ESLint rule along with whether (and how) it is enforced by the `zuodashi` config.

