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
  CheckCircle,
  Clock,
  Users,
  Award
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Smart Contract Development',
    description: 'Custom smart contracts built with security and gas optimization in mind, following industry best practices.',
    price: 'From $2,500',
    duration: '2-4 weeks',
    features: [
      'Security audit included',
      'Gas optimization',
      'Comprehensive testing',
      'Complete documentation',
      'Deployment support'
    ],
    popular: false
  },
  {
    icon: Coins,
    title: 'DeFi Protocol Development',
    description: 'End-to-end DeFi solutions including yield farming, lending, AMM protocols, and advanced tokenomics.',
    price: 'From $10,000',
    duration: '6-12 weeks',
    features: [
      'Advanced tokenomics design',
      'Liquidity mechanisms',
      'Governance integration',
      'Multi-chain support',
      'Economic modeling'
    ],
    popular: true
  },
  {
    icon: Shield,
    title: 'Security Auditing',
    description: 'Comprehensive smart contract audits to identify vulnerabilities and optimize code for maximum security.',
    price: 'From $1,500',
    duration: '1-2 weeks',
    features: [
      'Detailed audit report',
      'Vulnerability assessment',
      'Gas optimization tips',
      'Best practices guide',
      'Follow-up review'
    ],
    popular: false
  },
  {
    icon: Smartphone,
    title: 'DApp Frontend Development',
    description: 'Beautiful, responsive interfaces for your decentralized applications with seamless Web3 integration.',
    price: 'From $3,500',
    duration: '3-6 weeks',
    features: [
      'Modern UI/UX design',
      'Web3 wallet integration',
      'Responsive design',
      'Real-time updates',
      'Performance optimization'
    ],
    popular: false
  },
  {
    icon: Database,
    title: 'NFT Platform Development',
    description: 'Complete NFT marketplaces with minting, trading, auction features, and advanced metadata management.',
    price: 'From $8,000',
    duration: '8-12 weeks',
    features: [
      'IPFS integration',
      'Royalty mechanisms',
      'Advanced search & filters',
      'Analytics dashboard',
      'Multi-format support'
    ],
    popular: false
  },
  {
    icon: Zap,
    title: 'Web3 Consulting',
    description: 'Strategic guidance for your blockchain projects, technology decisions, and Web3 transformation.',
    price: 'From $150/hour',
    duration: 'Flexible',
    features: [
      'Technology assessment',
      'Architecture planning',
      'Best practices guidance',
      'Team training',
      'Ongoing support'
    ],
    popular: false
  }
];

export function ServicesSectionV2() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24">
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
            Comprehensive Web3 development services to bring your blockchain vision to life 
            with professional expertise and proven results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <Card className={`h-full border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl flex flex-col relative overflow-hidden ${
                service.popular ? 'ring-2 ring-blue-500/20' : ''
              }`}>
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 text-xs font-medium">
                    Most Popular
                  </div>
                )}
                
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
                  {/* Pricing and Duration */}
                  <div className="text-center mb-6 space-y-2">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      {service.price}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start text-sm sm:text-base"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className={`w-full transition-all duration-300 ${
                        service.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                          : 'bg-primary hover:bg-primary/90'
                      }`}
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

        {/* Why Choose Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
              Why Choose My Services?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Proven Expertise</h4>
                <p className="text-muted-foreground text-sm">4+ years of Web3 development with 150+ successful projects delivered.</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Security First</h4>
                <p className="text-muted-foreground text-sm">Zero security incidents across all deployed contracts with comprehensive auditing.</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Client Success</h4>
                <p className="text-muted-foreground text-sm">98% client satisfaction rate with ongoing support and maintenance.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Custom Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Need something custom?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Every project is unique. Let's discuss your specific requirements and create a tailored solution 
            that perfectly fits your needs and budget.
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
        </motion.div>
      </div>
    </section>
  );
}