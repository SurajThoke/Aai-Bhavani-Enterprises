import React from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  Maximize, 
  Briefcase, 
  ShoppingCart, 
  Store, 
  Layout 
} from 'lucide-react';

const services = [
  {
    title: "Luxury Box Design",
    description: "Premium packaging solutions for high-end products, focusing on aesthetics and unboxing experience.",
    icon: Palette,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Multiple Size Boxes",
    description: "From tiny component boxes to massive industrial shipping cartons, we manufacture all sizes.",
    icon: Maximize,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Brand Packaging Design",
    description: "Custom printing and structural design that aligns perfectly with your brand identity.",
    icon: Briefcase,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "E-commerce Box Design",
    description: "Durable shipping boxes designed to withstand the rigors of courier handling and transit.",
    icon: ShoppingCart,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Retail Box Design",
    description: "Eye-catching shelf-ready packaging that helps your products stand out in retail environments.",
    icon: Store,
    color: "bg-rose-500/10 text-rose-500"
  },
  {
    title: "Structural Design",
    description: "Engineering the perfect box structure to protect fragile items and optimize material usage.",
    icon: Layout,
    color: "bg-amber-500/10 text-amber-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Comprehensive Packaging Services
            </h2>
            <p className="text-lg text-slate-600">
              We provide end-to-end packaging solutions from concept and design to manufacturing and delivery.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
