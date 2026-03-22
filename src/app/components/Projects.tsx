import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
      image: '/project/project1.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A modern task management application with real-time collaboration, drag-and-drop interface, and team workflows. Designed for remote teams.',
      image: '/project/project2.jpg',
      tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
      github: '#',
      live: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Cross-platform mobile banking application with biometric authentication, transaction history, and budget tracking features.',
      image: '/project/project3.jpg',
      tags: ['React Native', 'Redux', 'REST API'],
      github: '#',
      live: '#'
    },
    {
      title: 'Developer Portfolio',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Features dark mode, smooth animations, and optimized performance.',
      image: '/project/project4.jpg',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="size-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="size-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
