import React from 'react';
import { motion } from 'motion/react';

const categories = [
  {
    title: "Corrugated Box Manufacturers",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Cake Box Manufacturers",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "3 Ply Corrugated Box",
    image: "",
  },
  {
    title: "5 Ply Corrugated Box",
    image: "",
  },
  {
    title: "7 Ply Corrugated Box",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "9 Ply Corrugated Box",
    image: "https://images.unsplash.com/photo-1513061397548-b01770697469?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Corrugated Food Box",
    image: "https://images.unsplash.com/photo-1526367790999-0150786486a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Corrugated Sweet Box",
    image: "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Fruit Corrugated Box",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Industrial Carton Box",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Printed Corrugated Box",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Industrial Corrugated Box",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
  }
];

export default function ProductCategories() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Product Range</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Specialized Packaging Categories
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-md"
          >
            We manufacture a diverse range of corrugated products to serve various industrial and commercial needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold leading-tight group-hover:text-orange-400 transition-colors">
                  {category.title}
                </h3>
                <div className="w-10 h-1 bg-orange-500 mt-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
