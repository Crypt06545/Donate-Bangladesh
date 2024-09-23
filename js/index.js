/// Selectors
const dNoakhali = document.getElementById("noakhali-dontate-btn");
const noakhaliInput = document.getElementById("noakhali-donation-input");
const accountBalanceElement = document.getElementById("account-banalce");
const noakhaliAmountElement = document.getElementById("noakhali-amount");

const dFeni = document.getElementById("feni-dontate-btn");
const feniInput = document.getElementById("feni-donation-input");
const feniAmountElement = document.getElementById("feni-amount");

const dQuota = document.getElementById("quota-dontate-btn");
const quotaInput = document.getElementById("quota-donation-input");
const quotaAmountElement = document.getElementById("quota-amount");

const donationHistorySection = document.getElementById("donation-history");
const historyBtn = document.getElementById("history-btn");

// Add click event listeners to the donation buttons
dNoakhali.addEventListener("click", function () {
  donation(
    noakhaliInput,
    accountBalanceElement,
    noakhaliAmountElement,
    "Flood at Noakhali"
  );
});

dFeni.addEventListener("click", function () {
  donation(
    feniInput,
    accountBalanceElement,
    feniAmountElement,
    "Flood Relief in Feni"
  );
});

dQuota.addEventListener("click", function () {
  donation(
    quotaInput,
    accountBalanceElement,
    quotaAmountElement,
    "Aid for Injured in the Quota Movement"
  );
});

// Donation function
function donation(inputElement, balanceElement, amountElement, location) {
  const donationAmount = parseFloat(inputElement.value);
  let balance = parseFloat(balanceElement.innerText);
  let currentAmount = parseFloat(amountElement.innerText);

  if (
    !isNaN(donationAmount) &&
    donationAmount > 0 &&
    donationAmount <= balance
  ) {
    // Update balance
    balance -= donationAmount;
    balanceElement.innerText = balance.toFixed(2);

    currentAmount += donationAmount;
    amountElement.innerText = currentAmount.toFixed(2);

    const modal = document.getElementById("my_modal_5");
    modal.showModal();

    // Clear the input field
    inputElement.value = "";

    // Add the donation to history
    donationHistory(donationAmount, location);
  } else {
    alert(
      "Please enter a valid donation amount or check your account balance."
    );
  }
}

// Toggle history section visibility
historyBtn.addEventListener("click", function () {
  donationHistorySection.classList.remove("hidden");
});

// Add donation history entry
function donationHistory(amount, location) {
  const currentDate = new Date();

  const historyEntry = document.createElement("div");
  historyEntry.classList.add("border-2", "p-6", "rounded-md", "mb-4");

  const donationTitle = document.createElement("h3");
  donationTitle.classList.add("font-bold", "text-xl", "text-gray-600", "mb-4");
  donationTitle.innerText = `${amount} Taka is Donated for ${location}, Bangladesh`;

  const donationDate = document.createElement("p");
  donationDate.classList.add("font-light", "text-sm", "text-gray-400");
  donationDate.innerText = `Date: ${currentDate.toString()}`;

  historyEntry.appendChild(donationTitle);
  historyEntry.appendChild(donationDate);

  donationHistorySection.appendChild(historyEntry);
}
