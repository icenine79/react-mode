import './ExpenseItem.css';

function ExpenseItem() {
const expenseDate = new Date(2021,2,28);
const expenseTitle = "Car Insurance";
const expenseAmount = 300;
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <h2 className="expense-item__description">Car Insurance</h2>
            <h2>{expenseAmount}</h2>
            <div className="expense-item__price">€{expenseAmount}</div>
        </div>);


}
export default ExpenseItem;