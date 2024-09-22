document.getElementById('donate-btn1').addEventListener('click', function(){
    const currentBalance = getTextValueById('current-balance');
    const donateAmount = getInputValueById('donate-amount');
     const donateBalance = getTextValueById('donate-balance');
    let balance =0;
      const newBalance = currentBalance -donateAmount;
      document.getElementById('current-balance').innerText =newBalance;
      balance = donateBalance +donateAmount ;
       document.getElementById('donate-balance').innerText =balance;
     

})