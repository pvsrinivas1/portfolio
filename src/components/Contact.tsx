import { useEffect, useRef, useState } from 'react';
import { MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

const socials = [
  {
    label: 'GitHub',
    value: '@pvsrinivas1',
    href: 'https://github.com/pvsrinivas1',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'PV Srinivas',
    href: 'https://linkedin.com/in/pv-srinivas',
    icon: Linkedin,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        }),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:pvsrinivas@outlook.in?subject=${subject}&body=${body}`;

    setSent(true);

    setForm({
      name: '',
      email: '',
      message: '',
    });

    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-4 md:px-6 border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="fade-in">

          <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight break-words">
            Let's Connect
          </h2>

          <p className="text-base md:text-lg text-black/60 max-w-2xl mb-12 md:mb-16">
            Open to internships, collaborations, or just a good tech conversation.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Left Side */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              <div className="bg-card rounded-lg p-5 md:p-7 overflow-hidden">
                <div className="flex items-center gap-3 mb-5">
                  <MessageSquare size={18} />
                  <h3 className="font-black">Get in touch</h3>
                </div>

                <p className="text-black/70 text-sm leading-relaxed mb-6">
                  Whether you have a project idea, an opportunity, or just want
                  to chat about cloud security — my inbox is always open.
                </p>

                <div className="flex items-center gap-2 text-black/70 text-sm">
                  <MapPin size={14} />
                  <span>India · Open to Remote</span>
                </div>
              </div>

              {socials.map((s) => {
                const Icon = s.icon;

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card bg-card-hover rounded-lg p-4 flex items-center gap-4 overflow-hidden"
                  >
                    <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-black/60 mb-1 font-bold">
                        {s.label}
                      </p>

                      <p className="text-sm font-bold text-black break-words">
                        {s.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-lg p-5 md:p-8 h-full overflow-hidden">

                {sent ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">

                    <div className="w-16 h-16 rounded-lg bg-black text-white flex items-center justify-center mb-4 text-2xl">
                      ✓
                    </div>

                    <h3 className="text-xl font-black mb-2">
                      Message Sent!
                    </h3>

                    <p className="text-black/70 text-sm">
                      Your email app should open now.
                    </p>

                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-sm font-bold text-black hover:opacity-60 transition-opacity"
                    >
                      Send another message
                    </button>

                  </div>
                ) : (

                  <form onSubmit={handleSubmit} className="space-y-5">

                    <h3 className="font-black mb-6">
                      Send a message
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                      <div>
                        <label className="block text-xs font-bold text-black/60 mb-1.5 uppercase tracking-wide">
                          Your Name
                        </label>

                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="John Doe"
                          className="w-full bg-white border-2 border-black/10 focus:border-black rounded-lg px-4 py-3 text-sm outline-none font-bold"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-black/60 mb-1.5 uppercase tracking-wide">
                          Email Address
                        </label>

                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="john@example.com"
                          className="w-full bg-white border-2 border-black/10 focus:border-black rounded-lg px-4 py-3 text-sm outline-none font-bold"
                        />
                      </div>

                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black/60 mb-1.5 uppercase tracking-wide">
                        Message
                      </label>

                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Tell me about your project or opportunity..."
                        className="w-full bg-white border-2 border-black/10 focus:border-black rounded-lg px-4 py-3 text-sm outline-none resize-none font-bold"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-black text-white font-black text-sm hover:opacity-90 transition-opacity"
                    >
                      <Send size={15} />
                      Send Message
                    </button>

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
