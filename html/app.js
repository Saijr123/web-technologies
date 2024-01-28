const billForm = document.getElementById('billForm');
const billList = document.getElementById('billList');

function addBill() {
    const billName = document.getElementById('billName').value;
    const amount = document.getElementById('amount').value;

    if (billName && amount) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${billName}: $${amount}</span>
            <button onclick="removeBill(this)">Delete</button>
        `;
        billList.appendChild(listItem);

        // Clear form inputs
        billForm.reset();
    } else {
        alert('Please fill out all fields');
    }
}

function removeBill(button) {
    const listItem = button.parentElement;
    billList.removeChild(listItem);
}
