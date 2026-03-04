import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    name: "Rajesh Kumar",
    company: "Agro Exports",
    text: "The quality of corrugated boxes from Aai Bhavani Enterprises is exceptional. We've been using their 7-ply boxes for international shipping, and they are incredibly strong.",
    rating: 5
  },
  {
    name: "Sneha Patil",
    company: "Delight Foods",
    text: "Fast delivery and great service! We needed custom printed sweet boxes urgently, and they delivered high-quality results within our tight deadline.",
    rating: 5
  },
  {
    name: "Amit Sharma",
    company: "E-com Solutions",
    text: "Their e-commerce packaging design is top-notch. The structural integrity of the boxes has significantly reduced our transit damage rates.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    company: "Industrial Parts Co.",
    text: "Reliable partner for all our industrial packaging needs. Their pricing is very competitive, and the quality is consistent across every batch.",
    rating: 4
  }
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % reviews.length);
  const prev = () => setCurrent((current - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl font-bold mt-4">What Our Customers Say</h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <Quote className="absolute -top-10 -left-10 w-20 h-20 text-orange-500/20" />
                <div className="flex gap-1 mb-6">
                  {[...Array(reviews[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic">
                  "{reviews[current].text}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-white">{reviews[current].name}</h4>
                  <p className="text-slate-400">{reviews[current].company}</p>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden aspect-video">
                  <img
                    src={`https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800&sig=${current}`}
                    alt="Manufacturing Facility"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
