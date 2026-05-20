import { useEffect, useRef } from 'react';

const categories = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 72 },
      { name: 'C / C++', level: 75 },
    ],
  },
  {
    label: 'Cloud',
    skills: [
      { name: 'AWS', level: 78 },
      { name: 'Google Cloud', level: 82 },
      { name: 'Docker', level: 70 },
    ],
  },
  {
    label: 'Security',
    skills: [
      { name: 'Network Security', level: 80 },
      { name: 'IAM & Zero Trust', level: 76 },
      { name: 'Penetration Testing', level: 65 },
    ],
  },
  {
    label: 'Systems & Frontend',
    skills: [
      { name: 'Linux', level: 85 },
      { name: 'React', level: 75 },
      { name: 'Bash / Shell', level: 78 },
    ],
  },
];

const techStack = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'AWS', 'GCP', 'Linux', 'Docker', 'Git', 'Nmap', 'C/C++', 'Bash',
];

export default function Skills() {
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
    <section id="skills" className="py-28 px-6 border-t border-black/10">
      <div className="max-w-6xl mx-auto relative">
        <div ref={ref} className="fade-in">
          <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-4">Technical Skills</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            My Expertise
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mb-16">
            A diverse set of tools and technologies I use to build and secure systems.
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-3 mb-14">
            {techStack.map((t) => (
              <div
                key={t}
                className="px-4 py-2 rounded-full bg-black/5 border border-black/10 text-sm font-bold text-black"
              >
                {t}
              </div>
            ))}
          </div>

          {/* Skills by category */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <div key={cat.label} className="bg-card rounded-lg p-6 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <h3 className="text-sm font-black text-black uppercase tracking-wider">
                    {cat.label}
                  </h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-black">{skill.name}</span>
                        <span className="text-xs text-black/60 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-black rounded-full transition-all duration-1000"
                          style={{
                            width: `${skill.level}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
