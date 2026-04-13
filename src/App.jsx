import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import motivateMeImg from './assets/motivateme.png';
import manaWatchImg from './assets/manawatch.png';
import toDoListerImg from './assets/todolister.png';
import legacyPortImg from './assets/legacyPort.png';
import steadilyImg from './assets/steadily.png'
import { 
  Github, 
  Linkedin, 
  Mail, 
  X,
  Layout,
  Layers,
  Monitor,
  Database,
  Send,
  Menu,
  Moon,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Cloud,
  Smartphone,
  Palette,
  Award,
  GraduationCap,
  Phone,
  Calendar,
  MapPin
} from 'lucide-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [lightbox, setLightbox] = useState(null); // { src, title } | null
  const formRef = useRef(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const EMAILJS_SERVICE_ID  = 'service_beaxtop';
  const EMAILJS_TEMPLATE_ID = 'template_g5u0c67';
  const EMAILJS_PUBLIC_KEY  = 'lPKW1dm4q9W6jNRFt';

  const handleFormChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setFormStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => setFormStatus('error'));
  };

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    if (!mq.matches) return;

    const cards = document.querySelectorAll('[data-mobile-card]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      }),
      { threshold: 0.35 }
    );
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const profile = {
    name: "Christian Rojas",
    role: "Full-Stack Web Developer",
    location: "USA / Florida",
    email: "cjrojas72@gmail.com",
    phone: "908-967-8157",
    github: "https://github.com/cjrojas72",
    linkedin: "https://www.linkedin.com/in/christian-rojas-rx441/",
    bio: "Passionate about building modern web applications that are fast, scalable, and enjoyable to use. I love turning ideas into interactive products and continuously learning new technologies to craft better digital experiences.",
  }

  const skillGroups = [
  {
    title: "Frontend Development",
    icon: <Code2 className="text-blue-400" />,
    skills: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Jquery",
      "Angular",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap"
    ]
  },
  {
    title: "Backend & Data",
    icon: <Database className="text-green-400" />,
    skills: [
      "Node.js",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Firestore",
      "AWS Lambda"
    ]
  },
  {
    title: "AI",
    icon: <Sparkles className="text-yellow-400" />,
    skills: [
      "AI-assisted development",
      "Claude Code",
      "Prompt engineering",
      "Rapid prototyping"
    ]
  },
  {
    title: "Engineering Process",
    icon: <Sparkles className="text-purple-400" />,
    skills: [
      "Agile / SCRUM",
      "Stakeholder Collaboration",
      "Requirements Gathering",
      "Mentorship",
      "Performance Optimization",
      "Technical Documentation",
      "CI/CD - Github Actions",
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Monitor className="text-pink-400" />,
    skills: [
      "Git",
      "JIRA",
      "Confluence",
      "Figma",
      "TortoiseSVN",
      "AWS"
    ]
  }
];

