function calcExpressionWithoutQuote(expression) {
  var operators = [];
  var nums = [];
  var lastOperatorIndex = -1;
  for (var i = 0; i < expression.length; i++) {
    var charAtIndex = expression.charAt(i);
    if (isOperatorChar(charAtIndex)) {
      operators[operators.length] = charAtIndex;
      nums[nums.length] = expression.substring(lastOperatorIndex + 1, i);
      lastOperatorIndex = i;
    }
    if (i == (expression.length - 1) && lastOperatorIndex < i) {
      nums[nums.length] = expression.substring(lastOperatorIndex + 1, expression.length);
    }
  }
  if (operators.length <= 0 || nums.length <= 0) {
    return expression;
  }
  while (operators.indexOf('*') > -1 || operators.indexOf('/') > -1) {
    operators.forEach(function (value, index) {
      if (value == '*' || value == '/') {
        // 拿到操作符位置。
        var tempResult = calcExpressionWithSingleOperator(nums[index], nums[index + 1], value);
        operators.splice(index, 1);
        nums.splice(index, 2, [tempResult]);
      }
    });
  }
  var calcResult = nums[0] * 1;
  // 现在只剩下'+'、'-'了
  if (operators.indexOf('+') > -1 || operators.indexOf('-') > -1) {
    for (var index = 0; index < operators.length; index++) {
      var value = operators[index];
      if (value == '+' || value == '-') {
        calcResult = calcExpressionWithSingleOperator(calcResult, nums[index + 1], value);
      }
    }
    return calcResult;
  } else {
    return (nums[0] * 1);
  }
}

console.log(calcExpressionWithoutQuote(1+3+82*9-8))