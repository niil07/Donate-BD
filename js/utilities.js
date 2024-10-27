// Reusable Function

function inputValueById(id) {
  const inpValue = document.getElementById(id).value;
  const inpNum = parseFloat(inpValue);
  return inpNum;
}

function textValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNum = parseFloat(textValue);
    return textNum;
}