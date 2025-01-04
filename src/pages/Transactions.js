import React, { useState } from 'react';
import { addFunds, transfer } from '../services/api';
import api from '../services/api';
import './Transactions.css'; // Make sure to import the CSS file

const Transactions = ({ token }) => {
  const [amount, setAmount] = useState('');
  const [receiverEmail, setReceiverEmail] = useState('');

  const handleAddFunds = async () => {
    try {
      await addFunds({ amount: parseFloat(amount) }, token);
      alert('Funds added successfully!');
    } catch (error) {
      console.error('Failed to add funds:', error);
      alert('Failed to add funds');
    }
  };

  const handleTransfer = async () => {
    try {
      await transfer({ receiverEmail, amount: parseFloat(amount) }, token);
      alert('Transfer successful!');
    } catch (error) {
      console.error('Transfer failed:', error);
      alert('Transfer failed');
    }
  };

  return (
    <div className="transactions-container">
      <h2 className="transactions-title">Transactions</h2>
      <div className="transactions-input-container">
        <input
          className="transactions-input"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="transactions-button" onClick={handleAddFunds}>Add Funds</button>
      </div>
      <div className="transactions-input-container">
        <input
          className="transactions-input"
          type="email"
          placeholder="Receiver Email"
          value={receiverEmail}
          onChange={(e) => setReceiverEmail(e.target.value)}
        />
        <button className="transactions-button" onClick={handleTransfer}>Transfer</button>
      </div>
    </div>
  );
};

export default Transactions;
