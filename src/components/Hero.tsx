import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PackageCheck, ShieldCheck, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Corrugated Box Manufacturing"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 rounded-full border border-orange-500/20">
              Bhusawal MIDC's Leading Manufacturer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Aai Bhavani <span className="text-orange-500">Enterprises</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Reliable Corrugated Box Manufacturing & Custom Packaging Solutions. 
              We craft high-quality, durable boxes tailored to your business needs, 
              ensuring your products reach their destination safely.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#order"
                className="group bg-orange-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20"
              >
                Order Boxes Online
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                Get Quote
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20"
          >
            <div className="flex items-center gap-4">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <PackageCheck className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold">Custom Sizes</h3>
                <p className="text-slate-400 text-sm">Tailored to fit</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <ShieldCheck className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold">High Durability</h3>
                <p className="text-slate-400 text-sm">Premium materials</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <Truck className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold">Fast Delivery</h3>
                <p className="text-slate-400 text-sm">Reliable logistics</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-2/3 hidden lg:block">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-full h-full"
        >
          <img
            src=""
            alt="Packaging Box"
            className="absolute top-1/4 right-10 w-80 rounded-2xl shadow-2xl border-4 border-white/10 rotate-6"
            referrerPolicy="no-referrer"
          />
          <img
            src=""
            alt="Corrugated Material"
            className="absolute bottom-1/4 right-40 w-64 rounded-2xl shadow-2xl border-4 border-white/10 -rotate-12"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
