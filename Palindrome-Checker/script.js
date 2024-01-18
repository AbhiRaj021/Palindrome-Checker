const inputValue = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const results = document.getElementById('result'); 

const checkPalindrome = input => {
  const originalInput = input;          //store for later output
  if(input === '')
  {
    alert('Plese input a value');
    return;
  }
  // remove previous output
  results.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${originalInput}</strong>
  ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  results.appendChild(pTag);

  //show the result
  results.classList.remove('hidden');
};

checkPalindromeBtn.addEventListener('click', () => {
  checkPalindrome(inputValue.value);
  inputValue.value = '';
});

inputValue.addEventListener('click', e => {
  if(e.key === 'Enter') {
    checkPalindrome(inputValue.value);
    inputValue.value = '';
  }
});