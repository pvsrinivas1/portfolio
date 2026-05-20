import { useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'AI Voice Assistant',
    desc: 'Intelligent voice-activated assistant using NLP and speech recognition with multi-intent parsing and real-time responses.',
    tags: ['Python', 'NLP', 'Speech Recognition', 'Google Cloud'],
    github: 'https://github.com/pvsrinivas',
    live: '#',
    featured: true,
  },
  {
    title: 'Cloud Security Dashboard',
    desc: 'Centralized monitoring dashboard for AWS/GCP environments with IAM misconfigurations visualization and real-time alerting.',
    tags: ['AWS', 'GCP', 'React', 'Security', 'Dashboard'],
    github: 'https://github.com/pvsrinivas',
    live: '#',
    featured: true,
  },
  {
    title: 'Password Strength Analyzer',
    desc: 'Advanced password security tool with entropy analysis, breach database checks, and actionable hardening suggestions.',
    tags: ['Python', 'Security', 'API', 'Cryptography'],
    github: 'https://github.com/pvsrinivas',
    live: '#',
    featured: true,
  },
  {
    title: 'Network Scanner',
    desc: 'Powerful network reconnaissance tool for subnet scanning, port detection, service fingerprinting, and vulnerability reporting.',
    tags: ['Python', 'Networking', 'Nmap', 'Security'],
    github: 'https://github.com/pvsrinivas',
    live: '#',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    desc: 'This portfolio — built with React, Vite, Tailwind CSS with clean minimalist design and smooth interactions.',
    tags: ['React', 'Vite', 'Tailwind', 'Typography'],
    github: 'https://github.com/pvsrinivas',
    live: '#',
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6 border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in">
          <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-4">Projects</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Things I've Built
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mb-16">
            A collection of projects exploring security, cloud, and full-stack development.
          </p>

          {/* Featured projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {featured.map((p) => (
              <div
                key={p.title}
                className="group bg-card bg-card-hover rounded-lg p-7"
              >
                <h3 className="text-lg font-black mb-3 group-hover:opacity-60 transition-opacity">
                  {p.title}
                </h3>

                <p className="text-black/70 text-sm leading-relaxed mb-5">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-bold bg-black/5 border border-black/10 text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-black hover:opacity-60 transition-opacity"
                  >
                    <Github size={13} /> Code
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-black hover:opacity-60 transition-opacity"
                  >
                    <ExternalLink size={13} /> Live <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Other projects */}
          <div className="grid sm:grid-cols-2 gap-5">
            {rest.map((p) => (
              <div
                key={p.title}
                className="group bg-card bg-card-hover rounded-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base font-black group-hover:opacity-60 transition-opacity">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors">
                      <Github size={15} />
                    </a>
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors">
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-black/70 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-black/5 border border-black/10 font-bold text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://github.com/pvsrinivas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-black text-black font-bold text-sm hover:bg-black hover:text-white transition-all"
            >
              <Github size={16} />
              View All Projects on GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
