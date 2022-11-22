// time complexity O(N) linear time

// space complexity O(1) left and right pointers take up constant space

function isPalindrome(s) {
  s = s.toLowerCase().replace(/[\W_]/g, '');

  let indexStart = 0;
  let indexEnd = s.length - 1;

  while (indexStart < indexEnd) {
    if (s[indexStart] !== s[indexEnd]) {
      return false;
    }
    indexStart++;
    indexEnd--;
  }

  return true;
}

// o(n) space complexity

const isPalindromeNaive = (s) => {
  const cleanS = s.toLowerCase().replace(/[\W_]/g, '');

  if (cleanS.split('').reverse().join('') === cleanS) {
    console.log('Palindrome');
    return true;
  }
  return false;
};

isPalindromeNaive('A man, a plan, a canal: Panama');
module.exports = isPalindrome;
