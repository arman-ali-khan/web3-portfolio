'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'DeFi Yield Aggregator',
    description: 'A sophisticated DeFi protocol that automatically finds the best yield opportunities across multiple platforms.',
    image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'DeFi',
    technologies: ['Solidity', 'React', 'Ethers.js', 'Hardhat'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    description: 'A full-featured NFT marketplace with minting, trading, and auction capabilities.',
    image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'NFT',
    technologies: ['Solidity', 'Next.js', 'IPFS', 'OpenZeppelin'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'DAO Governance Platform',
    description: 'A decentralized autonomous organization platform with advanced voting mechanisms.',
    image: 'https://images.pexels.com/photos/8358044/pexels-photo-8358044.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'DAO',
    technologies: ['Solidity', 'TypeScript', 'GraphQL', 'The Graph'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Cross-Chain Bridge',
    description: 'A secure bridge protocol enabling asset transfers between different blockchain networks.',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'DeFi',
    technologies: ['Solidity', 'Web3.js', 'Chainlink', 'Layer Zero'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Portfolio Tracker App',
    description: 'A comprehensive Web2 application for tracking cryptocurrency portfolios and DeFi positions.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Web2',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TradingView'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Gaming NFT Platform',
    description: 'A gaming-focused NFT platform with play-to-earn mechanics and in-game asset trading.',
    image: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'NFT',
    technologies: ['Solidity', 'Unity', 'Polygon', 'Metamask'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const categories = ['All', 'DeFi', 'NFT', 'DAO', 'Web2'];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest Web3 projects, DeFi protocols, and blockchain applications.
          </p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={`transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg' 
                    : 'hover:bg-muted/80'
                }`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full"
              >
                <Card className="overflow-hidden border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-3">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="ml-2 flex-shrink-0">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Interested in working together?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-base sm:text-lg">
            Let's discuss your next Web3 project and bring your vision to life with cutting-edge blockchain technology.
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
              Start a Project
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}