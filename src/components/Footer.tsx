import React from 'react';
import Logo from './FooterLogo';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Your trusted partner in Indian healthcare, delivering compassionate, affordable, and reliable medical services to every home.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Find a Doctor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Patient Portal</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              <p>HealthCare Hub, 2nd Floor</p>
              <p>Opp. City Hospital, MG Road</p>
              <p>Bengaluru, Karnataka - 560001</p>
              <p>+91 98765 43210</p>
              <p>support@healthcarehub.in</p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>© 2024 HealthCare Hub India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
