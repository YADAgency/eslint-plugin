/**
 * @fileoverview Ensure units are present when required
 * @author YADA
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/styled-components-ensure-units'),
  RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('styled-components-ensure-units', rule, {
  valid: [
    {
      code:
        'const CustomView = styled.View`\n position: absolute;\n margin-right: 0;\n margin: 30px;\n width: 100%; padding: -10px;\n`',
    },
  ],

  invalid: [
    {
      code:
        'const CustomView = styled.View`\n position: absolute;\n margin-right: 0;\n margin: 30;\n width: 100;\n padding: -10;\n`',
      errors: [
        {
          message: 'Property declaration `margin: 30;` is missing its unit.',
          type: 'TemplateElement',
        },
        {
          message: 'Property declaration `width: 100;` is missing its unit.',
          type: 'TemplateElement',
        },
        {
          message: 'Property declaration `padding: -10;` is missing its unit.',
          type: 'TemplateElement',
        },
      ],
    },
    {
      code:
        'const StyledAdviceFAB = styled(Animated.createAnimatedComponent(FAB))`\n position: absolute;\n right: 16;\n bottom: 75;\n`',
      errors: [
        {
          message: 'Property declaration `right: 16;` is missing its unit.',
          type: 'TemplateElement',
        },
        {
          message: 'Property declaration `bottom: 75;` is missing its unit.',
          type: 'TemplateElement',
        },
      ],
    },
  ],
})