const experience = [
  {
    company: "Investcloud, Inc",
    role: "Frontend Web Developer",
    period: "October 2020 - March 2026",
    location: "Tampa, FL",
    highlights: [
      "Developed and maintained features for client, advisor, and administrative financial service portals using HTML, CSS, and JavaScript within an internal component-based framework.",
      "Collaborated with product owners, designers, and business analysts to translate requirements into scalable UI solutions.",
      "Optimized CSS architecture and document page rendering, improving portal performance and load times by approximately 10%.",
      "Identified and resolved defects within PLAID integration workflows, enabling integration teams to deploy the feature without legacy workarounds.",
      "Managed release cycles for multiple portal applications using Release Manager and JIRA, ensuring stable and reliable deployments.",
      "Mentored and trained new developers on internal tools, development workflows, and release processes.",
      "Authored technical documentation in Confluence to improve knowledge sharing and onboarding for new team members."
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery",
      "Angular",
      "JIRA",
      "Confluence",
      "TortoiseSVN",
      "Cl/CD",
      "SCRUM"
    ]
  },
  {
    company: "Best Buy",
    role: "Advanced Repair Agent",
    period: "August 2017 - October 2020",
    location: "Union, NJ / Minot, ND / Orlando, FL",
    highlights: [
      "Diagnosed and resolved hardware, operating system, and software issues across a wide range of consumer devices.",
      "Provided technical troubleshooting and repair services while maintaining high customer satisfaction and service quality.",
      "Led technical workshops and knowledge-sharing sessions to improve troubleshooting skills among team members.",
      "Collaborated with cross-functional teams to resolve complex customer issues and improve service workflows.",
      "Maintained accountability for repair quality, turnaround times, and customer communication throughout the service lifecycle."
    ],
    tech: [
      "Hardware Troubleshooting",
      "Operating Systems",
      "Technical Support",
      "Customer Service",
      "Problem Solving"
    ]
  }
];
  const education = [
    {
      school: "Rutgers University - Newark",
      degree: "Bachelor of Arts - Information Systems",
      period: "2015 - 2018",
      gpa: "",
      focus: ""
    },
  ];

  const certifications = [
    "Certificate of Full-Stack Web Development - Kenzie Academy",
    "Agile Development Practices",
  ];

 const projects = [
  {
    title: "Steadily",
    description: "Full-stack personal finance app with a React frontend and a Python AWS Lambda backend.",
    highlights: [
      "Delivered a responsive React + Tailwind finance dashboard for budgeting, transactions, and analytics",
      "Engineered a serverless Python backend on AWS Lambda with API Gateway and Supabase Postgres",
      "Implemented secure JWT auth, payload normalization, and event-driven UI sync for a more reliable experience",
      "Established GitHub Actions CI/CD to automate frontend deployment to S3 + CloudFront and backend Lambda updates"
    ],
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "Python",
      "Supabase",
      "AWS Lambda"
    ],
    link: "https://d17qicjfvn0awy.cloudfront.net/",
    github: "https://github.com/cjrojas72/steadily",
    image: steadilyImg,
    gradient: "from-blue-600/20 to-cyan-600/20"
  },
  {
    title: "MotivateME",
    description: "AI-powered motivational chatbot built with React and Puter.ai.",
    highlights: [
      "Implemented streaming AI responses for real-time conversational feedback",
      "Designed a lightweight serverless architecture using Puter KV storage",
      "Built client-side caching to reduce repeated API requests and improve performance",
    ],
    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Puter.js",
      "AI APIs"
    ],
    link: "https://motivatemecr.vercel.app/",
    github: "https://github.com/cjrojas72/motivateMe/tree/main/client",
    image: motivateMeImg,
    gradient: "from-blue-600/20 to-cyan-600/20"
  },
  {
    title: "ManaWatch",
    description: "Magic: The Gathering card price tracker and analytics dashboard.",
    highlights: [
      "Built interactive data visualizations to track card value trends over time",
      "Implemented API-driven data fetching and client-side filtering for fast search and analysis",
      "Designed a responsive dashboard UI optimized for exploring large card datasets",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "Firestore",
      "Scryfall API",
      "MTGJSON GraphQL API"
    ],
    link: "https://manawatch.vercel.app/",
    github: "https://github.com/cjrojas72/manawatch",
    image: manaWatchImg,
    gradient: "from-blue-600/20 to-cyan-600/20"
  },
  {
    title: "Legacy Portfolio Site",
    description: "Personal portfolio site showcasing early projects and web development skills.",
    highlights: [
      "Built a fully responsive portfolio site using HTML, CSS, and JavaScript",
      "Highlighted personal projects, skills, and contact info in a clean, user-friendly layout"
    ],
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "Responsive Design"
    ],
    link: "https://cjrojas72.github.io/Christian-Rojas/",
    github: "https://github.com/cjrojas72/Christian-Rojas",
    image: legacyPortImg,
    gradient: "from-emerald-600/20 to-teal-600/20"
  }
];

  const scrollToTarget = (item) => {
    console.log(item);
    const element = document.getElementById(item.toLowerCase());
    const pos = element.offsetTop;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", 
        top: pos - 200,    
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans antialiased">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full z-0" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full z-0" />

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-[#030303]/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <img src="/cr-logo.svg" alt="CR Logo" className="w-10 h-10 shadow-lg shadow-blue-500/20" />
          <span className="font-bold tracking-tight text-xl">Chris<span className="text-blue-400">.dev</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Experience', 'Projects', 'Education'].map(item => (
            <button 
              key={item}
              onClick={() => scrollToTarget(item)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
          <button 
            onClick = {() => scrollToTarget("contact")}
            className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-blue-50 transition-all active:scale-95 cursor-pointer">
            Contact
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}><Menu size={24} /></button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[65px] left-0 right-0 z-40 bg-[#030303]/95 backdrop-blur-xl border-b border-white/5 flex flex-col px-6 py-6 gap-4 md:hidden">
          {['About', 'Skills', 'Experience', 'Education'].map(item => (
            <button
              key={item}
              onClick={() => { scrollToTarget(item); setIsOpen(false); }}
              className="text-left text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer py-2"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => { scrollToTarget('contact'); setIsOpen(false); }}
            className="mt-2 px-5 py-3 bg-white text-black rounded-full text-sm font-bold hover:bg-blue-50 transition-all active:scale-95 cursor-pointer w-full"
          >
            Contact
          </button>
        </div>
      )}

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-10 pb-24">
        
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center mb-30">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold mb-8 w-fit">
            <Sparkles size={12} /> OPEN FOR NEW OPPORTUNITIES
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-400">
              {profile.name}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-medium mb-10 max-w-2xl leading-relaxed">
            {profile.role}. <span className="text-gray-600">{profile.bio}</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick = {() => scrollToTarget("contact")}
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 cursor-pointer">
              Get in Touch <Phone size={18} />
            </button>
            <button 
              onClick = {() => scrollToTarget("projects")}
              className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-blue-600/20 cursor-pointer">
              View My Work <ArrowUpRight size={18} />
            </button>
            <div className="flex items-center gap-6 ml-4">
              <a href={profile.github} className="text-gray-500 hover:text-white transition-colors"><Github size={24} /></a>
              <a href={profile.linkedin} className="text-gray-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="mb-32">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <div className="h-px w-12 bg-blue-500" /> Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, i) => (
              <div key={i} data-mobile-card className="skill-card bg-white/[0.03] border border-white/5 p-6 rounded-[2rem] hover:bg-white/[0.05] transition-all group">
                <div className="skill-icon w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="font-bold mb-4 text-lg">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <span key={j} className="skill-tag text-[10px] uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 text-gray-500 group-hover:text-blue-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <div className="h-px w-12 bg-blue-500" /> Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
                <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-1">{exp.company}</h3>
                    <p className="text-xl font-bold">{exp.role}</p>
                  </div>
                  <div className="text-right text-gray-500 font-medium">
                    <div className="flex items-center md:justify-end gap-2 mb-1"><Calendar size={14} /> {exp.period}</div>
                    <div className="flex items-center md:justify-end gap-2"><MapPin size={14} /> {exp.location}</div>
                  </div>
                </div>
                <ul className="space-y-4 mb-10">
                  {exp.highlights.map((item, j) => (
                    <li key={j} className="flex gap-4 text-gray-400 leading-relaxed">
                      <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, k) => (
                    <span key={k} className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <section id="education" className="mb-32">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <div className="h-px w-12 bg-blue-500" /> Education
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <GraduationCap className="text-blue-500" /> Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem]">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-lg leading-tight max-w-[70%]">{edu.school}</h3>
                      <span className="text-blue-400 font-bold text-sm">{edu.gpa}</span>
                    </div>
                    <p className="text-blue-300 text-sm font-bold mb-2">{edu.degree}</p>
                    <p className="text-gray-500 text-xs mb-4 uppercase tracking-widest">{edu.period}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{edu.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <Award className="text-blue-500" /> Certifications
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-blue-500/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="font-bold text-gray-300 group-hover:text-white transition-colors">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <div className="h-px w-12 bg-blue-500" /> Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                data-mobile-card
                className="project-card group flex flex-col bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.04] transition-all"
              >

                {/* Project Image */}
                <div
                  className={`aspect-video w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden border-b border-white/5 cursor-zoom-in`}
                  onClick={() => setLightbox({ src: project.image, title: project.title })}
                >
                  {/* Screenshot */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-image absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)]" />

                  {/* Hover Buttons */}
                  <div className="card-hover-buttons absolute bottom-4 left-6 right-6 flex justify-between items-center z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all"
                      >
                        <Github size={18} />
                      </a>

                      <a
                        href={project.link}
                        className="p-2.5 rounded-xl bg-blue-600 border border-blue-400 text-white hover:bg-blue-500 transition-all"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="card-title text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-8 flex-grow">
                    {project.highlights.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-500 text-sm leading-relaxed">
                        <div className="mt-2 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="card-tech-tag px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-500 text-[10px] font-bold uppercase tracking-widest group-hover:text-blue-300 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-32">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <div className="h-px w-12 bg-blue-500" /> Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h3 className="text-4xl font-black mb-6">Let's Connect</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  I'm always excited to work on new projects and collaborate with amazing people. Feel free to reach out if you have any questions or just want to say hello!
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: <Mail size={20} />, label: "Email", value: profile.email, href: `mailto:${profile.email}`, newTab: false },
                  { icon: <Phone size={20} />, label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, newTab: false },
                  { icon: <Linkedin size={20} />, label: "LinkedIn", value: "Christian Rojas", href: profile.linkedin, newTab: true }
                ].map((item, i) => (
                  <a key={i} href={item.href} target={item.newTab ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-blue-500/20 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-lg font-bold text-gray-200">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Follow Me</h4>
                <div className="flex gap-4">
                  <a href={profile.github} target="_blank" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                    <Github size={24} />
                  </a>
                  <a href={profile.linkedin} target="_blank" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2.5rem] relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full -z-10" />
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              <form ref={formRef} className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleFormChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleFormChange}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleFormChange}
                    placeholder="What's this about?"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formState.message}
                    onChange={handleFormChange}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <p className="text-green-400 text-sm font-bold text-center">Message sent! I'll get back to you soon.</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-400 text-sm font-bold text-center">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-xl active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={18} /> {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/5 text-center sm:text-left">
          <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-gray-300">
            <p>© {new Date().getFullYear()} Christian Rojas. ALL RIGHTS RESERVED.</p>
            <p>BUILT WITH REACT, TAILWIND & EmailJs </p>
          </div>
        </footer>
      </main>
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full h-auto block"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-bold text-lg">{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;