const accountBalance = document.getElementById('current-balance');
let  accountBalanceNum = parseFloat(accountBalance.innerText)


document.getElementById('donation-btn').addEventListener('click',function(){

})

function donate(cardNumber){
    const currentBalance = parseFloat(document.getElementById('current-balance').innerText);
    const donateAmount = document.getElementById(`donate-amount${cardNumber}`);
    const donationAmount = parseFloat(donateAmount.value);
    if(isNaN(donationAmount) || donationAmount <= 0 || donationAmount > currentBalance){
        alert('Please enter a valid  donation amount')
        return
    }

    const newBalance = currentBalance -donationAmount;
    document.getElementById('current-balance').innerText =newBalance;

    const currentDonate =document.getElementById(`donate-balance${cardNumber}`);
    const newDonateBalance = parseFloat(currentDonate.innerText);
    currentDonate.innerText = (newDonateBalance + donationAmount).toFixed(2)
      donateAmount.value = '';
      openModal();

}

function openModal(){
    document.getElementById('successModal').classList.remove('hidden');

}
function closeModal(){
    document.getElementById('successModal').classList.add('hidden')
}


   

