module.exports = function reverse(n) {
   let strNum = '' + n;
   let arrNum = strNum.match(/\d/gi);
   let revNum = arrNum.reverse();
   let newNum = revNum.join([]);
   return +newNum;
};
