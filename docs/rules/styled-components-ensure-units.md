# Ensure units are present when required (styled-components-ensure-units)

This rule ensures units are present in styled-components template literals.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
const CustomView = styled.View`
  margin: 0;
  width: 100%;
  padding-right: 4px;
`
```

Examples of **correct** code for this rule:

```js
const CustomView = styled.View`
  margin: 0;
  width: 100;
  padding-right: 4;
`
```

## When Not To Use It

This rule is unecessary when not using styled-components.

