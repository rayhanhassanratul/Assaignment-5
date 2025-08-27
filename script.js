document.querySelectorAll(".heart-b").forEach((heart) => {
  heart.addEventListener("click", function (e) {
    e.preventDefault();

    const heartCount = document.getElementById("heart-count");

    let currentValue = parseInt(heartCount.innerText);

    currentValue = currentValue + 1;
    heartCount.innerText = currentValue;
  });
});

// call section  national emergency  service section

document.getElementById("national").addEventListener("click", function (e) {
  e.preventDefault();
  const coinCount = document.getElementById("coin-count");
  let currentCoin = parseInt(coinCount.innerText);
  if (currentCoin >= 20) {
    alert("Calling National Emergency Service 999");

    currentCoin = currentCoin - 20;
    coinCount.innerText = currentCoin;
  } else {
    alert(
      "You don’t have enough coins. You need at least 20 coins to make a call"
    );
  }
});

// call section  police service section

document.getElementById("police").addEventListener("click", function (e) {
  e.preventDefault();
  const coinCount = document.getElementById("coin-count");
  let currentCoin = parseInt(coinCount.innerText);
  if (currentCoin >= 20) {
    alert("Calling Police 999");

    currentCoin = currentCoin - 20;
    coinCount.innerText = currentCoin;
  } else {
    alert(
      "You don’t have enough coins. You need at least 20 coins to make a call"
    );
  }
});

// call section  fire service section

document.getElementById("fire").addEventListener("click", function (e) {
  e.preventDefault();
  const coinCount = document.getElementById("coin-count");
  let currentCoin = parseInt(coinCount.innerText);
  if (currentCoin >= 20) {
    alert("Calling Fire Service 999");

    currentCoin = currentCoin - 20;
    coinCount.innerText = currentCoin;
  } else {
    alert(
      "You don’t have enough coins. You need at least 20 coins to make a call"
    );
  }
});

// call section  Ambulance service section

document.getElementById("Ambulance").addEventListener("click", function (e) {
  e.preventDefault();
  const coinCount = document.getElementById("coin-count");
  let currentCoin = parseInt(coinCount.innerText);
  if (currentCoin >= 20) {
    alert("Calling Ambulance  Service 1994-999999");

    currentCoin = currentCoin - 20;
    coinCount.innerText = currentCoin;
  } else {
    alert(
      "You don’t have enough coins. You need at least 20 coins to make a call"
    );
  }
});

// call section   Women & Child Helpline

document.getElementById("Women").addEventListener("click", function (e) {
  e.preventDefault();
  const coinCount = document.getElementById("coin-count");
  let currentCoin = parseInt(coinCount.innerText);
  if (currentCoin >= 20) {
    alert("Calling Women & Child Helpline 109 ");

    currentCoin = currentCoin - 20;
    coinCount.innerText = currentCoin;
  } else {
    alert(
      "You don’t have enough coins. You need at least 20 coins to make a call"
    );
  }
});

// call section   Anti-Corruption Helpline

document
  .getElementById("Anti-Corruption")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const coinCount = document.getElementById("coin-count");
    let currentCoin = parseInt(coinCount.innerText);
    if (currentCoin >= 20) {
      alert("Calling Anti-Corruption Helpline 106 ");

      currentCoin = currentCoin - 20;
      coinCount.innerText = currentCoin;
    } else {
      alert(
        "You don’t have enough coins. You need at least 20 coins to make a call"
      );
    }
  });

// call section   Electricity Outage Helpline

document.getElementById("Electricity").addEventListener("click", function (e) {
  e.preventDefault();
  const coinCount = document.getElementById("coin-count");
  let currentCoin = parseInt(coinCount.innerText);
  if (currentCoin >= 20) {
    alert("Calling Electricity Outage Service 16216 ");

    currentCoin = currentCoin - 20;
    coinCount.innerText = currentCoin;
  } else {
    alert(
      "You don’t have enough coins. You need at least 20 coins to make a call"
    );
  }
});

// call section   Brac Helpline Helpline

document
  .getElementById("Brac-Helpline")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const coinCount = document.getElementById("coin-count");
    let currentCoin = parseInt(coinCount.innerText);
    if (currentCoin >= 20) {
      alert("Calling Brac Helpline Service 16445 ");

      currentCoin = currentCoin - 20;
      coinCount.innerText = currentCoin;
    } else {
      alert(
        "You don’t have enough coins. You need at least 20 coins to make a call"
      );
    }
  });

// call section   railway  Helpline

document.getElementById("Railway").addEventListener("click", function (e) {
  e.preventDefault();
  const coinCount = document.getElementById("coin-count");
  let currentCoin = parseInt(coinCount.innerText);
  if (currentCoin >= 20) {
    alert("Calling Bangladesh Railway Service 163 ");

    currentCoin = currentCoin - 20;
    coinCount.innerText = currentCoin;
  } else {
    alert(
      "You don’t have enough coins. You need at least 20 coins to make a call"
    );
  }
});
