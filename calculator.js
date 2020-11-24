window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loan = {amount: 50000, years: 10, rate: 2.5};
  let givenPrincipal = document.getElementById("loan-amount");
  givenPrincipal.value = loan.amount;
  let givenTime = document.getElementById("loan-years");
  givenTime.value = loan.years;
  let givenInterest = document.getElementById("loan-rate");
  givenInterest.value = loan.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let UIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(UIValues));
}

// Given an object of loan (a loan has amount, years and rate),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(loan) {
  let interestMonth = (loan.rate / 100)/12;
  let payment = (loan.amount * interestMonth)/(1 - Math.pow((1 + interestMonth),-(Math.floor(loan.years * 12))));
  return payment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let showMonthly = document.getElementById("monthly-payment");
  showMonthly.innerText = `$ ${monthly}`;
}
