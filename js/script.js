document.getElementById('add-button').addEventListener('click', addExpense);

let totalExpenses = 0;

function addExpense() {
    const expenseInput = document.getElementById('expense');
    const amountInput = document.getElementById('amount');
    const expenseDescription = expenseInput.value.trim();
    const expenseAmount = parseFloat(amountInput.value);

    if (expenseDescription && !isNaN(expenseAmount) && expenseAmount > 0) {
        const expensesList = document.getElementById('expenses');
        const listItem = document.createElement('li');
        listItem.textContent = `${expenseDescription}: $${expenseAmount.toFixed(2)}`;
        expensesList.appendChild(listItem);

        totalExpenses += expenseAmount;
        document.getElementById('total-expenses').textContent = `$${totalExpenses.toFixed(2)}`;

        expenseInput.value = '';
        amountInput.value = '';
    } else {
        alert('Please enter a valid expense description and amount.');
    }
}
