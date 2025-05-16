import  { useState } from 'react';
function Expense() {
  const [budget, setBudget] = useState('');
  const [expense, setExpense] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    setExpenses([...expenses,Number(expense)]);
    setExpense('');
  };

  let totalSpent =0;
  for (let i of expenses) {
    totalSpent += i;
  }
    const savings = budget - totalSpent;

  return (
    <div className='main'>
    <h2>Simple Budget Tracker</h2>
    <div className='myclass'>
        <div className='div1'>
            <h4>Add Budget</h4>
      <input type="number"placeholder="Enter your budget"value={budget}onChange={(e) => setBudget(Number(e.target.value))}/> <br /> <br />
      <button>Submit</button>
      </div>
      <div className="add">
      <form onSubmit={handleAddExpense}>
        {/* <input type="text" placeholder='For' value={expense}onChange={(e)=>setExpenses(e.target.value)} /> */}
        <input type="number"placeholder="Enter expense"value={expense}onChange={(e) => setExpense(e.target.value)}/>
        <button type="submit">Add Expense</button>
      </form>
      </div>
      <div className='ex'>
      <h3>Monthly Expenses spent</h3>
      <ul>
        {expenses.map((amt) => (
          <li>{amt}</li>
        ))}
      </ul>
      </div>
      <div className='spa'>
      <h4>Total Amount Spent: {totalSpent}</h4>
      <h4>Amount Left: {savings}</h4>
      </div>
    </div>
    </div>
  );
}
export default Expense
