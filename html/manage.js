let total = 0;
function updateTotal() {
    total = 0;

    
    for (let i = 1; i <= 7; i++) {
        const quantity = parseInt(document.getElementById(`item${i}`).innerText);
        const price = parseInt(document.getElementById(`price${i}`).innerText);
        total += quantity * price;
    }

    document.getElementById('total').innerText = total.toFixed(2); 
}

for (let i = 1; i <= 7; i++) {
    document.getElementById(`item${i}`).innerText = 0;
}

document.getElementById('price1').innerText = 10;
document.getElementById('price2').innerText = 15;
document.getElementById('price3').innerText = 20;
document.getElementById('price4').innerText = 25;
document.getElementById('price5').innerText = 30;
document.getElementById('price6').innerText = 35;
document.getElementById('price7').innerText = 40;


function adjustQuantity(itemId, amount) {
    const quantityElement = document.getElementById(itemId);
    let quantity = parseInt(quantityElement.innerText);

    quantity = Math.max(0, quantity + amount);

    
    quantityElement.innerText = quantity;

 
    updateTotal();
}


updateTotal();
