import React from 'react';
import { Twitter, Github, Linkedin, Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 mr-2">
                    <Hexagon className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight dark:text-white">Syntra</span>
             </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              The next generation platform for modern teams. Built for speed, scale, and security.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold dark:text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Syntra Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;