import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ExpenseTrack = () => {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ title: "", amount: "", category: "", date: "" });
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", amount: "", category: "", date: "" });
  const navigate = useNavigate();

  // Get token from localStorage
  const token = localStorage.getItem("token");

  // Redirect if not logged in
  useEffect(() => {
    if (!token) navigate("/");
    else fetchExpenses();
  }, []);

  // Fetch expenses for logged-in user
  const fetchExpenses = async () => {
    const res = await fetch("https://expense-tracker-backend-d09y.onrender.com/api/expenses", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setExpenses(data);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://expense-tracker-backend-d09y.onrender.com/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });
    setForm({ title: "", amount: "", category: "", date: "" });
    fetchExpenses();
  };

  const handleDelete = async (id) => {
    await fetch(`https://expense-tracker-backend-d09y.onrender.com/api/expenses/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchExpenses();
  };

  const handleUpdate = async (id, updatedData) => {
    await fetch(`https://expense-tracker-backend-d09y.onrender.com/api/expenses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });
    fetchExpenses();
  };

  const handleEditClick = (exp) => {
    setEditId(exp._id);
    setEditForm({
      title: exp.title,
      amount: exp.amount,
      category: exp.category,
      date: exp.date.slice(0, 10),
    });
  };

  const handleEditChange = (e) =>
    setEditForm({ ...editForm, [e.target.name]: e.target.value });

  const handleEditSave = async (id) => {
    await handleUpdate(id, editForm);
    setEditId(null);
  };

  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-700">💰 Expense Tracker</h2>
        </div>

        {/* Add Form */}
        <form onSubmit={handleSubmit} className="space-y-3 mb-6">
          <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400" />
          <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} required className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400" />
          <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400" />
          <input name="date" type="date" value={form.date} onChange={handleChange} required className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Add Expense</button>
        </form>

        {/* Total */}
        <div className="bg-blue-50 p-3 rounded-lg text-center font-semibold text-blue-700 mb-4">
          Total Expenses: ₹{total}
        </div>

        {/* List */}
        <h3 className="text-lg font-semibold mb-2 text-gray-700">All Expenses</h3>
        <ul className="divide-y">
          {expenses.map((exp) => (
            <li key={exp._id} className="py-3">
              {editId === exp._id ? (
                // Edit mode
                <div className="space-y-2">
                  <input name="title" value={editForm.title} onChange={handleEditChange} className="w-full border p-1 rounded" />
                  <input name="amount" type="number" value={editForm.amount} onChange={handleEditChange} className="w-full border p-1 rounded" />
                  <input name="category" value={editForm.category} onChange={handleEditChange} className="w-full border p-1 rounded" />
                  <input name="date" type="date" value={editForm.date} onChange={handleEditChange} className="w-full border p-1 rounded" />
                  <div className="flex gap-2">
                    <button onClick={() => handleEditSave(exp._id)} className="flex-1 bg-green-600 text-white py-1 rounded hover:bg-green-700">Save</button>
                    <button onClick={() => setEditId(null)} className="flex-1 bg-gray-400 text-white py-1 rounded hover:bg-gray-500">Cancel</button>
                  </div>
                </div>
              ) : (
                // Normal view
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{exp.title}</p>
                    <p className="text-sm text-gray-500">₹{exp.amount} • {exp.category}</p>
                    <p className="text-xs text-gray-400">{new Date(exp.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <button onClick={() => handleEditClick(exp)} className="text-green-600 hover:text-green-700 mr-3">Edit</button>
                    <button onClick={() => handleDelete(exp._id)} className="text-red-600 hover:text-red-700">Delete</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {expenses.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No expenses added yet.</p>
        )}
      </div>
    </div>
  );
};

export default ExpenseTrack;
