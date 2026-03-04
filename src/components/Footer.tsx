import React from 'react';
import { Package, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Package className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Aai Bhavani <span className="text-orange-500">Enterprises</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Leading manufacturer of high-quality corrugated boxes and custom packaging solutions in Bhusawal MIDC. We combine quality, durability, and affordability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-orange-500 transition-colors">Our Services</a></li>
              <li><a href="#products" className="text-slate-400 hover:text-orange-500 transition-colors">Product Range</a></li>
              <li><a href="#order" className="text-slate-400 hover:text-orange-500 transition-colors">Order Online</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Luxury Box Design</a></li>
              <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">E-commerce Packaging</a></li>
              <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Retail Box Design</a></li>
              <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Structural Engineering</a></li>
              <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Custom Printing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-400">Bhusawal MIDC, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-400">info@aaibhavani.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Aai Bhavani Enterprises. All rights reserved. Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
}
