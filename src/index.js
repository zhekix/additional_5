module.exports = function check(str, bracketsConfig) {
  var check, substr;

  while ( true ) {
    check = false;
    bracketsConfig.forEach(config => {
      substr = config.join('');
      if ( str.includes( substr ) ) {
        str = str.replace(substr, '');
        check = true;
      }
    });
    if (!check) break;
  }

  return (str.length === 0) ? true : false;
}
