let callHistory = [];

// Heart Section
document.querySelectorAll(".heart-b").forEach((heart) => {
  heart.addEventListener("click", function (e) {
    e.preventDefault();

    const heartCount = document.getElementById("heart-count");
    let currentValue = parseInt(heartCount.innerText);
    heartCount.innerText = currentValue + 1;

    Swal.fire({
      icon: "success",
      title: "❤️ Added to Favorites!",
      text: "You liked this number!",
      timer: 1500,
      showConfirmButton: false,
    });
  });
});

// Copy Button
document.querySelectorAll(".copyBtn").forEach((copyBtn) => {
  copyBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const card = this.closest(
      ".card-emergency, .card-Police, .card-Fire-Service, .card-ambulance, .card-women-child, .card-Anti-Corruption, .card-Electricity, .card-Brac, .card-Bangladesh-Railway"
    );

    const numberToCopy =
      card?.querySelector("p.text-2xl")?.innerText.trim() || "";

    if (numberToCopy) {
      navigator.clipboard.writeText(numberToCopy);

      Swal.fire({
        icon: "success",
        title: "📋 Number Copied!",
        text: `Number ${numberToCopy} copied successfully.`,
        timer: 2000,
        showConfirmButton: false,
      });

      const copyCount = document.getElementById("copy-count");
      let currentValue = parseInt(copyCount.innerText);
      copyCount.innerText = currentValue + 1;
    } else {
      Swal.fire({
        icon: "error",
        title: "❌ Copy Failed",
        text: "Number not found.",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });
});

// Call Button
document.querySelectorAll(".callBtn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const coinCount = document.getElementById("coin-count");
    let currentCoin = parseInt(coinCount.innerText);

    if (currentCoin < 20) {
      Swal.fire({
        icon: "error",
        title: "⚠️ Not Enough Coins",
        text: "You need at least 20 coins to make a call.",
        confirmButtonText: "OK",
      });
      return;
    }

    const card = this.closest(
      ".card-emergency, .card-Police, .card-Fire-Service, .card-ambulance, .card-women-child, .card-Anti-Corruption, .card-Electricity, .card-Brac, .card-Bangladesh-Railway"
    );
    if (!card) return;

    const title = card.querySelector("h1.font-bold")?.innerText.trim() || "";
    const number = card.querySelector("p.text-2xl")?.innerText.trim() || "";

    Swal.fire({
      icon: "info",
      title: `📞 Calling ${title}`,
      text: `Dialing ${number}...`,
      timer: 2000,
      showConfirmButton: false,
    });

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

// History Section
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

// Clear Button
document.getElementById("clear-history").addEventListener("click", () => {
  const historyContainer = document.getElementById("call-history");
  historyContainer.innerHTML = "";
  callHistory = [];

  Swal.fire({
    icon: "warning",
    title: "🧹 History Cleared!",
    text: "Your call history has been deleted.",
    timer: 1500,
    showConfirmButton: false,
  });
});
