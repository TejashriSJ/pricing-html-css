const togglebtn = document.getElementById("toggle");

window.onload = function () {
  togglebtn.checked = false;
};

togglebtn.onclick = function () {
  let amount1 = document.getElementById("amount1");
  let amount2 = document.getElementById("amount2");
  let amount3 = document.getElementById("amount3");

  if (togglebtn.checked) {
    amount1.innerHTML = "&dollar;19.99";
    amount2.innerHTML = "&dollar;24.99";
    amount3.innerHTML = "&dollar;39.99";
  } else {
    amount1.innerHTML = "&dollar;199.99";
    amount2.innerHTML = "&dollar;249.99";
    amount3.innerHTML = "&dollar;399.99";
  }
};
