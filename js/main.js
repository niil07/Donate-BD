// donation js

// document
//   .getElementById("noa-don-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     const noaInpBtn = document.getElementById("noa-inp-btn").value;
//     const noaInpNum = parseFloat(noaInpBtn);

//     const mainBalanceText = document.getElementById("main-balance");
//     const mainBal = mainBalanceText.innerText;
//     const mainBalanceNumber = parseFloat(mainBal);

//     if (noaInpNum < 0 || isNaN(noaInpNum)) {
//       alert("enter valid amount");
//     }else if (mainBalanceNumber < 0) {
//         alert("insufficient balance");
//     } else {
//       const noaBalText = document.getElementById("noa-bal-btn");
//       const noaBal = noaBalText.innerText;
//       const noaBalNum = parseFloat(noaBal);

//       const noaNewBal = noaBalNum + noaInpNum;
//       noaBalText.innerText = noaNewBal;

//       const newMainBal = mainBalanceNumber - noaInpNum;
//       mainBalanceText.innerText = newMainBal;
//     }
//   });

document
  .getElementById("noa-don-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Get the donation input value and parse it
    const noaInpBtn = document.getElementById("noa-inp-btn").value;
    const noaInpNum = parseFloat(noaInpBtn);

    // Get the main balance and parse it
    const mainBalanceText = document.getElementById("main-balance");
    const mainBal = mainBalanceText.innerText;
    const mainBalanceNumber = parseFloat(mainBal);

    // Validate the donation input
    if (isNaN(noaInpNum) || noaInpNum < 0) {
      alert("Please enter a valid positive amount.");
    } else if (mainBalanceNumber < noaInpNum) {
      // Check if the main balance is sufficient for the donation
      alert("Insufficient balance.");
    } else {
      // Proceed with the donation
      const noaBalText = document.getElementById("noa-bal-btn");
      const noaBal = noaBalText.innerText;
      const noaBalNum = parseFloat(noaBal);

      // Calculate the new balance for the donation
      const noaNewBal = noaBalNum + noaInpNum;
      noaBalText.innerText = noaNewBal;

      // Deduct from the main balance
      const newMainBal = mainBalanceNumber - noaInpNum;
      mainBalanceText.innerText = newMainBal;
    }
  });


//     document.getElementById('noa-don-btn')
// .addEventListener('click', function(event) {
//     event.preventDefault();

//     // Get the input value and parse it
//     const noaInpBtn = document.getElementById('noa-inp-btn').value;
//     const noadInpNum = parseFloat(noaInpBtn);

//     // Validate the input to avoid NaN
//     if (isNaN(noadInpNum)) {
//         alert("Please enter a valid number for the donation amount.");
//         return; // Exit the function if input is invalid
//     }

//     // Get the current balance and parse it
//     const noaBalElement = document.getElementById('noa-bal-btn');
//     const noaBal = noaBalElement.innerText;
//     const noaBalNum = parseFloat(noaBal);

//     // Calculate the new balance
//     const noaNewBal = noaBalNum + noadInpNum;

//     // Update the balance display
//     noaBalElement.innerText = noaNewBal;
// });
