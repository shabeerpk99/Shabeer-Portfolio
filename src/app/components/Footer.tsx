import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 dark:bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4 text-blue-400">Portfolio</h3>
            <p className="text-zinc-400">
              Building digital experiences that make a difference. Let's create something amazing together.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors">
                <Github className="size-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors">
                <Linkedin className="size-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors">
                <Twitter className="size-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors">
                <Mail className="size-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="size-4 text-red-500 fill-red-500" /> by Shabeer Rehman © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
