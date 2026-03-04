import React from 'react';
import { motion } from 'motion/react';

const clients = [
  { name: "Premium Banana", logo: "🍌" },
  { name: "Vaishnavi Ice Cream", logo: "🍦" },
  { name: "Kilto Liquids", logo: "💧" },
  { name: "Baba Toast", logo: "🍞" }
];

export default function Clients() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Trusted Clients</h2>
            <p className="text-slate-600">
              Trusted by growing businesses and brands for reliable packaging solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center gap-4 hover:bg-white hover:shadow-xl transition-all group"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform">{client.logo}</div>
              <span className="font-bold text-slate-800 text-center">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
