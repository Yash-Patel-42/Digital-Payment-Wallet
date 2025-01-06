import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Transaction.css";

export default function Transaction() {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [receiverUpi, setReceiverUpi] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserAndTransactions = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
          setUser(storedUser);
          fetchTransactions(storedUser.upi_id);
          fetchBalance(storedUser.upi_id);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserAndTransactions();
  }, []);

  const fetchTransactions = async (upi_id) => {
    try {
      const response = await axios.get(
        `http://localhost:5173/api/transactions/${upi_id}`
      );
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const fetchBalance = async (upi_id) => {
    try {
      const response = await axios.get(
        `http://localhost:5173/api/user/${upi_id}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  const handleTransaction = async () => {
    if (!amount || !receiverUpi) {
      setMessage("Please provide both amount and receiver UPI ID.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5173/api/transaction", {
        sender_upi_id: user.upi_id,
        receiver_upi_id: receiverUpi,
        amount: parseFloat(amount),
      });
      setMessage(response.data.message);
      if (response.status === 200) {
        fetchTransactions(user.upi_id);
        fetchBalance(user.upi_id);
        setAmount("");
        setReceiverUpi("");
      }
    } catch (error) {
      console.error("Error making transaction:", error);
      setMessage("Transaction failed.");
    }
  };

  const chartData = transactions
    .map((tx) => ({
      timestamp: new Date(tx.timestamp).toLocaleDateString(),
      amount: tx.amount,
    }))
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  return (
    <div className="transaction-container">
      <div className="card user-info">
        {user && (
          <>
            <h3>User Information</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>UPI ID:</strong> {user.upi_id}</p>
            <p><strong>Balance:</strong> ₹{user.balance}</p>
          </>
        )}
      </div>

      <div className="card transaction-form">
        <h3>Initiate Payment</h3>
        <div className="form-group">
          <label>Receiver UPI ID:</label>
          <input
            type="text"
            placeholder="Enter receiver's UPI ID"
            value={receiverUpi}
            onChange={(e) => setReceiverUpi(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="send-button" onClick={handleTransaction}>
          🚀 Send Money
        </button>
        {message && <p className="feedback-message">{message}</p>}
      </div>

      <div className="card transaction-history">
        <h3>Transaction History</h3>
        <table>
          <thead>
            <tr>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.sender_upi_id}</td>
                <td>{transaction.receiver_upi_id}</td>
                <td>₹{transaction.amount}</td>
                <td>{new Date(transaction.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card transaction-graph">
        <h3>Transaction Graph</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
