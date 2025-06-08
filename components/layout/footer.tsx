import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/alexmorgan', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/alexmorgan_dev', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/in/alexmorgan-dev', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/alexmorgan.dev', label: 'Instagram' },
    { icon: Mail, href: 'mailto:alex@alexmorgan.dev', label: 'Email' }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
              Alex.dev
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md text-base sm:text-lg leading-relaxed">
              Building the future of the web with blockchain technology and innovative solutions. Transforming ideas into decentralized reality.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <Button 
                  key={social.label}
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 rounded-full hover:bg-muted/80 transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 alex@alexmorgan.dev</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 San Francisco, CA</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base">About</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base">Portfolio</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base">Services</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-base">Smart Contracts</li>
              <li className="text-muted-foreground text-base">DeFi Development</li>
              <li className="text-muted-foreground text-base">NFT Platforms</li>
              <li className="text-muted-foreground text-base">Web3 Consulting</li>
              <li className="text-muted-foreground text-base">Security Audits</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-base text-center sm:text-left">
              © {currentYear} Alex Morgan. All rights reserved. Built with Next.js and Web3 technologies.
            </p>
            
            {/* Additional Links */}
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}