/// Selectors
const dNoakhali = document.getElementById("noakhali-dontate-btn");
const noakhaliInput = document.getElementById("noakhali-donation-input");
const accountBalanceEl = document.getElementById("account-banalce");
const noakhaliAmountEl = document.getElementById("noakhali-amount");

const dFeni = document.getElementById("feni-dontate-btn");
const feniInput = document.getElementById("feni-donation-input");
const feniAmountEl = document.getElementById("feni-amount");

const dQuota = document.getElementById("quota-dontate-btn");
const quotaInput = document.getElementById("quota-donation-input");
const quotaAmountEl = document.getElementById("quota-amount");

const donationHistorySection = document.getElementById("donation-history");
const historyBtn = document.getElementById("history-btn");

const donateBtnTab = document.getElementById("donate-btn-tab");

// Add click event listeners to the donation buttons
dNoakhali.addEventListener("click", function () {
  donation(
    noakhaliInput,
    accountBalanceEl,
    noakhaliAmountEl,
    "Flood at Noakhali"
  );
});

dFeni.addEventListener("click", function () {
  donation(
    feniInput,
    accountBalanceEl,
    feniAmountEl,
    "Flood Relief in Feni"
  );
});

dQuota.addEventListener("click", function () {
  donation(
    quotaInput,
    accountBalanceEl,
    quotaAmountEl,
    "Aid for Injured in the Quota Movement"
  );
});

// Donation function
function donation(inputEl, balanceEl, amountEl, location) {
  const donationAmount = parseFloat(inputEl.value);
  let balance = parseFloat(balanceEl.innerText);
  let currentAmount = parseFloat(amountEl.innerText);

  if (
    !isNaN(donationAmount) &&
    donationAmount > 0 &&
    donationAmount <= balance
  ) {
    // Update balance
    balance -= donationAmount;
    balanceEl.innerText = balance.toFixed(2);

    currentAmount += donationAmount;
    amountEl.innerText = currentAmount.toFixed(2);

    const modal = document.getElementById("my_modal_5");
    modal.showModal();

    // Clear the input field
    inputEl.value = "";

    // Add the donation to history
    donationHistory(donationAmount, location);
  } else {
    alert(
      "Please enter a valid donation amount or check your account balance."
    );
  }
}

// Toggle history section
historyBtn.addEventListener("click", function () {
  donationHistorySection.classList.remove("hidden");
  const donationListadd = document.getElementById("donation-li");
  donationListadd.classList.add("hidden");

  historyBtn.classList.add("bg-[#B4F461]", "text-black");
  historyBtn.classList.remove("border-2", "text-gray-500");

  donateBtnTab.classList.remove("bg-[#B4F461]", "text-black");
  donateBtnTab.classList.add("border-2", "text-gray-500");
});

// Toggle donation section
donateBtnTab.addEventListener("click", function () {
  donationHistorySection.classList.add("hidden");
  const donationListadd = document.getElementById("donation-li");
  donationListadd.classList.remove("hidden");

  donateBtnTab.classList.add("bg-[#B4F461]", "text-black");
  donateBtnTab.classList.remove("border-2", "text-gray-500");

  historyBtn.classList.remove("bg-[#B4F461]", "text-black");
  historyBtn.classList.add("border-2", "text-gray-500");
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
