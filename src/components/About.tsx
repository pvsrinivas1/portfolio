import { useEffect, useRef } from 'react';
import { Code2, Shield, Cloud, Zap } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '3', label: 'Certifications' },
  { value: '2+', label: 'Years Learning' },
  { value: '∞', label: 'Curiosity' },
];

const traits = [
  {
    icon: Shield,
    title: 'Security First',
    desc: 'Every system I build is designed with security as a first principle, not an afterthought.',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    desc: 'Deep hands-on experience with AWS & GCP, building resilient cloud architectures.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Writing readable, maintainable code that solves real problems elegantly.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    desc: 'Rapidly acquiring new skills and adapting to emerging technologies.',
  },
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
    <section id="about" className="py-28 px-6 border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in">
          <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-4">About Me</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Who I Am
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mb-16">
            A passionate ECE student dedicated to building the intersection of hardware and cloud security.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: bio */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-16 rounded-lg bg-black text-white flex items-center justify-center text-xl font-black">
                  PV
                </div>
                <div>
                  <h3 className="text-xl font-black">PV Srinivas</h3>
                  <p className="text-sm text-black/60 font-bold">ECE Student & Developer</p>
                </div>
              </div>

              <p className="text-black/70 leading-relaxed text-base">
                I'm an Electronics & Communication Engineering student with a strong passion for
                <span className="font-bold"> cloud infrastructure</span> and
                <span className="font-bold"> cybersecurity</span>. My academic background in circuits and signals gives me a unique low-level perspective on how systems behave.
              </p>

              <p className="text-black/70 leading-relaxed text-base">
                I spend my time building security tools, cloud dashboards, and automation scripts — learning by doing. Certifications in Google Cloud and AWS IAM back up my hands-on work in identity management and threat modeling.
              </p>

              <p className="text-black/70 leading-relaxed text-base">
                When I'm not coding, I'm exploring CTF challenges, reading about zero-trust architectures, or contributing to open-source security projects.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {['Python', 'AWS', 'GCP', 'Linux', 'React', 'Network Security'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-black/5 border border-black/10 text-black text-xs font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: traits grid + stats */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {traits.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="bg-card bg-card-hover rounded-lg p-5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center mb-3">
                      <Icon size={16} className="text-black" />
                    </div>
                    <h4 className="font-black text-sm mb-2">{title}</h4>
                    <p className="text-black/60 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Stats strip */}
              <div className="bg-card rounded-lg p-5">
                <div className="grid grid-cols-4 divide-x divide-black/10">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center px-3">
                      <p className="text-2xl font-black">{s.value}</p>
                      <p className="text-black/60 text-xs mt-1">{s.label}</p>
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
