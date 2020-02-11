/**
 * @fileoverview Ensure that the native import of styled-components is used in react-native projects
 * @author YADA
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/styled-components-ensure-native'),
  RuleTester = require('eslint').RuleTester

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
})
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ERROR_MSG_NOT_NATIVE =
  '`styled-components/native` import should be used instead of `styled-components`'

var ruleTester = new RuleTester()
ruleTester.run('styled-components-ensure-native', rule, {
  valid: [
    {
      code: "import styled from 'styled-components/native'",
    },
    {
      code: "import { ThemeContext } from 'styled-components/native'",
    },
    {
      code: "import styled, { ThemeContext } from 'styled-components/native'",
    },
    {
      code: "import 'styled-components'",
    },
    {
      code: "import { FlattenSimpleInterpolation } from 'styled-components'",
    },
  ],

  invalid: [
    {
      code: "import styled from 'styled-components'",
      errors: [
        {
          message: ERROR_MSG_NOT_NATIVE,
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import { ThemeContext } from 'styled-components'",
      errors: [
        {
          message: ERROR_MSG_NOT_NATIVE,
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import  styled, { ThemeContext } from 'styled-components'",
      errors: [
        {
          message: ERROR_MSG_NOT_NATIVE,
          type: 'ImportDeclaration',
        },
        {
          message: ERROR_MSG_NOT_NATIVE,
          type: 'ImportDeclaration',
        },
      ],
    },
  ],
})
