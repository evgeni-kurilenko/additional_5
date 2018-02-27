module.exports = function check(str, bracketsConfig) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if(bracketsConfig[j][0] !== bracketsConfig[j][1]) {
        if (bracketsConfig[j][0] === str[i]) {
          stack.push(str[i]);
          break;
        } else if (bracketsConfig[j][1] === str[i]) {
          if (!stack.length) {
            return false;
          }

          let x = stack.pop();

          if (x !== bracketsConfig[j][0]) {
            return false;
          }
          break;
        }
      } else {
        if (bracketsConfig[j][0] === str[i]) {
          if (!stack.length) {
            stack.push(str[i]);
          } else {
            let x = stack.pop();
            if (x !== bracketsConfig[j][0]) {
              stack.push(x);
              stack.push(str[i]);
            }
          }
          break;
        }
      }
    }
  }

  return !stack.length;
}
