import React from 'react';
import { Users, Star, Coffee } from 'lucide-react';

export function Stats() {
  const stats = [
    { icon: Users, label: 'Active Users', value: '10,000+' },
    { icon: Star, label: 'Total Reviews', value: '4.9/5' },
    { icon: Coffee, label: 'Coffee Consumed', value: '∞' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center transition-transform hover:scale-105"
        >
          <Icon className="w-8 h-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {value}
          </h4>
          <p className="text-gray-600 dark:text-gray-300">{label}</p>
        </div>
      ))}
    </div>
  );
}
