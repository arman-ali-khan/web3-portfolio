import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

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
              Building the future of the web with blockchain technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-muted/80 transition-colors duration-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-muted/80 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-muted/80 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-muted/80 transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </Button>
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
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-base">
            © {currentYear} Alex Morgan. All rights reserved. Built with Next.js and Web3 technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}