module.exports = function reverse (n) {

    const numArr = n.toString().split('');
    let reversedStr = '';

    for (let i = numArr.length - 1; i >= 0; i--) {
        reversedStr += numArr[i];
    }
    
    return parseInt(reversedStr);
  }
