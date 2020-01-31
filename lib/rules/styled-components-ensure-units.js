/**
 * @fileoverview Ensure units are present when required
 * @author YADA
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensure units are present when required',
      category: 'styled-components',
      recommended: true,
    },
    fixable: null,
    schema: [],
  },

  create: function(context) {
    const propMatch = /(width|height|margin(-(top|bottom|left|right))?|padding(-(top|bottom|left|right))?|border-radius(-(top-left|top-right|bottom-left|bottom-right))?|top|left|right|bottom):\s*-?(?![0])\d+(?!(px|%|em|rem|vh|vw));/gm

    return {
      TaggedTemplateExpression: function(node) {
        if (
          (node.tag.type === 'CallExpression' &&
            node.tag.callee.name !== 'styled') ||
          (node.tag.type === 'MemberExpression' &&
            node.tag.object.name !== 'styled')
        ) {
          return
        }

        node.quasi.quasis.forEach(function(templateElement) {
          const matches = templateElement.value.raw.matchAll(propMatch)

          for (const m of matches) {
            context.report({
              node: templateElement,
              message: `Property declaration \`${m[0]}\` is missing its unit.`,
            })
          }
        })
      },
    }
  },
}
