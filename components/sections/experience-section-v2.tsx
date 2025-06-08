'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const experience = [
  {
    year: '2023 - Present',
    title: 'Senior Web3 Developer',
    company: 'DeFi Protocol Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Leading development of next-generation DeFi applications and smart contracts. Architected yield farming protocols handling $50M+ TVL with zero security incidents.',
    achievements: [
      'Built 15+ production smart contracts',
      'Managed $50M+ in Total Value Locked',
      'Led team of 5 blockchain developers',
      'Reduced gas costs by 35% through optimization'
    ],
    technologies: ['Solidity', 'Hardhat', 'React', 'Node.js', 'AWS']
  },
  {
    year: '2022 - 2023',
    title: 'Blockchain Developer',
    company: 'NFT Marketplace',
    location: 'Remote',
    type: 'Contract',
    description: 'Built scalable NFT trading platform with advanced smart contract functionality. Implemented gas-optimized minting and trading systems serving 10K+ users.',
    achievements: [
      '10K+ NFTs minted successfully',
      '99.9% platform uptime maintained',
      'Gas costs reduced by 40%',
      'Integrated with 5+ wallet providers'
    ],
    technologies: ['Solidity', 'IPFS', 'React', 'Web3.js', 'MongoDB']
  },
  {
    year: '2021 - 2022',
    title: 'Full Stack Developer',
    company: 'Tech Startup',
    location: 'Austin, TX',
    type: 'Full-time',
    description: 'Developed Web2 and Web3 applications with modern JavaScript frameworks. Successfully transitioned company to blockchain technology and launched 5 dApps.',
    achievements: [
      'Led Web3 migration strategy',
      'Launched 5 successful dApps',
      'Trained 8 developers in Web3',
      'Increased user engagement by 200%'
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Docker']
  },
  {
    year: '2020 - 2021',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Created responsive web applications and user interfaces for various clients. Specialized in React and modern CSS frameworks with focus on performance optimization.',
    achievements: [
      '20+ client projects delivered',
      '100% client satisfaction rate',
      'Performance improved by 60%',
      'Mentored 3 junior developers'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Figma']
  }
];

export function ExperienceSectionV2() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A timeline of my professional journey in Web3 and blockchain development, 
            showcasing key achievements and technological expertise.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>
          
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
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-2 sm:left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-background shadow-lg"
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                />
                
                <Card className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <Badge variant="outline" className="self-start sm:self-auto">
                            {exp.type}
                          </Badge>
                        </div>
                        <p className="text-lg font-medium text-primary mb-2">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.year}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-emerald-600" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              4+
            </div>
            <div className="text-muted-foreground">Years of Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-muted-foreground">Smart Contracts Deployed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              $50M+
            </div>
            <div className="text-muted-foreground">Total Value Secured</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}