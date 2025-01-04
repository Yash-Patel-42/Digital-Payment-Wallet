import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user, transactions }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {user?.name || 'User'}!</h1>
        <p>Manage All Your Payments In One Place.</p>
      </div>

      <div className="card">
        <h2>User Details</h2>
        <p><strong>Name:</strong> {user?.name || 'N/A'}</p>
        <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
      </div>

      <div className="card">
        <h2>Transaction History</h2>
        {transactions && transactions.length > 0 ? (
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>${transaction.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-transactions">No Transactions found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
