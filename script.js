let callHistory = [];

// Heart Section function start

document.querySelectorAll(".heart-b").forEach((heart) => {
  heart.addEventListener("click", function (e) {
    e.preventDefault();

    const heartCount = document.getElementById("heart-count");
    let currentValue = parseInt(heartCount.innerText);
    heartCount.innerText = currentValue + 1;
  });
});

// Copy Button  start ...........

document.querySelectorAll(".copyBtn").forEach((copyBtn) => {
  copyBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const card = this.closest(
      ".card-emergency, .card-Police, .card-Fire-Service, .card-ambulance, .card-women-child, .card-Anti-Corruption, .card-Electricity, .card-Brac, .card-Bangladesh-Railway"
    );
    const numberToCopy = card.querySelector("p.text-2xl").innerText.trim();

    navigator.clipboard.writeText(numberToCopy);
    alert(`Number ${numberToCopy} copied`);

    const copyCount = document.getElementById("copy-count");
    let currentValue = parseInt(copyCount.innerText);
    copyCount.innerText = currentValue + 1;
  });
});

// Call Button  start .......
document.querySelectorAll(".callBtn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const coinCount = document.getElementById("coin-count");
    let currentCoin = parseInt(coinCount.innerText);

    if (currentCoin < 20) {
      alert(
        "You don’t have enough coins. You need at least 20 coins to make a call"
      );
      return;
    }

    const card = this.closest(
      ".card-emergency, .card-Police, .card-Fire-Service, .card-ambulance, .card-women-child, .card-Anti-Corruption, .card-Electricity, .card-Brac, .card-Bangladesh-Railway"
    );
    if (!card) return;

    const title = card.querySelector("h1.font-bold")?.innerText.trim() || "";
    const number = card.querySelector("p.text-2xl")?.innerText.trim() || "";

    alert(`Calling ${title} ${number}`);
    coinCount.innerText = currentCoin - 20;

    const historyItem = {
      name: title,
      number: number,
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(historyItem);
    updateCallHistory(historyItem);
  });
});

//  history section start
function updateCallHistory(history) {
  const historyContainer = document.getElementById("call-history");

  const div = document.createElement("div");
  div.classList.add(
    "save",
    "history",
    "mt-[16px]",
    "flex",
    "justify-between",
    "items-center"
  );

  div.innerHTML = `
    <div class="w-full">
      <div class="flex items-center justify-between p-4 mb-1 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition duration-300">
        <div>
          <h1 class="font-semibold text-gray-800">${history.name}</h1>
          <p class="text-gray-600 text-sm">${history.number}</p>
        </div>
        <div>
          <h1 class="text-gray-500 text-sm">${history.date}</h1>
        </div>
      </div>
    </div>
  `;

  historyContainer.prepend(div);
}

// Clear button
document.getElementById("clear-history").addEventListener("click", () => {
  const historyContainer = document.getElementById("call-history");
  historyContainer.innerHTML = "";
  callHistory = [];
});
