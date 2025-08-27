let callHistory = [];

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

  const history = {
    name: "National Emergency Number",
    number: "999",
    date: new Date().toLocaleTimeString,
  };

  callHistory.push(history);

  console.log(callHistory);
});

// copy section

document
  .getElementById("emergency-copy")
  .addEventListener("click", function (e) {
    e.preventDefault();
    navigator.clipboard.writeText("999");
    alert("Number copied");
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

  const history = {
    name: "Police Helpline",
    number: "999",
    date: new Date().toLocaleTimeString,
  };

  callHistory.push(history);

  console.log(callHistory);
});

// copy section

document
  .getElementById("police-number")
  .addEventListener("click", function (e) {
    e.preventDefault();
    navigator.clipboard.writeText("999");
    alert("Number copied");
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

  const history = {
    name: "Fire Service Number",
    number: "999",
    date: new Date().toLocaleTimeString,
  };

  callHistory.push(history);

  console.log(callHistory);
});

// copy section

document.getElementById("fire-number").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText("999");
  alert("Number copied");
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

  const history = {
    name: "Ambulance  Service Helpline",
    number: "1994-999999",
    date: new Date().toLocaleTimeString,
  };

  callHistory.push(history);

  console.log(callHistory);
});

// copy section

document
  .getElementById("ambulance-number")
  .addEventListener("click", function (e) {
    e.preventDefault();
    navigator.clipboard.writeText("1994-999999");
    alert("Number copied");
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

  const history = {
    name: "Women & Child Helpline",
    number: "109",
    date: new Date().toLocaleTimeString,
  };

  callHistory.push(history);

  console.log(callHistory);
});

// copy section

document
  .getElementById("women-help-number")
  .addEventListener("click", function (e) {
    e.preventDefault();
    navigator.clipboard.writeText("109");
    alert("Number copied");
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

    const history = {
      name: "Anti-Corruption Helpline",
      number: "106",
      date: new Date().toLocaleTimeString,
    };

    callHistory.push(history);
    console.log(callHistory);
  });

// copy section

document
  .getElementById("Anti-Corruption-number")
  .addEventListener("click", function (e) {
    e.preventDefault();
    navigator.clipboard.writeText("106");
    alert("Number copied");
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

  const history = {
    name: "Electricity Outage Service",
    number: "16216",
    date: new Date().toLocaleTimeString,
  };

  callHistory.push(history);

  console.log(callHistory);
});

document
  .getElementById("electricity-number")
  .addEventListener("click", function (e) {
    e.preventDefault();
    navigator.clipboard.writeText("16216");
    alert("Number copied");
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

    const history = {
      name: "Brac Helpline Service",
      number: "16445",
      date: new Date().toLocaleTimeString,
    };

    callHistory.push(history);

    console.log(callHistory);
  });

document.getElementById("brac-number").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText("16445");
  alert("Number copied");
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

  const history = {
    name: "Bangladesh Railway Service",
    number: "163",
    date: new Date().toLocaleTimeString,
  };

  callHistory.push(history);

  console.log(callHistory);
});

document
  .getElementById("railway-number")
  .addEventListener("click", function (e) {
    e.preventDefault();
    navigator.clipboard.writeText("163");
    alert("Number copied");
  });
