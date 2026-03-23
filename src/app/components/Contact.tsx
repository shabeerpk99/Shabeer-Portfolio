import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Form submitted! (This is a demo - connect to your backend)');
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
              <Mail className="size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg mb-2">Email</h3>
            <p className="text-zinc-600 dark:text-zinc-400">shabeerpk2020@gmail.com</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
              <Phone className="size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg mb-2">Phone</h3>
            <p className="text-zinc-600 dark:text-zinc-400">+92 (333) 9045580</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
              <MapPin className="size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg mb-2">Location</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Peshawar, Pakistan</p>
          </Card>
        </div>

        <Card className="p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-zinc-700 dark:text-zinc-300">
                  Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  type="text" 
                  placeholder="Your name"
                  autoComplete="name"
                  required 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  required 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-zinc-700 dark:text-zinc-300">
                Subject
              </label>
              <Input 
                id="subject"
                name="subject"
                type="text" 
                placeholder="What's this about?"
                autoComplete="off"
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-zinc-700 dark:text-zinc-300">
                Message
              </label>
              <Textarea 
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                autoComplete="off"
                rows={6}
                required 
              />
            </div>
            <Button type="submit" className="w-fit">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
