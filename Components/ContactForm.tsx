// ContactForm.tsx
import React, { useState } from 'react';

const ContactForm = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your message sending logic here
    alert(`Message sent by ${name} (${email}): ${message}`);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-[10000]">
      <div className="relative bg-white p-8 rounded-md shadow-md w-[90%] md:w-[50%] lg:w-[30%]">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Send Message</button>
            <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
