import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle, Upload } from 'lucide-react';

type OrderFormData = {
  fullName: string;
  businessName: string;
  email: string;
  mobileNumber: string;
  boxType: string;
  boxSize: string;
  plyType: string;
  quantity: string;
  printingRequired: string;
  requirements: string;
  deliveryLocation: string;
  urgencyLevel: string;
};

export default function OrderForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<OrderFormData>();

  const onSubmit = async (data: OrderFormData) => {
    // Simulate API call
    console.log('Order Data:', data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="order" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-3xl shadow-xl text-center"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Order Request Received!</h2>
            <p className="text-slate-600 mb-8">
              Thank you for your interest. Our team will review your requirements and contact you with a detailed quotation within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all"
            >
              Submit Another Request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Online Order</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">
                Custom Box Manufacturing Request
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Fill out the form with your specific requirements. Whether it's a standard size or a completely custom design, we've got you covered.
              </p>

              <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-2xl mb-8">
                <div className="flex gap-4">
                  <AlertCircle className="text-orange-500 w-6 h-6 flex-shrink-0" />
                  <p className="text-slate-700 text-sm font-medium">
                    Price will vary depending on urgency and customization requirements. Our team will contact you with a quotation after reviewing your order.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-orange-500 font-bold">1</div>
                  <p className="text-slate-700 font-medium">Submit your requirements</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-orange-500 font-bold">2</div>
                  <p className="text-slate-700 font-medium">Get a custom quotation</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-orange-500 font-bold">3</div>
                  <p className="text-slate-700 font-medium">Approve and start production</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                    <input
                      {...register('fullName', { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.fullName && <span className="text-red-500 text-xs mt-1">Required</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Business Name *</label>
                    <input
                      {...register('businessName', { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="Acme Corp"
                    />
                    {errors.businessName && <span className="text-red-500 text-xs mt-1">Required</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number *</label>
                    <input
                      {...register('mobileNumber', { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Type of Box</label>
                    <select
                      {...register('boxType')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option>Standard Corrugated</option>
                      <option>Cake Box</option>
                      <option>Sweet Box</option>
                      <option>Fruit Box</option>
                      <option>Industrial Carton</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Size (L x W x H)</label>
                    <input
                      {...register('boxSize')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="e.g. 10x10x10 inch"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Ply of Box</label>
                    <select
                      {...register('plyType')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option>3 Ply</option>
                      <option>5 Ply</option>
                      <option>7 Ply</option>
                      <option>9 Ply</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Quantity Required</label>
                    <input
                      {...register('quantity')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="e.g. 1000 units"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Printing Required?</label>
                    <div className="flex gap-4 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" value="Yes" {...register('printingRequired')} className="text-orange-500 focus:ring-orange-500" />
                        <span className="text-slate-700">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" value="No" {...register('printingRequired')} className="text-orange-500 focus:ring-orange-500" />
                        <span className="text-slate-700">No</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Upload Logo (Optional)</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-orange-500 transition-colors cursor-pointer group">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2 group-hover:text-orange-500 transition-colors" />
                    <p className="text-slate-500 text-sm">Click to upload or drag and drop</p>
                    <p className="text-slate-400 text-xs mt-1">PNG, JPG, PDF (Max 5MB)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Other Manufacturing Requirements</label>
                  <textarea
                    {...register('requirements')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Delivery Location</label>
                    <input
                      {...register('deliveryLocation')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="City, State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Urgency Level</label>
                    <select
                      {...register('urgencyLevel')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option>Normal</option>
                      <option>Urgent</option>
                      <option>Very Urgent</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Order Request
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
