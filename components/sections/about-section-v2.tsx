'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Zap, Shield, Globe, Award, Users } from 'lucide-react';

const skills = [
  'Solidity', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle', 'OpenZeppelin', 'IPFS',
  'Metamask', 'WalletConnect', 'DeFi', 'NFTs', 'Smart Contracts', 'Ethereum'
];

const highlights = [
  {
    icon: Code,
    title: 'Smart Contract Expert',
    description: 'Specialized in writing secure, gas-efficient smart contracts for various blockchain networks.',
    metric: '100+ Contracts Deployed'
  },
  {
    icon: Zap,
    title: 'DeFi Pioneer',
    description: 'Built innovative DeFi protocols with advanced yield farming and liquidity management.',
    metric: '$50M+ TVL Secured'
  },
  {
    icon: Shield,
    title: 'Security Focused',
    description: 'Experienced in smart contract auditing and implementing best security practices.',
    metric: 'Zero Security Breaches'
  },
  {
    icon: Globe,
    title: 'Full Stack Web3',
    description: 'End-to-end development from smart contracts to polished user interfaces.',
    metric: '150+ Projects Completed'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Recognized expert in blockchain development with proven track record.',
    metric: '98% Success Rate'
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Led development teams and mentored junior developers in Web3 technologies.',
    metric: '10+ Developers Trained'
  }
];

export function AboutSectionV2() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate Web3 developer with 4+ years of experience building decentralized applications
            and smart contracts. I specialize in creating secure, scalable blockchain solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Personal Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                My journey into Web3 began in 2020 when I first discovered the revolutionary potential of 
                blockchain technology. Since then, I've been dedicated to building the decentralized future 
                through innovative smart contracts and DeFi protocols.
              </p>
              <p>
                I've worked on everything from simple token contracts to complex DeFi protocols, 
                always focusing on security, user experience, and innovation. My goal is to make 
                Web3 accessible and beneficial for everyone.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical articles, or exploring the latest trends in blockchain technology.
                I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>
          </motion.div>

          {/* Personal Statement Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-gradient-to-br from-background to-muted/20 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-6">My Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I believe in the transformative power of blockchain technology to create a more decentralized, 
                  transparent, and equitable digital future.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My mission is to bridge the gap between traditional finance and the decentralized ecosystem, 
                  always prioritizing security, user experience, and real-world utility in every project I undertake.
                </p>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">4+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">150+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">What I Do Best</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="border-border/50 hover:border-border transition-all duration-300 h-full group">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-purple-600/10 mb-4 group-hover:from-primary/20 group-hover:to-purple-600/20"
                    >
                      <highlight.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h4 className="font-semibold mb-3 text-lg sm:text-xl">{highlight.title}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">{highlight.description}</p>
                    <Badge variant="secondary" className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
                      {highlight.metric}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm sm:text-base hover:bg-muted transition-colors duration-300">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}