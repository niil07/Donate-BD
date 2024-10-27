// Noakhali donation js
document
  .getElementById("noa-don-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noaInpNum = inputValueById("noa-inp-btn");
    const mainBalText = document.getElementById("main-balance");
    const mainBal = textValueById("main-balance");

    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");
    const modalExpress = document.getElementById("modal-express");

    if (noaInpNum <= 0 || isNaN(noaInpNum)) {
      modalTitle.innerText = "Invalid Input!";
      modalMessage.innerText = "You must provide valid amount";
      document.getElementById("my_modal_5").showModal();
    } else if (mainBal < noaInpNum) {
      modalTitle.innerText = "Insufficient Balance!";
      modalMessage.innerText =
        "You do not have enough balance to make this donation";
      document.getElementById("my_modal_5").showModal();
    } else {
      const noaBalText = document.getElementById("noa-bal-btn");
      const noaBalNum = textValueById("noa-bal-btn");

      const noaNewBal = noaBalNum + noaInpNum;
      noaBalText.innerText = noaNewBal;

      const newMainBal = mainBal - noaInpNum;
      mainBalText.innerText = newMainBal;

      modalTitle.innerText = "Congrats!";
      modalMessage.innerText = "You have successfully donated for Humankind";
      modalExpress.innerText = "Successful";
      document.getElementById("my_modal_5").showModal();
    }
  });

// Feni donation js
document
  .getElementById("feni-don-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const feniInpNum = inputValueById("feni-inp-btn");
    const mainBalText = document.getElementById("main-balance");
    const mainBal = textValueById("main-balance");

    if (feniInpNum <= 0 || isNaN(feniInpNum)) {
      alert("Please enter valid amount");
    } else if (mainBal < feniInpNum) {
      alert("Insufficient Balance");
    } else {
      const feniBalText = document.getElementById("feni-bal-btn");
      const feniBalNum = textValueById("feni-bal-btn");

      const feniNewBal = feniBalNum + feniInpNum;
      feniBalText.innerText = feniNewBal;

      const newMainBal = mainBal - feniInpNum;
      mainBalText.innerText = newMainBal;
    }
  });

// // Quota donation js
document
  .getElementById("quota-don-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const quotaInpNum = inputValueById("quota-inp-btn");
    const mainBalText = document.getElementById("main-balance");
    const mainBal = textValueById("main-balance");

    if (quotaInpNum <= 0 || isNaN(quotaInpNum)) {
      alert("Please enter valid amount");
    } else if (mainBal < quotaInpNum) {
      alert("Insufficient Balance");
    } else {
      const quotaBalText = document.getElementById("quota-bal-btn");
      const quotaBalNum = textValueById("quota-bal-btn");

      const quotaNewBal = quotaBalNum + quotaInpNum;
      quotaBalText.innerText = quotaNewBal;

      const newMainBal = mainBal - quotaInpNum;
      mainBalText.innerText = newMainBal;
    }
  });
