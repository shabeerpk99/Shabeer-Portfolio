import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 font-bold bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
            👋 Welcome To My Portfolio
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
          I'm <span className="text-blue-600 dark:text-blue-400">Shabeer Rehman</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400">
            Frontend Developer & Creative UI / UX Designer
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-500">
            I build exceptional digital experiences that make people's lives easier. 
            Specialized in React, TypeScript, and modern web technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="gap-2">
              <a href="#projects">
                View My Work <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href="#contact"><Mail className="size-4" /> Get In Touch</a>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
              <Github className="size-6" />
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
              <Linkedin className="size-6" />
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
              <Mail className="size-6" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <img 
              src="/hero/hero.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
