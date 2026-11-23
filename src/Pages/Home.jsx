import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import {
  
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  MapPin,
  Moon,
  Sun,
} from "lucide-react";

const skills = [
  "React",
  "JavaScript",
  "HTML & CSS",
  "Python",
  "Django",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Vite",
];

const projects = [
  {
    name: "Urban Nest",
    category: "PROPERTY BOOKING PLATFORM",
    description:
      "A property booking platform designed to make finding and managing apartments simpler.",
    style: "urban",
    link: null,
  },
  {
    name: "Karia Medical",
    category: "HEALTHCARE WEBSITE",
    description:
      "A modern healthcare website focused on making medical services easier to discover.",
    style: "medical",
    link: "https://karia-lovat.vercel.app/",
  },
  {
    name: "Project Hub",
    category: "DEVELOPER RESOURCE PLATFORM",
    description:
      "A platform for organizing development projects, learning resources and career opportunities.",
    style: "hub",
    link: "https://akingori371-oss.github.io/project-hub/index.html",
  },
];

function Navbar({ dark, setDark }) {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f7f3]/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#111411]/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-4">
        <a href="#home" className="flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#244b35] font-serif text-xl font-bold text-white">
            AK
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-wide">
              Anthony Kingori Kiarie
            </span>
            <span className="text-xs text-[#777b73] dark:text-[#a3a99f]">
              Software Engineer
            </span>
          </span>
        </a>

        <div className="flex items-center gap-4 sm:gap-7">
          <div className="flex items-center gap-3 font-nav text-xs font-medium sm:gap-6 sm:text-sm">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="transition-colors hover:text-[#54845e]"
              >
                {link}
              </a>
            ))}
          </div>

          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle colour theme"
            className="rounded-full border border-black/10 p-2 transition hover:bg-[#e9e9e2] dark:border-white/15 dark:hover:bg-white/10"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[650px] max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2"
    >
      <div>
        <div className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#54845e]">
          <span className="h-px w-10 bg-[#54845e]" />
          SOFTWARE ENGINEER
        </div>

        <h1 className="max-w-2xl font-serif text-5xl leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
          Building digital experiences with{" "}
          <span className="italic text-[#54845e]">purpose.</span>
        </h1>

        <p className="mt-7 max-w-lg text-base leading-8 text-[#71766e] dark:text-[#a7ada4]">
          I'm Anthony Kingori Kiarie. I enjoy turning ideas into thoughtful,
          functional and user-focused digital experiences through code.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 rounded-md bg-[#244b35] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#315e43]"
          >
            View My Projects <ArrowUpRight size={17} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-md border border-black/15 px-6 py-4 text-sm font-medium transition hover:border-[#54845e] dark:border-white/20"
          >
            Contact Me <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="relative flex min-h-[390px] items-center justify-center">
        <div className="absolute right-4 top-5 h-64 w-64 rounded-full bg-[#7b9c78]/15 blur-3xl" />
        <div className="absolute bottom-5 left-5 h-48 w-48 rounded-full bg-[#54845e]/15 blur-3xl" />

        <div className="relative w-full max-w-md rounded-xl border border-black/10 bg-[#eeeee8] p-3 shadow-2xl shadow-black/10 dark:border-white/10 dark:bg-[#1b211c]">
          <div className="flex items-center gap-2 border-b border-black/10 px-3 pb-3 dark:border-white/10">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d58a76]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#d5b66f]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#83a77b]" />
            <span className="ml-auto text-xs text-[#898e84]">
              building-with-purpose.jsx
            </span>
          </div>

          <div className="space-y-5 px-5 py-8 font-mono text-sm sm:px-8 sm:py-10">
            <p className="text-[#8b9287]">// A little about my approach</p>
            <p>
              <span className="text-[#54845e]">const</span>{" "}
              <span className="text-[#b17b45]">developer</span> = {"{"}
            </p>
            <div className="space-y-3 pl-6">
              <p>
                name: <span className="text-[#54845e]">"Anthony"</span>,
              </p>
              <p>
                focus: <span className="text-[#54845e]">"Web Development"</span>,
              </p>
              <p>
                mindset: <span className="text-[#54845e]">"Keep Building"</span>,
              </p>
              <p>
                passion: <span className="text-[#54845e]">"Problem Solving"</span>
              </p>
            </div>
            <p>{"};"}</p>
            <div className="flex items-center gap-2 pt-3 text-[#54845e]">
              <Code2 size={17} />
              <span className="text-xs">Turning ideas into reality.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const details = [
    { icon: BriefcaseBusiness, text: "Software Engineer" },
    { icon: GraduationCap, text: "Zindua Graduate 2026" },
    { icon: MapPin, text: "Based in Kenya" },
  ];

  return (
    <section
      id="about"
      className="border-y border-black/5 bg-[#eeeee8] dark:border-white/5 dark:bg-[#191e19]"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-[#54845e]">
            A LITTLE ABOUT ME
          </p>
          <h2 className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            Passionate about building software.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#71766e] dark:text-[#a7ada4]">
            I am interested in building practical software that solves
            real-world problems. I enjoy learning new technologies, exploring
            ideas and creating digital experiences that are useful, accessible
            and thoughtfully designed.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-7 md:pl-10">
          {details.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dce7d9] text-[#315e43] dark:bg-[#293c2d] dark:text-[#9dbb9c]">
                <Icon size={19} />
              </span>
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#54845e]">
          WHAT I WORK WITH
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl">My Skills</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#71766e] dark:text-[#a7ada4]">
          Technologies and tools I use to design, develop and build web
          applications.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex min-h-24 items-center justify-center rounded-lg border border-black/10 bg-white px-3 text-center text-sm font-semibold transition hover:-translate-y-1 hover:border-[#54845e] dark:border-white/10 dark:bg-[#191e19]"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectPreview({ style }) {
  const previewStyles = {
    urban: "from-[#d9e4d6] to-[#a9c0a5]",
    medical: "from-[#dce8e9] to-[#a9c4c7]",
    hub: "from-[#e8e1d4] to-[#c9bda8]",
  };

  return (
    <div
      className={`relative flex h-56 items-center justify-center overflow-hidden rounded-t-lg bg-gradient-to-br ${previewStyles[style]}`}
    >
      <div className="w-[78%] rounded-lg border border-black/10 bg-white/90 p-4 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-serif text-sm font-bold text-[#263a2b]">
            {style === "urban"
              ? "urban nest."
              : style === "medical"
                ? "Karia Medical"
                : "Project Hub"}
          </span>
          <span className="h-2 w-12 rounded-full bg-[#c7d4c3]" />
        </div>
        <div className="grid grid-cols-[1fr_0.8fr] gap-3">
          <div className="space-y-2">
            <div className="h-3 w-full rounded bg-[#a7b9a2]" />
            <div className="h-2 w-4/5 rounded bg-[#d5ddd1]" />
            <div className="h-2 w-3/5 rounded bg-[#d5ddd1]" />
            <div className="mt-3 h-6 w-20 rounded bg-[#315e43]" />
          </div>
          <div className="rounded-md bg-[#d6dfd2] p-2">
            <div className="h-full min-h-16 rounded bg-[#a7b9a2]/70" />
          </div>
        </div>
      </div>
      <span className="absolute bottom-3 right-4 text-[10px] font-semibold tracking-widest text-[#263a2b]/70">
        PROJECT PREVIEW
      </span>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-black/5 bg-[#eeeee8] dark:border-white/5 dark:bg-[#191e19]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#54845e]">
              SELECTED WORK
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl">
              Featured Projects
            </h2>
          </div>
          <a
            href="https://github.com/akingori371-oss"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#54845e] hover:underline"
          >
            View GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-lg border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#111611]"
            >
              <ProjectPreview style={project.style} />

              <div className="p-6">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-[#54845e]">
                  {project.category}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{project.name}</h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-[#71766e] dark:text-[#a7ada4]">
                  {project.description}
                </p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#54845e] hover:underline"
                  >
                    View Project <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#777b73] dark:text-[#a7ada4]">
                    Case study in progress
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-xl bg-[#244b35] px-7 py-14 text-white sm:px-14 sm:py-16">
        <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-[#c0d5bd]">
          HAVE A PROJECT IN MIND?
        </p>
        <div className="flex flex-col justify-between gap-9 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            Let's build something great together.
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/anthonykingori/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#244b35] transition hover:bg-[#e9eee6]"
            >
              <FaLinkedin size={17} /> Get in Touch
            </a>
            <a
              href="https://github.com/akingori371-oss"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center justify-center rounded-md border border-white/30 p-3 transition hover:bg-white/10"
            >
              <FaGithub size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-9 sm:flex-row sm:items-center">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#244b35] font-serif text-lg font-bold text-white">
            AK
          </span>
          <span>
            <span className="block text-sm font-semibold">
              Anthony Kingori Kiarie
            </span>
            <span className="text-xs text-[#777b73] dark:text-[#a7ada4]">
              Software Engineer
            </span>
          </span>
        </a>

        <div className="flex gap-5">
          <a
            href="https://github.com/akingori371-oss"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[#777b73] transition hover:text-[#54845e]"
          >
            <FaGithub size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/anthonykingori/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[#777b73] transition hover:text-[#54845e]"
          >
            <FaLinkedin size={19} />
          </a>
        </div>

        <p className="text-xs text-[#777b73] dark:text-[#a7ada4]">
          © {new Date().getFullYear()} Anthony Kingori Kiarie.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-[#f8f7f3] text-[#20251f] transition-colors duration-300 dark:bg-[#111411] dark:text-[#f1f1eb]">
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
