var stylelint = require('stylelint');
var ruleName = 'custom/max-value-allowed';
var messages = stylelint.utils.ruleMessages(ruleName, {
  expected: function (value) {
    return 'max value should not exceed max limit ' + value;
  }
});

module.exports = stylelint.createPlugin(ruleName, function (maxLimit) {
  if (maxLimit < 1) {
    return;
  }
  return function (root, result) {
    root.walkDecls(function (decl) {
      if (decl.prop.indexOf('margin') > -1 || decl.prop.indexOf('padding') > -1) {
        if (decl.value.indexOf(' ') > -1) {
        } else {
          if (decl.value.indexOf('px') > -1) {
            if (decl.value.substring(0, decl.value.length - 2) > maxLimit) {
              stylelint.utils.report({
                result,
                ruleName,
                message: messages.expected(maxLimit + ' : ' + decl.prop + ', ' + decl.value),
                node: decl,
                word: decl.value
              });
            }
          }
        }
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
