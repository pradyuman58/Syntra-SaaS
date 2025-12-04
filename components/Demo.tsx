import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle, Plus, FileText, Settings, Share, ArrowRight } from 'lucide-react';

const Demo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [step, setStep] = useState(0);

  const runDemo = () => {
    if (isRunning) return;
    setIsRunning(true);
    setStep(1);
    
    setTimeout(() => setStep(2), 1000);
    setTimeout(() => setStep(3), 2500);
    setTimeout(() => {
        setIsRunning(false);
        // Reset after a moment
        setTimeout(() => setStep(0), 2000);
    }, 4000);
  };

  return (
    <section id="demo" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-6">
              Experience the <br/>
              <span className="text-gradient">power of simplicity</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Our intuitive interface allows you to manage complex projects with ease. Visualize your data, streamline your process, and achieve better results.
            </p>
            
            <div className="space-y-4 mb-8">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Drag-and-drop Organization</span>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Real-time Collaboration</span>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Instant Deployment</span>
                </div>
            </div>

            <button onClick={runDemo} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center shadow-lg shadow-blue-500/30">
               {isRunning ? 'Processing...' : 'Run Simulation'}
               {!isRunning && <Play className="ml-2 w-4 h-4 fill-current" />}
            </button>
          </div>

          {/* Interactive UI Mockup */}
          <div className="relative rounded-xl bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">
            {/* Toolbar */}
            <div className="h-12 border-b border-gray-800 bg-gray-800/50 flex items-center px-4 justify-between">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-xs font-mono">Project Workflow</div>
                <button className={`px-3 py-1 rounded text-xs font-bold transition-colors ${step === 3 ? 'bg-green-500 text-white' : 'bg-blue-600 text-white'}`}>
                    {step === 3 ? 'Complete' : 'Active'}
                </button>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 relative bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] p-8">
                
                {/* Nodes */}
                <div className="flex flex-col items-center space-y-8 relative z-10">
                    
                    {/* Node 1: Input */}
                    <motion.div 
                        animate={{ 
                            scale: step === 1 ? 1.05 : 1,
                            borderColor: step >= 1 ? '#3b82f6' : '#374151'
                        }}
                        className="w-64 bg-gray-800 rounded-lg border-2 border-gray-700 p-4 shadow-lg z-20"
                    >
                        <div className="flex items-center mb-2">
                            <div className="p-2 bg-orange-500/20 rounded mr-3">
                                <FileText className="w-4 h-4 text-orange-500" />
                            </div>
                            <div>
                                <div className="text-gray-200 text-sm font-semibold">Input Source</div>
                                <div className="text-gray-500 text-xs">Data Collection</div>
                            </div>
                        </div>
                        {step === 1 && <div className="mt-2 h-1 w-full bg-gray-700 rounded overflow-hidden"><div className="h-full bg-blue-500 animate-[width_1s_ease-in-out_forwards]" style={{width: '100%'}}></div></div>}
                    </motion.div>

                    {/* Connecting Line 1 */}
                    <div className={`h-8 w-0.5 transition-colors duration-500 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>

                    {/* Node 2: Process */}
                    <motion.div 
                        animate={{ 
                            scale: step === 2 ? 1.05 : 1,
                            borderColor: step >= 2 ? '#8b5cf6' : '#374151'
                        }}
                        className="w-64 bg-gray-800 rounded-lg border-2 border-gray-700 p-4 shadow-lg z-20"
                    >
                        <div className="flex items-center mb-2">
                            <div className="p-2 bg-violet-500/20 rounded mr-3">
                                <Settings className="w-4 h-4 text-violet-500" />
                            </div>
                            <div>
                                <div className="text-gray-200 text-sm font-semibold">Processing</div>
                                <div className="text-gray-500 text-xs">Applying Logic</div>
                            </div>
                        </div>
                         {step === 2 && <div className="mt-2 text-xs text-violet-400 font-mono">Optimizing...</div>}
                    </motion.div>

                    {/* Connecting Line 2 */}
                    <div className={`h-8 w-0.5 transition-colors duration-500 ${step >= 3 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>

                    {/* Node 3: Output */}
                    <motion.div 
                        animate={{ 
                            scale: step === 3 ? 1.05 : 1,
                            borderColor: step >= 3 ? '#10b981' : '#374151',
                            backgroundColor: step === 3 ? 'rgba(16, 185, 129, 0.1)' : '#1f2937'
                        }}
                        className="w-64 bg-gray-800 rounded-lg border-2 border-gray-700 p-4 shadow-lg z-20"
                    >
                        <div className="flex items-center mb-2">
                            <div className="p-2 bg-green-500/20 rounded mr-3">
                                <Share className="w-4 h-4 text-green-500" />
                            </div>
                            <div>
                                <div className="text-gray-200 text-sm font-semibold">Distribution</div>
                                <div className="text-gray-500 text-xs">Final Output</div>
                            </div>
                        </div>
                        {step === 3 && <div className="flex items-center text-xs text-green-400 mt-2"><CheckCircle className="w-3 h-3 mr-1" /> Completed</div>}
                    </motion.div>

                </div>

                 {/* Floating "Add Node" Button */}
                 <div className="absolute right-6 bottom-6">
                    <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 transition-colors">
                        <Plus className="text-white" />
                    </button>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;