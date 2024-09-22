document.getElementById('donate-btn').addEventListener('click', function(){
    const currentBalance = getTextValueById('current-balance');
    const donateAmount = getInputValueById('donate-amount');
     const donateBalance = getTextValueById('donate-balance');
    let balance =0;
      const newBalance = currentBalance -donateAmount;
      document.getElementById('current-balance').innerText =newBalance;
      balance = donateBalance +donateAmount ;
       document.getElementById('donate-balance').innerText =balance;

       document.getElementById('show-modal').classList.remove('hidden')
    
     

})


// donate part-2
document.getElementById('donate-btn1').addEventListener('click', function(){
   
    const currentBalance = getTextValueById('current-balance');
    const donateAmount = getInputValueById('donate-amount1');
    const donateBalance =getTextValueById('donate-balance1');
    let balance =0;
    const newBalance  = currentBalance-donateAmount;
    document.getElementById('current-balance').innerText=newBalance;
    balance =donateAmount+donateBalance;
    document.getElementById('donate-balance1').innerText = balance;

    document.getElementById('show-modal-1').classList.remove('hidden')


})


// donate part -3
document.getElementById('donate-btn2').addEventListener('click', function(){
    const currentBalance =getTextValueById('current-balance');
    const donateAmount = getInputValueById('donate-amount-2');
    const donateBalance = getTextValueById('donate-balance2');
    let balance =0;
    const newBalance =currentBalance-donateAmount;
    document.getElementById('current-balance').innerText =newBalance;
    balance= donateBalance + donateAmount;
    document.getElementById('donate-balance2').innerText = balance;

    document.getElementById('show-modal-2').classList.remove('hidden')

     

})