// donation js

document
  .getElementById("noa-don-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    
    const noaInpNum = inputValueById("noa-inp-btn");
    const mainBalText = document.getElementById("main-balance");
    const mainBal = textValueById("main-balance");

    if (noaInpNum < 0 || isNaN(noaInpNum)) {
      alert("Please enter valid amount");
    } else if (mainBal < noaInpNum) {
      alert("Insufficient Balance");
    } else {
      const noaBalText = document.getElementById("noa-bal-btn");
      const noaBal = noaBalText.innerText;
      const noaBalNum = parseFloat(noaBal);

      const noaNewBal = noaBalNum + noaInpNum;
      noaBalText.innerText = noaNewBal;

      const newMainBal = mainBal - noaInpNum;
      mainBalText.innerText = newMainBal;
    }
  });
