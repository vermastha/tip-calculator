
function calculate() {
    let amount = document.getElementById("amount").value;
    let people = document.getElementById("people").value;
    let service = document.getElementById("services").value;
    
    if(people===''){
        people='1';
    }

    if (amount === '' || service === 'Select') {
        window.alert("Please enter first two values. If third value is empty, it will be considered 1.");
        return;
    }
    if(people === '1') {
        document.querySelector('#each').style.display = 'none';
    } else {
        document.querySelector('#each').style.display = 'block';
    }
    let total = (amount * service) / people;
    total = total.toFixed(2);

    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
}