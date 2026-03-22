import { Code2, Sparkles, Users, Zap } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized applications that deliver lightning-fast user experiences.'
    },
    {
      icon: Sparkles,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces that users love.'
    },
    {
      icon: Users,
      title: 'User Focused',
      description: 'Building with empathy and understanding of user needs.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              I'm a full-stack developer with over 5 years of experience building web applications. 
              My journey started with a curiosity about how things work on the internet, and it's 
              evolved into a passion for creating seamless digital experiences.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              I specialize in React, TypeScript, Node.js, and modern web technologies. When I'm 
              not coding, you can find me contributing to open-source projects, writing technical 
              articles, or exploring new technologies.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="/about/about.jpg"
              alt="Workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <Card key={item.title} className="p-6 hover:shadow-lg transition-shadow">
              <item.icon className="size-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
