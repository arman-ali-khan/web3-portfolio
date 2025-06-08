'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Zap, Shield, Globe } from 'lucide-react';

const skills = [
  'Solidity', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle', 'OpenZeppelin', 'IPFS',
  'Metamask', 'WalletConnect', 'DeFi', 'NFTs', 'Smart Contracts', 'Ethereum'
];

const experience = [
  {
    year: '2023 - Present',
    title: 'Senior Web3 Developer',
    company: 'DeFi Protocol Inc.',
    description: 'Leading development of next-generation DeFi applications and smart contracts.'
  },
  {
    year: '2022 - 2023',
    title: 'Blockchain Developer',
    company: 'NFT Marketplace',
    description: 'Built scalable NFT trading platform with advanced smart contract functionality.'
  },
  {
    year: '2021 - 2022',
    title: 'Full Stack Developer',
    company: 'Tech Startup',
    description: 'Developed Web2 and Web3 applications with modern JavaScript frameworks.'
  },
  {
    year: '2020 - 2021',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Created responsive web applications and user interfaces for various clients.'
  }
];

const highlights = [
  {
    icon: Code,
    title: 'Smart Contract Expert',
    description: 'Specialized in writing secure, gas-efficient smart contracts for various blockchain networks.'
  },
  {
    icon: Zap,
    title: 'DeFi Pioneer',
    description: 'Built innovative DeFi protocols with advanced yield farming and liquidity management.'
  },
  {
    icon: Shield,
    title: 'Security Focused',
    description: 'Experienced in smart contract auditing and implementing best security practices.'
  },
  {
    icon: Globe,
    title: 'Full Stack Web3',
    description: 'End-to-end development from smart contracts to polished user interfaces.'
  }
];

export function AboutSection() {
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
          {/* Personal Story */}
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
                blockchain technology. Since then, I've been dedicated to building the decentralized future.
              </p>
              <p>
                I've worked on everything from simple token contracts to complex DeFi protocols, 
                always focusing on security, user experience, and innovation. My goal is to make 
                Web3 accessible and beneficial for everyone.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical articles, or exploring the latest trends in blockchain technology.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">What I Do Best</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="border-border/50 hover:border-border transition-all duration-300 h-full">
                    <CardContent className="p-4 sm:p-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <highlight.icon className="h-8 w-8 mb-3 text-primary" />
                      </motion.div>
                      <h4 className="font-semibold mb-2 text-base sm:text-lg">{highlight.title}</h4>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
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
                <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-muted transition-colors duration-300">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-center">Experience</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            <div className="space-y-8 sm:space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-12 sm:pl-20"
                >
                  <motion.div 
                    className="absolute left-2 sm:left-6 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
                    whileHover={{ scale: 1.2 }}
                  ></motion.div>
                  <Card className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-lg sm:text-xl font-semibold">{exp.title}</h4>
                        <Badge variant="outline" className="mt-2 sm:mt-0 self-start sm:self-auto">
                          {exp.year}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium mb-3 text-base sm:text-lg">{exp.company}</p>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}