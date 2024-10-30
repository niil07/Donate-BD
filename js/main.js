// Stick the header
window.addEventListener('scroll', function () {
  const buttonsSection = document.querySelector('.buttons');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
      buttonsSection.classList.add('scrolled');
  } else {
      buttonsSection.classList.remove('scrolled');
  }
});

// Donation functions
let donationHistory = []; 

function logDonation(title, amount) {
  const date = new Date();
  const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  donationHistory.push({ title, amount, timestamp });
}


function updateHistory() {
  const historyList = document.querySelector(".donation-item");
  historyList.innerHTML = "";

  
  donationHistory.forEach((donation) => {
    const listItem = document.createElement("div");
    listItem.className =
      "donation-item my-3 p-5 rounded-2xl border-2 border-[#1111111A]";

    
    listItem.innerHTML = `
      <h3 class="text-dark text-2xl font-bold leading-9">${donation.title} - ${donation.amount} BDT</h3>
      <span class="text-base text-[#111111B3] font-normal leading-7">Date: ${donation.timestamp} GMT +0600 (Bangladesh Standard Time)</span>
    `;

    historyList.appendChild(listItem);
  });
}

// Noakhali donation js
document
  .getElementById("noa-don-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noaInpNum = inputValueById("noa-inp-btn");
    const mainBalText = document.getElementById("main-balance");
    const mainBal = textValueById("main-balance");

    const modal = document.getElementById("my_modal_5");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");
    const modalExpress = document.getElementById("modal-express");

    if (noaInpNum <= 0 || isNaN(noaInpNum)) {
      modalTitle.innerText = "Invalid Input";
      modalMessage.innerText = "Please enter a valid amount.";
      modalExpress.innerText = "Unsuccessfully";
      modal.showModal();
    } else if (mainBal < noaInpNum) {
      modalTitle.innerText = "Insufficient Balance";
      modalMessage.innerText =
        "You do not have enough balance to make this donation";
      modalExpress.innerText = "Unsuccessfully";
      modal.showModal();
    } else {
      const noaBalText = document.getElementById("noa-bal-btn");
      const noaBalNum = textValueById("noa-bal-btn");
      const noaNewBal = noaBalNum + noaInpNum;
      noaBalText.innerText = noaNewBal;
      const newMainBal = mainBal - noaInpNum;
      mainBalText.innerText = newMainBal;

      modalTitle.innerText = "Congrats!";
      modalMessage.innerText = "You have donated for Humankind.";
      modalExpress.innerText = "Successfully";
      modal.showModal();

      logDonation("Donate for Flood at Noakhali, Bangladesh", noaInpNum);
      updateHistory();
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

    const modal = document.getElementById("my_modal_5");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");
    const modalExpress = document.getElementById("modal-express");

    if (feniInpNum <= 0 || isNaN(feniInpNum)) {
      modalTitle.innerText = "Invalid Input";
      modalMessage.innerText = "Please enter a valid amount.";
      modalExpress.innerText = "Unsuccessfully";
      modal.showModal();
    } else if (mainBal < feniInpNum) {
      modalTitle.innerText = "Insufficient Balance";
      modalMessage.innerText =
        "You do not have enough balance to make this donation.";
      modalExpress.innerText = "Unsuccessfully";
      modal.showModal();
    } else {
      const feniBalText = document.getElementById("feni-bal-btn");
      const feniBalNum = textValueById("feni-bal-btn");
      const feniNewBal = feniBalNum + feniInpNum;
      feniBalText.innerText = feniNewBal;
      const newMainBal = mainBal - feniInpNum;
      mainBalText.innerText = newMainBal;

      modalTitle.innerText = "Congrats!";
      modalMessage.innerText = "You have donated for Humankind.";
      modalExpress.innerText = "Successfully";
      modal.showModal();

      logDonation("Donate for Flood Relief in Feni, Bangladesh", feniInpNum);
      updateHistory();
    }
  });

// Quota donation js
document
  .getElementById("quota-don-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const quotaInpNum = inputValueById("quota-inp-btn");
    const mainBalText = document.getElementById("main-balance");
    const mainBal = textValueById("main-balance");

    const modal = document.getElementById("my_modal_5");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");
    const modalExpress = document.getElementById("modal-express");

    if (quotaInpNum <= 0 || isNaN(quotaInpNum)) {
      modalTitle.innerText = "Invalid Input";
      modalMessage.innerText = "Please enter a valid amount.";
      modalExpress.innerText = "Unsuccessfully";
      modal.showModal();
    } else if (mainBal < quotaInpNum) {
      modalTitle.innerText = "Insufficient Balance";
      modalMessage.innerText =
        "You do not have enough balance to make this donation.";
      modalExpress.innerText = "Unsuccessfully";
      modal.showModal();
    } else {
      const quotaBalText = document.getElementById("quota-bal-btn");
      const quotaBalNum = textValueById("quota-bal-btn");
      const quotaNewBal = quotaBalNum + quotaInpNum;
      quotaBalText.innerText = quotaNewBal;
      const newMainBal = mainBal - quotaInpNum;
      mainBalText.innerText = newMainBal;

      modalTitle.innerText = "Congrats!";
      modalMessage.innerText = "You have donated for Humankind.";
      modalExpress.innerText = "Successfully";
      modal.showModal();

      logDonation("Aid for Injured in the Quota Movement", quotaInpNum);
      updateHistory();
    }
  });

// Show history on button click
document.getElementById("history-btn").addEventListener("click", function () {
  const donationCards = document.getElementById("cards");
  const historySection = document.getElementById("history-section");
  const donationBtn = document.getElementById("donation-btn");
  const historyBtn = document.getElementById("history-btn");
  donationBtn.classList.remove("bg-bg-green", "border-[#1111114D]");
  donationBtn.classList.add("bg-transparent", "text-[#111111B3]");
  historyBtn.classList.remove(
    "bg-transparent",
    "text-[#111111B3]",
    "border-[#1111114D]"
  );
  historyBtn.classList.add("bg-bg-green");

  
  donationCards.classList.add("hidden");
  historySection.classList.remove("hidden");
  updateHistory();
});

document.getElementById("donation-btn").addEventListener("click", function () {
  const donationCards = document.getElementById("cards");
  const historySection = document.getElementById("history-section");
  const donationBtn = document.getElementById("donation-btn");
  const historyBtn = document.getElementById("history-btn");

  donationBtn.classList.remove("bg-transparent", "text-[#111111B3]");
  donationBtn.classList.add("bg-bg-green");
  historyBtn.classList.remove("bg-bg-green");
  historyBtn.classList.add("bg-transparent", "text-[#111111B3]");

  
  donationCards.classList.remove("hidden");
  historySection.classList.add("hidden");
  updateHistory(); 
});
