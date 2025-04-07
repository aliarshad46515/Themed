import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";
import { Card } from "./components/Card";
import { Newsletter } from "./components/Newsletter";
import { Stats } from "./components/Stats";

function App() {
  const articles = [
    {
      title: "Getting Started with Dark Mode",
      description:
        "Learn how to implement dark mode in your React applications using Context API and Tailwind CSS.",
      imageUrl:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Advanced Theme Customization",
      description:
        "Dive deep into theme customization techniques and best practices for React applications.",
      imageUrl:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto p-6">
          <header className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Dark Mode
            </h1>
            <ThemeToggle />
          </header>

          <main className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                  <Card key={article.title} {...article} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Platform Statistics
              </h2>
              <Stats />
            </section>

            <section className="max-w-lg mx-auto">
              <Newsletter />
            </section>
          </main>

          <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
            <p>© 2025 Dark Mode Demo. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
