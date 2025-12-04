import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Do I need technical skills to use Syntra?",
    answer: "Not at all. Syntra is designed to be user-friendly for everyone. You can set up your workspace and start working in minutes without writing a single line of code."
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We are SOC2 Type II compliant, and all data is encrypted using AES-256 at rest and TLS 1.3 in transit."
  },
  {
    question: "Can I integrate with other tools?",
    answer: "Yes! We support integrations with popular tools like Slack, Jira, GitHub, and many more. You can also use our API to build custom integrations."
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer: "We'll notify you when you're close to your limits. You can easily upgrade your plan at any time to access more resources and features."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-dark-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center dark:text-white mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <span className="font-semibold text-lg dark:text-gray-200">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-dark-card"
                  >
                    <div className="p-6 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;