document.getElementById('confirm').addEventListener('click', function() {
    let amount = parseFloat(document.getElementById('amount').value);
    let balanceElement = document.getElementById('balance');
    let currentBalance = parseFloat(balanceElement.innerText.replace(/[^0-9.-]+/g,""));

    let newBalance = currentBalance + amount;
    balanceElement.innerText = newBalance.toFixed(2);
});

document.getElementById('confirm').addEventListener('click', function() {
    return alert("You have successfully Top-ed Up your wallet.")
});

document.getElementById("amount").addEventListener("input", function() {
    let amount = parseFloat(document.getElementById("amount").value);
    let rate = 626.12;
    let finalAmount = (amount * rate).toFixed(2);
    document.getElementById("equivalent-amount").textContent = finalAmount;
});