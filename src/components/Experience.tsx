import { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Cloud Security Intern',
    company: 'Research Lab — ECE Department',
    period: '2024 — Present',
    desc: 'Working on cloud security automation, IAM policy analysis, and building tools to detect misconfigurations across AWS and GCP environments.',
    tags: ['AWS', 'GCP', 'Python', 'IAM', 'Security'],
  },
  {
    role: 'Cybersecurity Club Lead',
    company: 'University Technical Society',
    period: '2023 — Present',
    desc: 'Organizing CTF workshops, security awareness sessions, and hands-on labs. Built the club network lab environment for penetration testing.',
    tags: ['CTF', 'Network Security', 'Linux', 'Mentoring'],
  },
  {
    role: 'Open Source Contributor',
    company: 'Security Tools & Utilities',
    period: '2023 — Present',
    desc: 'Contributing to open-source security scanners and cloud utilities. Built a password strength analyzer and network scanner used by 100+ developers.',
    tags: ['Python', 'Open Source', 'Security', 'API'],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-28 px-6 border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in">
          <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-4">Experience</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Where I've Worked
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mb-16">
            Hands-on experience in cloud security, open-source development, and technical communities.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-black/20 hidden md:block" />

            <div className="space-y-0">
              {experiences.map((job, i) => (
                <div
                  key={i}
                  className="relative md:pl-12 pb-14 group last:pb-0"
                >
                  {/* Dot */}
                  <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full border-2 border-black bg-white hidden md:block group-hover:scale-125 transition-transform duration-300" />

                  <div className="bg-card bg-card-hover rounded-lg p-7">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white shrink-0">
                          <Briefcase size={16} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black">{job.role}</h3>
                          <p className="text-sm text-black/60 font-bold">{job.company}</p>
                        </div>
                      </div>
                      <span className="text-xs text-black/40 font-bold whitespace-nowrap mt-1">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm text-black/70 leading-relaxed mb-5">{job.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-black/5 border border-black/10 font-bold text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
