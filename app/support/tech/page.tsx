"use client";


import { useState } from "react";

export default function TechSupport() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    zip: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Send Email via mailto:
  const handleSendEmail = () => {
    const { firstName, lastName, city, state, zip, message } = formData;
    const subject = `Tech Support Request from ${firstName} ${lastName}`;
    const body = `
      Name: ${firstName} ${lastName}
      City: ${city}, State: ${state}, ZIP: ${zip}
      Message: ${message}
    `;

    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="sm:px-0 px-10 pt-16 flex flex-col justify-center items-center min-h-screen">
      <h1 className="font-custom text-primary sm:text-5xl text-xl font-extrabold py-10">
        GET TECH SUPPORT
      </h1>

      <form className="pb-10 w-full max-w-lg" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-xs font-bold mb-2">First Name</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700 text-xs font-bold mb-2">Last Name</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white"
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-xs font-bold mb-2">City</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white"
              id="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-xs font-bold mb-2">State</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white"
              id="state"
              type="text"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-xs font-bold mb-2">Zip</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white"
              id="zip"
              type="text"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block text-gray-700 text-xs font-bold mb-2">Message</label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleSendEmail}
          className="w-full rounded-md bg-primary py-2 px-4 text-center text-white font-semibold transition-all shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}