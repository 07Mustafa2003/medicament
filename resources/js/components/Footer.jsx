import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-wrap justify-between items-start">
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Pharmacy App. All rights reserved.</p>
                </div>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
                    <ul className="text-sm">
                        <li className="mb-2"><Link to="/" className="text-gray-300 hover:text-gray-200">Contact Us</Link></li>
                        <li className="mb-2"><Link to="/" className="text-gray-300 hover:text-gray-200">My Account</Link></li>
                        <li className="mb-2"><Link to="/" className="text-gray-300 hover:text-gray-200">Terms & Conditions</Link></li>
                        <li className="mb-2"><Link to="/" className="text-gray-300 hover:text-gray-200">Media Enquiries</Link></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-semibold mb-2">Shop with Us</h3>
                    <ul className="text-sm">
                        <li className="mb-2"><Link to="/" className="text-gray-300 hover:text-gray-200">Online Doctor</Link></li>
                        <li className="mb-2"><Link to="/" className="text-gray-300 hover:text-gray-200">About Us</Link></li>
                        <li className="mb-2"><Link to="/" className="text-gray-300 hover:text-gray-200">Contact Us</Link></li>
                        {/* Add more links here */}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
