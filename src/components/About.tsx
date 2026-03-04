import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    "High Quality Materials",
    "Custom Box Manufacturing",
    "Reliable Delivery",
    "Affordable Pricing",
    "Scalable Solutions",
    "Eco-friendly Options"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">About Our Company</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8 leading-tight">
              Trusted Manufacturer of High-Quality Packaging Solutions
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Aai Bhavani Enterprises is a trusted manufacturer of high-quality corrugated boxes and packaging solutions located in <strong>Bhusawal MIDC, Maharashtra</strong>.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We specialize in providing durable, customized, and scalable packaging solutions for a wide range of industries, including retail, food, and e-commerce. Our commitment to quality and customer satisfaction has made us a preferred partner for businesses across the region.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=1000"
                alt="Factory Production"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl hidden md:block">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-4xl font-bold text-orange-500">10+</span>
                  <p className="text-slate-400 text-sm">Years of Experience</p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <span className="text-4xl font-bold text-orange-500">50+</span>
                  <p className="text-slate-400 text-sm">Happy Clients</p>
                </div>
              </div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
