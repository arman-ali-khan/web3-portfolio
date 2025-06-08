'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Blocks, 
  Coins, 
  Shield, 
  Zap, 
  Globe, 
  Users,
  TrendingUp,
  Lock,
  Cpu
} from 'lucide-react';

const features = [
  {
    icon: Blocks,
    title: 'Smart Contract Development',
    description: 'Custom smart contracts built with security and efficiency in mind, leveraging the latest Solidity patterns.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Coins,
    title: 'DeFi Protocols',
    description: 'Advanced decentralized finance solutions including yield farming, lending protocols, and AMM systems.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Security Auditing',
    description: 'Comprehensive security audits to identify vulnerabilities and ensure your smart contracts are bulletproof.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Zap,
    title: 'Gas Optimization',
    description: 'Optimize your smart contracts for minimal gas consumption without compromising functionality.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Globe,
    title: 'Cross-Chain Solutions',
    description: 'Build applications that work seamlessly across multiple blockchain networks and ecosystems.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Users,
    title: 'DAO Governance',
    description: 'Implement decentralized governance systems with advanced voting mechanisms and proposal management.',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    title: 'Yield Strategies',
    description: 'Develop sophisticated yield farming strategies and automated portfolio management systems.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Lock,
    title: 'Privacy Solutions',
    description: 'Implement zero-knowledge proofs and privacy-preserving technologies for enhanced user protection.',
    color: 'from-gray-500 to-slate-500'
  },
  {
    icon: Cpu,
    title: 'Layer 2 Integration',
    description: 'Leverage Layer 2 solutions for faster transactions and reduced costs while maintaining security.',
    color: 'from-violet-500 to-purple-500'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Cutting-Edge <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the advanced capabilities that set our Web3 solutions apart from the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group h-full"
            >
              <Card className="h-full border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}