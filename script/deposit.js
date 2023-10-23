document.getElementById('deposit').addEventListener('click', function () {
    const depositField = document.getElementById("deposit-field");
    const depositFieldString = depositField.value;
    const depositAmount = parseFloat(depositFieldString);
    depositField.value = '';

    const depositElement = document.getElementById('deposit-total');
    const depositElementString = depositElement.innerText;
    const depositTotal = parseFloat(depositElementString);

    const newDeposit = depositAmount + depositTotal;
    depositElement.innerText = newDeposit;

    const balanceElement = document.getElementById('balance-total');
    const balanceElementString = balanceElement.innerText;
    const balanceTotal = parseFloat(balanceElementString);

    const newBalance = balanceTotal + depositAmount;
    balanceElement.innerText = newBalance;
});

document.getElementById('withdrow').addEventListener('click', function () {
    const withdrowField = document.getElementById('withdrow-field')
    const withdrowFieldString = withdrowField.value;
    const withdrowAmount = parseFloat(withdrowFieldString);
    withdrowField.value = '';

    const withdrowElement = document.getElementById('withdrow-total');
    const withdrowElementString = withdrowElement.innerText;
    const withdrowTotal = parseFloat(withdrowElementString)

    const newWithdrow = withdrowAmount + withdrowTotal;
    withdrowElement.innerText = newWithdrow;

    const balanceElement = document.getElementById('balance-total');
    const balanceElementString = balanceElement.innerText;
    const balanceTotal = parseFloat(balanceElementString);

    const newBalance = balanceTotal - withdrowAmount;
    balanceElement.innerText = newBalance

})