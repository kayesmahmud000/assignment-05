const accountBalance = document.getElementById('current-balance');
let  accountBalanceNum = parseFloat(accountBalance.innerText)


document.getElementById('donation-btn').addEventListener('click',function(){
    document.getElementById('donation-card').classList.remove('hidden')
    toggleBtn('donation-btn')
    document.getElementById('historyList').classList.add('hidden')
})

document.getElementById('history-btn').addEventListener('click',function(){
   document.getElementById('donation-card').classList.add('hidden')
    toggleBtn('history-btn')
    document.getElementById('historyList').classList.remove('hidden')


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
    const title =document.getElementById(`title${cardNumber}`).innerText;
    

    addHistory(`${donationAmount.toFixed(2)} Taka is donated for ${title}`);

      donateAmount.value = '';
     
      openModal();

}
function addHistory(title){
    const historyList = document.getElementById('historyList');
    const historyItem = document.createElement('div');
    historyItem.className= 'border-2 border-gray-400 rounded-lg p-4 mb-5'
    const date= new Date();
    historyItem.innerHTML=`<p>${title}</p>
    <p>Date: ${date.toUTCString()}</p>
    `
    historyList.appendChild(historyItem);
}


function openModal(){
    document.getElementById('successModal').classList.remove('hidden');

}
function closeModal(){
    document.getElementById('successModal').classList.add('hidden')

}

function toggleBtn(id){
    
    document.getElementById('donation-btn').classList.remove('bg-lime-300');
    document.getElementById('history-btn').classList.remove('bg-lime-300');
    document.getElementById(id).classList.add('bg-lime-300');

}


   

