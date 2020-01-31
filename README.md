# eslint-plugin-yada

Hand crafted rules for the awesome team at YADA

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-yada`:

```
$ npm install eslint-plugin-yada --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-yada` globally.

## Usage

Add `yada` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "yada"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "yada/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





