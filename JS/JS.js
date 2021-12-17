
function calc() {
    const percentOffset = 100;
    var billAmount = document.getElementById("billAmount").value;
    var tipAmount = document.getElementById("tipAmount").value;
    var totalAmount = document.getElementById("ttlAmount").value;

    totalAmount = parseInt(billAmount) + (parseInt(billAmount) * (parseInt(tipAmount) / parseInt(percentOffset)));

    var totalAmountField = document.getElementById("ttlAmount");
    totalAmountField.value = totalAmount.toFixed(2);

}

function clearFields(){
    var bill = document.getElementById("billAmount");
    var tip = document.getElementById("tipAmount");
    var amount = document.getElementById("ttlAmount");

    bill.value = 0.00;
    tip.value = 0;
    amount.value = 0.00;

}


