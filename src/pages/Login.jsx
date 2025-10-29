import React, { useState } from 'react';
import { saveAuth } from '../utils/api';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const nav = useNavigate();

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://expense-tracker-backend-d09y.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) return setMsg(data.error || 'Login failed');
      saveAuth(data.token, data.user);
      nav('/expensetrack');
    } catch (err) { setMsg('Server error'); }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-3">
        <input
          name="email"
          value={form.email}
          onChange={change}
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={change}
          placeholder="Password"
          className="w-full border p-2 rounded"
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
        {msg && <p className="text-sm text-red-500">{msg}</p>}
      </form>

      <p className="text-sm text-gray-600 mt-4 text-center">
        Don’t have an account?{' '}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}
