module.exports = function check(str, bracketsConfig) {
  var check, substr;

  while ( true ) {
    check = false;
    bracketsConfig.forEach(function(config){
      substr = config.join('');
      if ( str.indexOf( substr ) > -1 ) {
        str = str.replace(substr, '');
        check = true;
      }
    });
    if (!check) break;
  }

  return (str.length === 0) ? true : false;
}
