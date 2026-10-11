function calc() {
    loanAmountEl = document.getElementById("loan-amount").value;

    interestRateEl = document.getElementById("interest-rate").value;

    monthstoPayEl = document.getElementById("months-to-pay").value;

    payment = ( (loanAmountEl * interestRateEl * 0.01) / monthstoPayEl).toFixed(2);

    document.querySelector(".payment").innerHTML = `payment: ${payment}`;
}