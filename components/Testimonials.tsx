import React from 'react';
import { Testimonial } from '../types';
import { motion } from 'framer-motion';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow',
    content: "Syntra has completely revolutionized how we handle our internal operations. The interface is intuitive and the performance is unmatched.",
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    id: '2',
    name: 'Michael Ross',
    role: 'Product Manager',
    company: 'InnovateInc',
    content: "The analytics features are a game changer. We can finally see where our bottlenecks are and optimize our workflow.",
    avatar: 'https://picsum.photos/seed/mike/100/100',
  },
  {
    id: '3',
    name: 'Jessica Lee',
    role: 'Founder',
    company: 'StartUp X',
    content: "We scaled to thousands of users without any issues. The infrastructure is rock solid and support has been amazing.",
    avatar: 'https://picsum.photos/seed/jess/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center dark:text-white mb-16">
          Loved by <span className="text-gradient">leaders</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-center mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-white dark:border-gray-700" />
                <div>
                  <h4 className="font-bold dark:text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}, {t.company}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;