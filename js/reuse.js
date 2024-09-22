function getInputValueById(id){
  return parseFloat(document.getElementById(id).value) ;
}

function getTextValueById(id){
    return parseFloat(document.getElementById(id).innerText);
}

function setInputValueById(id,num){
    document.getElementById(id).innerText =num

}