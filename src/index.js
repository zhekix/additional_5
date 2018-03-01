module.exports = function check(str, bracketsConfig) {
  var check;

  while ( true ) {
    check = false;
    bracketsConfig.forEach(function(config){
      if ( str.indexOf( config.join('') ) > -1 ) {
        str = str.replace(sub, '');
        check = true;
      }
    });
    if (!check) break;
  }

  return (str.length === 0) ? true : false;


  // your solution
  // var parentheses = "",
  //     stack = [],
  //     i,
  //     character,
  //     same = [],
  //     bracePosition;
  //
  // bracketsConfig.forEach(function(item,index,arr){
  //   same.push( item[0] == item[1] ? true : false );
  //   parentheses += item.join('');
  // });
  // console.log("parentheses="+parentheses,"str="+str);
  // console.log("same="+same);
  //
  // for(i = 0; character = str[i]; i++) {
  //     bracePosition = parentheses.indexOf(character);
  //
  //     if(bracePosition === -1) {
  //       continue;
  //     }
  //
  //     if(bracePosition % 2 === 0) {
  //       stack.push(bracePosition + 1); // push next expected brace position
  //       console.log("stack",stack);
  //     } else if ( stack[stack.length-1] === bracePosition ) {
  //       stack.pop();
  //     } else {
  //       if(stack.length === 0 || stack.pop() !== bracePosition) {
  //         console.log(false);
  //         return;
  //         // return false;
  //       }
  //     }
  //   }

  //If anything is left on the stack <- not balanced
  // return !stack.length;
  // return stack.length ? false : true;
  // console.log(stack.length ? false : true);
}


// check('()', [['(', ')']]); // -> true
// check('((()))()', [['(', ')']]); // -> true
// check('())(', [['(', ')']]); // -> false
// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]); // -> true
// check('[(])', [['(', ')'], ['[', ']']]); // -> false
// check('[]()', [['(', ')'], ['[', ']']]); // -> true
// check('[]()(', [['(', ')'], ['[', ']']]); // -> false

// special case: opening and closing bracket can be the same :)
//
// check('||', [['|', '|']]); // -> true
// check('|()|', [['(', ')'], ['|', '|']]); // -> true
// check('|(|)', [['(', ')'], ['|', '|']]); // -> false
// check('|()|(||)||', [['(', ')'], ['|', '|']]); // -> true
