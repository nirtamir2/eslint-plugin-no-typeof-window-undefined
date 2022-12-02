# eslint-plugin-no-typeof-window-undefined

ESLint rule that helps avoid `typeof window === "undefined"` check and fix it to `typeof document === "undefined"`
instead.
It's recommended to use `document` over `window` because server runtimes like Deno have a global window available.

[![npm version](https://badge.fury.io/js/eslint-plugin-no-typeof-window-undefined.svg)](https://badge.fury.io/js/eslint-plugin-no-typeof-window-undefined)


## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
$ pnpm add eslint --D
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-typeof-window-undefined`:

```bash
$ pnpm add -D eslint-plugin-no-typeof-window-undefined
$ npm install eslint-plugin-no-typeof-window-undefined --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also
install `eslint-plugin-no-typeof-window-undefined` globally.

## Usage

Add `no-typeof-window-undefined` to the plugins section of your `.eslintrc` configuration file. You can omit
the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "no-typeof-window-undefined"
  ]
}
```

Then configure the rule under the rules section.

```json
{
  "rules": {
    "no-typeof-window-undefined/no-typeof-window-undefined": "warn"
  }
}
```

Or enable it with defaults

```json
{
  "extends": [
    "plugin:no-typeof-window-undefined/recommended"
  ]
}
```

Often it makes sense to enable `no-typeof-window-undefined` only for certain files/directories. For cases like that, use
override key of eslint config:

```jsonc
{
  "plugins": ["no-typeof-window-undefined"],
  "rules": {
    "no-typeof-window-undefined/no-typeof-window-undefined": "off"
  },
  "overrides": [
    {
      "files": ["src/**/index.{ts,js}"],
      "rules": {
        "no-typeof-window-undefined/no-typeof-window-undefined": "error
      }
    }
  ]
}
```

## Credits
- https://twitter.com/JLarky/status/1598147116093693952
- [Remix documentation](https://remix.run/docs/en/v1/pages/gotchas#typeof-window-checks)
