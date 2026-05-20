import { useEffect, useRef } from 'react';
import { Code2, Shield, Cloud, Zap } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '3', label: 'Certifications' },
  { value: '2+', label: 'Years Learning' },
  { value: '∞', label: 'Curiosity' },
];

const traits = [
  { icon: Shield, title: 'Security First', desc: 'Security-first approach in every system I build.' },
  { icon: Cloud, title: 'Cloud Native', desc: 'Hands-on experience with AWS, GCP, and cloud systems.' },
  { icon: Code2, title: 'Clean Code', desc: 'Writing readable and maintainable code.' },
  { icon: Zap, title: 'Fast Learner', desc: 'Quickly learning new tools and technologies.' },
];

export default function About() {
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
    <section id="about" className="py-20 md:py-28 px-4 md:px-6 border-t border-black/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in">
          <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-4">About Me</p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Who I Am
          </h2>

          <p className="text-base md:text-lg text-black/60 max-w-2xl mb-12 md:mb-16">
            Aspiring Cloud & Cybersecurity Engineer focused on building secure, scalable cloud applications and modern infrastructure solutions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
            <div className="space-y-6 min-w-0">
              <div className="flex items-center gap-3 mb-8">
                <img
                  src="/dp.jpeg"
                  alt="PV Srinivas"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shrink-0"
                />

                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-black break-words">PV SRINIVAS</h3>
                  <p className="text-sm text-black/60 font-bold break-words">Cloud & Network Engineer</p>
                </div>
              </div>

              <p className="text-black/70 leading-relaxed text-base break-words">
                I'm an Electronics & Communication Engineering student with a strong passion for
                <span className="font-bold"> cloud infrastructure</span> and
                <span className="font-bold"> cybersecurity</span>.
              </p>

              <p className="text-black/70 leading-relaxed text-base break-words">
                I spend my time building security tools, cloud dashboards, and automation scripts — learning by doing.
              </p>

              <p className="text-black/70 leading-relaxed text-base break-words">
                When I'm not coding, I'm exploring CTF challenges, cloud security, networking, and modern infrastructure.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {['Python', 'AWS', 'GCP', 'Linux', 'React', 'Network Security'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-black/5 border border-black/10 text-black text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {traits.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-card bg-card-hover rounded-lg p-5 overflow-hidden break-words">
                    <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center mb-3">
                      <Icon size={16} className="text-black" />
                    </div>
                    <h4 className="font-black text-sm mb-2">{title}</h4>
                    <p className="text-black/60 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-lg p-4 md:p-5 overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:divide-x divide-black/10">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center px-2">
                      <p className="text-2xl font-black">{s.value}</p>
                      <p className="text-black/60 text-xs mt-1 break-words">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
