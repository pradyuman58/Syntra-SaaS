import React from 'react';
import { Layout, BarChart, Shield, RefreshCw, Layers, Globe } from 'lucide-react';
import { Feature } from '../types';
import { motion } from 'framer-motion';

const features: Feature[] = [
  {
    id: '1',
    title: 'Intuitive Dashboard',
    description: 'Manage everything from a single, beautifully designed interface that adapts to your workflow.',
    icon: Layout,
  },
  {
    id: '2',
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your performance with real-time data visualization and reports.',
    icon: BarChart,
  },
  {
    id: '3',
    title: 'Enterprise Security',
    description: 'SOC2 Type II certified. Your data is encrypted at rest and in transit.',
    icon: Shield,
  },
  {
    id: '4',
    title: 'Real-time Sync',
    description: 'Collaborate with your team instantly. Changes are reflected across all devices in real-time.',
    icon: RefreshCw,
  },
  {
    id: '5',
    title: 'Seamless Integrations',
    description: 'Connect with your favorite tools. We support over 50+ integrations out of the box.',
    icon: Layers,
  },
  {
    id: '6',
    title: 'Global Infrastructure',
    description: 'Deployed on the edge for ultra-low latency and 99.99% uptime worldwide.',
    icon: Globe,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-gray-50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Features</h2>
          <h3 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">
            Everything you need to <span className="text-gradient">grow</span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful tools designed for teams of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;