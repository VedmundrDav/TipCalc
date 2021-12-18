
function calc() {
    const percentOffset = 100;
    var billAmount = document.getElementById("billAmount").value;
    var tipAmount = document.getElementById("tipAmount").value;
    var tip = document.getElementById("tipAmountField").value;
    var totalAmount = document.getElementById("ttlAmount").value;

    if (billAmount <= 0) {
        alert("Enter a valid value for the bill.");
    } else if(tipAmount < 0){
        alert("Enter a valid value for the tip.");
    }else{
        if (tipAmount > 20) {
            confirm("Bravo, a generous tip!");
        } else if (tipAmount < 15) {
            confirm("Please consider the waiter/server. This tip is rather low.");
        }

        //MATH
        totalAmount = parseFloat(billAmount) + (parseFloat(billAmount) * (parseFloat(tipAmount) / parseFloat(percentOffset)));
        tip = parseFloat(billAmount) * (parseFloat(tipAmount) / parseFloat(percentOffset));
        //END MATH

        //SET FIELDS
        var totalAmountField = document.getElementById("ttlAmount");
        totalAmountField.value = totalAmount.toFixed(2);

        var tipField = document.getElementById("tipAmountField");
        tipField.value = tip.toFixed(2);
        //END SET FIELDS
    }
}

function clearFields(){
    var bill = document.getElementById("billAmount");
    var tipTtl = document.getElementById("tipAmount");
    var tip = document.getElementById("tipAmountField");
    var amount = document.getElementById("ttlAmount");

    bill.value = 0.00;
    tipTtl.value = 0;
    tip.value = 0;
    amount.value = 0.00;

}


