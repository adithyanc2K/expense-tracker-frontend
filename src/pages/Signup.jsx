import React, { useState } from 'react';
import { saveAuth } from '../utils/api';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [msg, setMsg] = useState('');
  const nav = useNavigate();

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return setMsg('Passwords do not match');
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password
        })
      });
      const data = await res.json();
      if (!res.ok) return setMsg(data.error || 'Register failed');
      saveAuth(data.token, data.user);
      nav('/login');
    } catch (err) {
      setMsg('Server error');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={submit} className="space-y-3">
        <input
          name="name"
          value={form.name}
          onChange={change}
          placeholder="Name"
          className="w-full border p-2 rounded"
          required
        />
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
        <input
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={change}
          placeholder="Confirm Password"
          className="w-full border p-2 rounded"
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Register</button>
        {msg && <p className="text-sm text-red-500">{msg}</p>}
      </form>

      <p className="text-sm text-gray-600 mt-4 text-center">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
