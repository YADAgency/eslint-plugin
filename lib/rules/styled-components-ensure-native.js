/**
 * @fileoverview Ensure that the native import of styled-components is used in react-native projects
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
      description:
        'Ensure that the native import of styled-components is used in react-native projects',
      category: 'react-native',
      recommended: false,
    },
    fixable: 'code',
    schema: [],
  },

  create: function(context) {
    return {
      ImportDeclaration: function(node) {
        if (node.specifiers.length === 0) {
          // we let `import 'styled-components'` for TypeScript types declaration
          return
        }

        if (node.source.value === 'styled-components') {
          context.report({
            node: node,
            message:
              '`styled-components/native` import should be used instead of `styled-components`',
            fix: function(fixer) {
              return fixer.insertTextAfterRange(
                [node.source.start, node.source.end - 1],
                '/native',
              )
            },
          })
        }
      },
    }
  },
}
