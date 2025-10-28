import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://your-backend-url.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Server error.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Form - Left Side */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border p-2 rounded"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full border p-2 rounded h-24"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
          >
            Submit
          </button>
        </form>

        {status && <p className="text-center text-sm mt-4">{status}</p>}
      </div>

      {/* Contact Details - Right Side */}
      <div className="flex flex-col justify-center bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 text-center md:text-left">
          Get in Touch
        </h3>
        <p className="text-gray-700 mb-3">
          We’d love to hear from you! Whether you have a question, suggestion, or need help, feel free to reach out.
        </p>
        <ul className="space-y-2 text-gray-800">
          <li>
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:support@expensetracker.com" className="text-blue-600">
              support@expensetracker.com
            </a>
          </li>
          <li>📞 <strong>Phone:</strong> +91 98765 43210</li>
          <li>🏠 <strong>Address:</strong> 123 Green Street, Kochi, Kerala, India</li>
          <li>🕒 <strong>Working Hours:</strong> Mon – Fri, 9 AM – 6 PM</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
