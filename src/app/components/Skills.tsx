import { Card } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML / CSS', level: 98 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js / Express', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      category: 'Tools & DevOps',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'AWS / Vercel', level: 80 },
        { name: 'CI/CD', level: 70 }
      ]
    },
    {
      category: 'Design',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Accessibility', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Skills & Expertise</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Technologies and tools I work with on a daily basis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.category} className="p-8">
              <h3 className="text-2xl mb-6 text-blue-600 dark:text-blue-400">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500 dark:text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
