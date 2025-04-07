import React from "react";
import { ExternalLink } from "lucide-react";

export function Card({ title, description, imageUrl, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          Learn more
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
}
