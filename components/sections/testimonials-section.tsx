'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at DeFi Innovations',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Alex delivered an exceptional DeFi protocol that exceeded our expectations. The smart contracts were optimized, secure, and deployed flawlessly.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder of NFT Marketplace',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Working with Alex was a game-changer for our NFT platform. The technical expertise and attention to detail were outstanding.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'Lead Developer at Crypto Fund',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The yield farming protocol Alex built for us has been running smoothly for months. Highly recommend for any Web3 project.',
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'CEO of Blockchain Startup',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Alex transformed our vision into reality with a sophisticated DAO governance system. The code quality is exceptional.',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'Product Manager at Web3 Company',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The cross-chain bridge solution Alex developed has been instrumental in our multi-chain strategy. Excellent work!',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Technical Lead at DeFi Protocol',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Alex\'s security audit saved us from potential vulnerabilities. The detailed report and recommendations were invaluable.',
    rating: 5
  }
];

export function TestimonialsSection() {
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
            Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear what industry leaders say about our Web3 development expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group h-full"
            >
              <Card className="h-full border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground text-base sm:text-lg leading-relaxed flex-1 mb-6">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}