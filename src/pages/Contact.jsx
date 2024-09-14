import React, { useState } from 'react';
import { LuSend } from "react-icons/lu";

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(null);

    try {
      const response = await fetch("https://getform.io/f/byvpzyna", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSent(true);
        setData({ name: '', email: '', subject: '', message: '' }); // Clear form
        setTimeout(() => setSent(false), 3000); // Hide success message after 3 seconds
      } else {
        setError(result.message || 'Submission failed. Please try again.');
        setTimeout(() => setError(null), 3000); 
      }
    } catch (error) {
      setError('Error submitting form. Please try again.');
      setTimeout(() => setError(null), 3000); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-full max-w-md bg-white rounded-lg border border-[#373737] p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={data.email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-500"
            />
          </div>

          {/* Subject Input */}
          <div>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              value={data.subject}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <textarea
              name="message"
              placeholder="message"
              value={data.message}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-500"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'} <LuSend />
            </button>
          </div>

          {/* Status Messages */}
          {sent && (
            <div className="text-green-500 text-center">
              <p>Message sent successfully!</p>
            </div>
          )}

          {error && (
            <div className="text-red-500 text-center">
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
