import React from 'react';

const About = () => (
  <div className="container mx-auto p-4 md:p-8 lg:p-16">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">About Us</h2>
    <p className="text-center mb-8 text-gray-600">
      Welcome to Pharmacy Afajr! We are dedicated to providing the best health and wellness products to our community. Learn more about our journey and mission below.
    </p>
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img src="/images/about-us.jpg" alt="About Us" className="w-full rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
        <p className="text-gray-600 mb-4">
          Our mission is to enhance the health and well-being of our customers by providing top-quality products and services. We strive to be a trusted partner in your health journey.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h3>
        <p className="text-gray-600 mb-4">
          Pharmacy Afajr was founded with a passion for health and wellness. Over the years, we have grown to become a reliable source for healthcare products, always putting our customers first.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h3>
        <p className="text-gray-600 mb-4">
          We believe in integrity, customer satisfaction, and continuous improvement. Our team works tirelessly to ensure that you receive the best care and support.
        </p>
      </div>
    </div>
  </div>
);

export default About;
