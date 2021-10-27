import './ExpenseItem.css';

function ExpenseItem() {

    return (
        <div className="expense-item">
            <div>Date</div>
            <h2 className="expense-item__description">Car Insurance</h2>
            <div className="expense-item__price">€300</div>
        </div>);


}
export default ExpenseItem;