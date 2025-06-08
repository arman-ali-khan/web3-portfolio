'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const technologies = [
  {
    category: 'Blockchain Platforms',
    items: ['Ethereum', 'Polygon', 'Binance Smart Chain', 'Avalanche', 'Solana', 'Arbitrum']
  },
  {
    category: 'Smart Contract Languages',
    items: ['Solidity', 'Vyper', 'Rust', 'Move', 'Cairo']
  },
  {
    category: 'Development Tools',
    items: ['Hardhat', 'Truffle', 'Foundry', 'Remix', 'OpenZeppelin', 'Chainlink']
  },
  {
    category: 'Frontend Technologies',
    items: ['React', 'Next.js', 'TypeScript', 'Web3.js', 'Ethers.js', 'Wagmi']
  },
  {
    category: 'DeFi Protocols',
    items: ['Uniswap', 'Aave', 'Compound', 'Curve', 'Balancer', 'SushiSwap']
  },
  {
    category: 'Infrastructure',
    items: ['IPFS', 'The Graph', 'Moralis', 'Alchemy', 'Infura', 'QuickNode']
  }
];

export function TechnologiesSection() {
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
            Technology <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leveraging the most advanced and reliable technologies in the Web3 ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {technologies.map((tech, categoryIndex) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-center">
                {tech.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {tech.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + itemIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 text-sm hover:bg-muted transition-colors duration-300 cursor-default"
                    >
                      {item}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}