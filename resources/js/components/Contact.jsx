import React from 'react';

const Contact = () => (
  <div className="container mx-auto p-4 md:p-8 lg:p-16">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Contact Us</h2>
    <p className="text-center mb-8 text-gray-600">
      We would love to hear from you! Please fill out the form below or contact us at support@pharmacyafajr.com
    </p>
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
      <form className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            placeholder="Your Message"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Our Office</h3>
        <p className="text-center md:text-left text-gray-600 mb-4">
          Pharmacy Afajr<br />
          123 Health Street<br />
          Wellness City, WC 45678
        </p>
        <div className="text-center md:text-left">
          <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
          <p className="text-gray-600"><strong>Email:</strong> support@pharmacyafajr.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
