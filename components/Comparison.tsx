import React, { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">
            Why choose <span className="text-gradient">Syntra</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            See how we stack up against the competition.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b dark:border-white/10 w-1/4"></th>
                <th className="p-4 border-b dark:border-white/10 w-1/4 text-center">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">Syntra</div>
                </th>
                <th className="p-4 border-b dark:border-white/10 w-1/4 text-center">
                  <div className="text-xl font-semibold text-gray-500 dark:text-gray-400">Competitor A</div>
                </th>
                <th className="p-4 border-b dark:border-white/10 w-1/4 text-center">
                  <div className="text-xl font-semibold text-gray-500 dark:text-gray-400">Competitor B</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Setup Time', us: 'Minutes', them: 'Hours', code: 'Days' },
                { feature: '24/7 Support', us: true, them: 'Limited', code: 'No' },
                { feature: 'Real-time Sync', us: true, them: false, code: true },
                { feature: 'Analytics', us: 'Advanced', them: 'Basic', code: 'None' },
                { feature: 'Updates', us: 'Auto', them: 'Manual', code: 'Manual' },
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-white dark:hover:bg-white/5 transition-colors">
                  <td className="p-6 border-b dark:border-white/5 font-medium dark:text-white">{row.feature}</td>
                  
                  <td className="p-6 border-b dark:border-white/5 text-center bg-blue-50/30 dark:bg-blue-900/10">
                    {typeof row.us === 'boolean' ? (
                      row.us ? <Check className="w-6 h-6 text-blue-500 mx-auto" /> : <X className="w-6 h-6 text-red-500 mx-auto" />
                    ) : (
                      <span className="font-bold text-blue-600 dark:text-blue-400">{row.us}</span>
                    )}
                  </td>

                  <td className="p-6 border-b dark:border-white/5 text-center text-gray-500 dark:text-gray-400">
                     {typeof row.them === 'boolean' ? (
                      row.them ? <Check className="w-6 h-6 text-gray-400 mx-auto" /> : <X className="w-6 h-6 text-gray-400 mx-auto" />
                    ) : (
                      row.them
                    )}
                  </td>

                  <td className="p-6 border-b dark:border-white/5 text-center text-gray-500 dark:text-gray-400">
                     {typeof row.code === 'boolean' ? (
                      row.code ? <Check className="w-6 h-6 text-gray-400 mx-auto" /> : <X className="w-6 h-6 text-gray-400 mx-auto" />
                    ) : (
                      row.code
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;