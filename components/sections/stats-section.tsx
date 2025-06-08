'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  {
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successful Web3 implementations'
  },
  {
    value: 50,
    suffix: 'M+',
    label: 'Total Value Secured',
    description: 'In smart contract audits'
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Uptime Guarantee',
    description: 'For all deployed solutions'
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Support Available',
    description: 'Round-the-clock assistance'
  }
];

function CountUpAnimation({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{count}</span>;
}

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Proven <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Numbers that speak to our commitment to excellence and innovation in the Web3 space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 group-hover:border-border transition-all duration-300">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    <CountUpAnimation value={stat.value} />
                    {stat.suffix}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
                    {stat.label}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}