# Ensure that the native import of styled-components is used in react-native projects (styled-components-ensure-native)

This rule enforces the use of the `styled-components/native` import instead of `styled-components`.

Using `styled-components` in a `react-native` environment doesn't throw any error but sometimes it
can do weird things and mess unit tests.

## Rule Details

Examples of **incorrect** code for this rule:

```js

import styled from 'styled-components'
import { ThemeContext } from 'styled-components'

```

Examples of **correct** code for this rule:

```js

import styled from 'styled-components/native'
import { ThemeContext } from 'styled-components/native'

// useful for typescript types declaration
import 'styled-components'

```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

There's no reason to enable this rule if you don't use `styled-components` in a `react-native` environment.
