'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Coins, 
  Shield, 
  Smartphone, 
  Database, 
  Zap,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Smart Contract Development',
    description: 'Custom smart contracts built with security and gas optimization in mind.',
    price: 'From $2,500',
    features: [
      'Security audit included',
      'Gas optimization',
      'Comprehensive testing',
      'Documentation'
    ]
  },
  {
    icon: Coins,
    title: 'DeFi Protocol Development',
    description: 'End-to-end DeFi solutions including yield farming, lending, and AMM protocols.',
    price: 'From $10,000',
    features: [
      'Advanced tokenomics',
      'Liquidity mechanisms',
      'Governance integration',
      'Multi-chain support'
    ]
  },
  {
    icon: Shield,
    title: 'Security Auditing',
    description: 'Comprehensive smart contract audits to identify vulnerabilities and optimize code.',
    price: 'From $1,500',
    features: [
      'Detailed audit report',
      'Gas optimization tips',
      'Best practices guide',
      'Follow-up review'
    ]
  },
  {
    icon: Smartphone,
    title: 'DApp Frontend Development',
    description: 'Beautiful, responsive interfaces for your decentralized applications.',
    price: 'From $3,500',
    features: [
      'Web3 integration',
      'Responsive design',
      'Wallet connectivity',
      'Real-time updates'
    ]
  },
  {
    icon: Database,
    title: 'NFT Platform Development',
    description: 'Complete NFT marketplaces with minting, trading, and auction features.',
    price: 'From $8,000',
    features: [
      'IPFS integration',
      'Royalty mechanisms',
      'Advanced search',
      'Analytics dashboard'
    ]
  },
  {
    icon: Zap,
    title: 'Web3 Consulting',
    description: 'Strategic guidance for your blockchain projects and technology decisions.',
    price: 'From $150/hour',
    features: [
      'Technology assessment',
      'Architecture planning',
      'Best practices',
      'Team training'
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive Web3 development services to bring your blockchain vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group h-full"
            >
              <Card className="h-full border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl flex flex-col">
                <CardHeader className="text-center pb-4 flex-shrink-0">
                  <motion.div 
                    className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-primary/10 to-purple-600/10 group-hover:from-primary/20 group-hover:to-purple-600/20 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <CardTitle className="text-lg sm:text-xl mb-3 leading-tight">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <div className="text-center mb-6">
                    <Badge variant="secondary" className="text-base sm:text-lg px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                      {service.price}
                    </Badge>
                  </div>
                  
                  <ul className="space-y-3 mb-6 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center text-sm sm:text-base"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300" 
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Need something custom?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="px-8 py-6 text-base rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Consultation
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}