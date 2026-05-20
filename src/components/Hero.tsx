import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    setTimeout(() => {
      el.classList.add('visible');
    }, 100);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6"
    >

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(2px 2px at 20% 30%, black, rgba(0,0,0,0)), radial-gradient(2px 2px at 60% 70%, black, rgba(0,0,0,0))',
          backgroundSize: '200px 200px',
        }}
      />

      <div className="max-w-6xl mx-auto pt-28 pb-20 w-full relative z-10">

        <div ref={ref} className="fade-in text-center">

          <p className="inline-block border border-black/20 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest mb-8">
            JUST A TECH
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 break-words">
            Hello I'm
            <br />
            <span className="font-black">
              PV Srinivas
            </span>
          </h1>

          <p className="text-base md:text-xl text-black/70 leading-relaxed mb-4 max-w-2xl mx-auto break-words">
            <span className="font-bold">ECE Student</span>
            {' · '}
            <span className="font-bold">Cloud & Network Engineer</span>
            {' · '}
            <span className="font-bold">Developer</span>
          </p>

          <p className="text-sm md:text-lg text-black/60 max-w-2xl mx-auto leading-relaxed mb-12 break-words">
            Building secure and scalable cloud systems with a strong focus on networking, cybersecurity, and modern infrastructure.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">

            <a
              href="#projects"
              className="px-7 py-3 rounded-lg bg-black text-white font-bold text-sm hover:opacity-80 transition-opacity"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-lg border-2 border-black text-black font-bold text-sm hover:bg-black hover:text-white transition-all"
            >
              Get In Touch
            </a>

          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4 flex-wrap">

            {[
              {
                href: 'https://github.com/pvsrinivas1',
                icon: <Github size={20} />,
                label: 'GitHub',
              },
              {
                href: 'https://linkedin.com/in/pv-srinivas',
                icon: <Linkedin size={20} />,
                label: 'LinkedIn',
              },
              {
                href: 'mailto:srinivaspv678@gmail.com',
                icon: <Mail size={20} />,
                label: 'Email',
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-lg border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                {s.icon}
              </a>
            ))}

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center">

          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-black/40 hover:text-black/60 transition-colors"
          >
            <span className="text-xs font-bold tracking-widest uppercase">
              Scroll
            </span>

            <ArrowDown size={16} className="animate-bounce" />
          </a>

        </div>
      </div>
    </section>
  );
}
