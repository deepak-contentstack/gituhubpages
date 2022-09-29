// var stylelint = require('stylelint');
// var ruleName = 'custom/no-visibility-allowed';
// var messages = stylelint.utils.ruleMessages(ruleName, {
//   expected: function (value) {
//     return 'Try not to use visibility: ' + value;
//   }
// });

// module.exports = stylelint.createPlugin(ruleName, function (enabled) {
//   if (!enabled) {
//     return;
//   }
//   return function (root, result) {
//     root.walkDecls(function (decl) {
//       if (decl.prop === 'visibility') {
//         stylelint.utils.report({
//           result,
//           ruleName,
//           message: messages.expected(decl.prop + ', ' + decl.value),
//           node: decl,
//           word: decl.value
//         });
//       }
//     });
//   };
// });

// module.exports.ruleName = ruleName;
// module.exports.messages = messages;
