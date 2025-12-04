import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: { monthly: 0, yearly: 0 },
    features: ['5 Team Members', 'Basic Analytics', 'Community Support', 'Standard Integrations'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: { monthly: 49, yearly: 39 },
    features: ['Unlimited Members', 'Advanced Reports', 'Priority Support', 'Custom Fields', 'API Access'],
    recommended: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: { monthly: 199, yearly: 159 },
    features: ['Unlimited Everything', 'Dedicated Success Manager', 'SSO & Audit Logs', 'Private Cloud', 'SLA Guarantee'],
  },
];

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Start for free, scale as you grow.
          </p>
          
          <div className="flex justify-center items-center space-x-4">
            <span className={`text-sm ${!isYearly ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-gray-200 dark:bg-white/10 rounded-full transition-colors focus:outline-none"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-blue-600 rounded-full shadow-md transform transition-transform duration-300 ${
                  isYearly ? 'translate-x-6' : ''
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
              Yearly <span className="text-xs text-green-500 font-medium ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl bg-white dark:bg-dark-card border ${
                plan.recommended
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20'
                  : 'border-gray-100 dark:border-white/10'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold dark:text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold dark:text-white">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                    <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.recommended
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
              >
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;