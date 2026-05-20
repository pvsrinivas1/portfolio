import { useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'AI Voice Assistant',
    desc: 'Intelligent voice-activated assistant using NLP and speech recognition.',
    tags: ['Python', 'NLP', 'Speech Recognition', 'Google Cloud'],
    github: 'https://github.com/pvsrinivas',
    live: '#',
    featured: true,
  },
  {
    title: 'Cloud Security Dashboard',
    desc: 'Centralized monitoring dashboard for AWS/GCP environments.',
    tags: ['AWS', 'GCP', 'React', 'Security'],
    github: 'https://github.com/pvsrinivas',
    live: '#',
    featured: true,
  },
  {
    title: 'Password Strength Analyzer',
    desc: 'Advanced password security tool with entropy analysis.',
    tags: ['Python', 'Security', 'Cryptography'],
    github: 'https://github.com/pvsrinivas',
    live: '#',
    featured: true,
  },
  {
    title: 'Network Scanner',
    desc: 'Network reconnaissance tool for subnet and port scanning.',
    tags: ['Python', 'Networking', 'Nmap'],
    github: 'https://github.com/pvsrinivas',
    live: '#',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    desc: 'Portfolio built using React, Vite, and Tailwind CSS.',
    tags: ['React', 'Vite', 'Tailwind'],
    github: 'https://github.com/pvsrinivas',
    live: '#',
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.08 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-4 md:px-6 border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in">
          <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Things I've Built
          </h2>

          <p className="text-base md:text-lg text-black/60 max-w-2xl mb-12 md:mb-16">
            A collection of projects exploring security, cloud, and full-stack development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {featured.map((p) => (
              <div
                key={p.title}
                className="group bg-card bg-card-hover rounded-lg p-5 md:p-7 overflow-hidden"
              >
                <h3 className="text-lg font-black mb-3 break-words">
                  {p.title}
                </h3>

                <p className="text-black/70 text-sm leading-relaxed mb-5 break-words">
                  {p.desc}
                </p>

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

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-black"
                  >
                    <Github size={13} /> Code
                  </a>

                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-black"
                  >
                    <ExternalLink size={13} /> Live <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rest.map((p) => (
              <div
                key={p.title}
                className="group bg-card bg-card-hover rounded-lg p-5 md:p-6 overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-base font-black break-words">
                    {p.title}
                  </h3>

                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={15} />
                    </a>

                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-black/70 leading-relaxed mb-4 break-words">
                  {p.desc}
                </p>

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

          <div className="mt-12 text-center">
            <a
              href="https://github.com/pvsrinivas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-wrap items-center justify-center gap-2 px-5 md:px-6 py-3 rounded-lg border-2 border-black text-black font-bold text-sm hover:bg-black hover:text-white transition-all"
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
