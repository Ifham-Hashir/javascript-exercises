const palindromes = function (str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const strRev =  str.split('').reverse().join('');
  if(str === strRev){
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
