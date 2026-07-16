import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      title: 'Business Nexus – Entrepreneur & Investor Platform',
      description: 'Enhanced an existing business networking platform by implementing production-ready frontend features, including meeting scheduling, video calling, document management with e-signature, payment workflows, role-based dashboards, and secure authentication.',
      image: '/project/nexus-project.jpg',
      tags: ['Typescript', 'React', 'vite', 'Tailwindcss', 'F2F: 123456'],
      github: 'https://github.com/shabeerpk99/Nexus',
      live: 'https://nexus-bus.vercel.app/dashboard/entrepreneur'  
    },
    {
      title: 'Task Management Todo App',
      description: 'A modern task management application with real-time collaboration, drag-and-drop interface, and team workflows. Designed for remote teams.',
      image: '/project/project2.jpg',
      tags: ['Javascript', 'React', 'vite', 'Tailwindcss'],
      github: 'https://github.com/shabeerpk99/todo-app',
      live: 'https://shabeer-todo.netlify.app/'
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application with real-time data, forecasts, and location-based services. Built with React and integrated with a weather API.',
      image: '/project/project1.jpg',
      tags: ['Javascript', 'React', 'vite', 'Tailwindcss'],
      github: 'https://github.com/shabeerpk99/Weather-App',
      live: 'https://shabeer-weather-app.netlify.app/'
    },
    {
      title: 'E-commerce Website',
      description: 'A feature-rich e-commerce platform with product management, shopping cart, and secure checkout functionalitA modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS, featuring a clean and minimal design focused on fashion products.',
      image: '/project/project3.jpg',
      tags: ['Javascript/Typescript', 'React', 'vite', 'Tailwindcss'],
      github: 'https://github.com/shabeerpk99/E-Commerce-Website',
      live: 'https://shabeer-e-commerce.netlify.app/'
    },
    {
      title: 'GroupBuy SEO Tools Dashboard',
      description: 'A modern, responsive dashboard for managing and analyzing SEO tools for GroupBuy. Features real-time data visualization and performance metrics.',
      image: '/project/project4.jpg',
      tags: ['Javascript/Typescript', 'React', 'vite', 'Tailwindcss'],
      github: 'https://github.com/shabeerpk99/Groupbuy-Admindashobard',
      live: 'https://groupbuytools-admin.netlify.app/'
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
                  <Button variant="outline" size="sm" className="gap-2 cursor-pointer" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="size-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2 cursor-pointer" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="size-4" />
                      Live Demo
                    </a>
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
