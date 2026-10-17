const email = "chaithanshivakumar5@gmail.com";
const github = "https://github.com/chaithan5-glitch";
const linkedin = "https://www.linkedin.com/in/chaithan-gowda-021a7a381";

const skills = [
  ["Programming", "Python, JavaScript, C/C++"],
  ["Frontend", "React.js, HTML, CSS, Tailwind CSS, Vite"],
  ["Backend", "Node.js, Express.js, REST APIs"],
  ["Database", "MySQL, MongoDB"],
  ["AI / ML", "Machine Learning, Data Analysis, Generative AI, Prompt Engineering"],
  ["Tools", "Git, GitHub, VS Code, macOS, Jupyter Notebook"],
];

const projects = [
  {
    name: "NestFinder",
    url: "https://github.com/chaithan5-glitch/nestfinder",
    text: "A student housing site for finding PGs, hostels and flats near college. You can search and filter listings, sign in, reset your password by email, save listings and upload properties with images.",
    tech: "HTML, CSS, JavaScript, Node.js, Express, MongoDB, JWT, Nodemailer",
  },
  {
    name: "Event-Vista",
    url: "https://github.com/Abhinavlara/Event-Vista",
    text: "A website for browsing wedding venues, party planners and event spaces, with login, signup and forgot-password pages. Built in a team of four.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    name: "Team Bug Busters",
    url: "https://github.com/Shashank163007/Team-Bug-Busters",
    text: "A team hackathon project with an Android app, a backend, a web front end and a Python sync controller.",
    tech: "Android, Python, web front end",
  },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="grid gap-4 border-t border-white/10 py-12 md:grid-cols-[10rem_1fr] md:gap-10">
      <h2 id={`${id}-title`} className="text-lg font-semibold text-white md:pt-0.5">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-neutral-200">
          {t}
        </li>
      ))}
    </ul>
  );
}

const btn = "inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#14151a]/85 backdrop-blur">
        <nav aria-label="Main" className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="font-semibold text-white no-underline">
            Chaithan
          </a>
          <ul className="flex items-center gap-5 text-sm">
            {["About", "Education", "Skills", "Projects", "Contact"].map((l) => (
              <li key={l} className="hidden sm:block">
                <a href={`#${l.toLowerCase()}`} className="text-neutral-400 no-underline hover:text-white">
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a href="/resume.pdf" className="text-indigo-300 no-underline hover:text-indigo-200">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        <section aria-labelledby="hero-title" className="flex flex-col-reverse items-start gap-8 py-16 sm:py-24 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-indigo-300">B.Tech CSE (AI/ML) student</p>
            <h1 id="hero-title" className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Hi, I&apos;m Chaithan.
            </h1>
            <p className="mt-4 text-lg text-neutral-300">
              I study at Intellipaat School of Technology in Bengaluru. I build web projects and I&apos;m learning
              machine learning.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#projects" className={`${btn} bg-indigo-500 text-white no-underline hover:bg-indigo-400`}>
                View projects
              </a>
              <a href="/resume.pdf" download className={`${btn} border border-white/20 text-white no-underline hover:border-indigo-300`}>
                Download resume
              </a>
              <a href={github} className="px-1 text-neutral-300 hover:text-white">
                GitHub
              </a>
              <a href={linkedin} className="px-1 text-neutral-300 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Add public/profile.jpg to show your photo. Until then the letter shows. */}
          <div
            role="img"
            aria-label="Chaithan"
            className="relative flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-neutral-800 text-5xl font-semibold text-indigo-300 sm:h-44 sm:w-44"
          >
            C
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/profile.jpg)" }}
            />
          </div>
        </section>

        <Section id="about" title="About">
          <p className="max-w-2xl">
            I&apos;m studying computer science with a focus on AI and machine learning. I mostly work in Python and
            JavaScript, and I&apos;ve built a few web projects on my own and with teammates. I&apos;m also interested
            in robotics and mathematics, and I&apos;m looking for internship opportunities.
          </p>
        </Section>

        <Section id="education" title="Education">
          <div className="border-l-2 border-indigo-400/60 pl-5">
            <p className="font-medium text-white">B.Tech in Computer Science and Engineering (AI/ML)</p>
            <p>Intellipaat School of Technology, Bengaluru</p>
            <p className="text-sm text-neutral-400">2025 to 2029 (expected)</p>
          </div>
          <p className="mt-5 mb-2 text-sm text-neutral-400">Coursework</p>
          <Chips items={["Data Structures & Algorithms", "Probability & Statistics", "Modern Frontend Development (React)"]} />
        </Section>

        <Section id="skills" title="Skills">
          <div className="space-y-5">
            {skills.map(([label, items]) => (
              <div key={label}>
                <h3 className="mb-2 text-sm text-neutral-400">{label}</h3>
                <Chips items={items.split(", ")} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <ul className="space-y-4">
            {projects.map((p) => (
              <li key={p.name}>
                <article className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-indigo-300/60">
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                  <p className="mt-2 text-neutral-300">{p.text}</p>
                  <div className="mt-4">
                    <Chips items={p.tech.split(", ")} />
                  </div>
                  <a href={p.url} className="mt-4 inline-block text-sm text-indigo-300 hover:text-indigo-200">
                    View on GitHub
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="certification" title="Certification">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-medium text-white">Advanced Certification in Data Science and AI</p>
            <p className="text-neutral-300">IIT Roorkee</p>
            <a href="https://lnkd.in/p/g5FPWitC" className="mt-2 inline-block text-sm text-indigo-300 hover:text-indigo-200">
              View credential
            </a>
          </div>
        </Section>

        <Section id="learning" title="Learning now">
          <Chips
            items={[
              "Machine learning (NumPy, Pandas, regression)",
              "Data structures and algorithms",
              "Probability and statistics",
            ]}
          />
        </Section>

        <Section id="contact" title="Contact">
          <p>The best way to reach me is by email.</p>
          <a href={`mailto:${email}`} className="mt-2 inline-block break-all text-xl font-medium text-indigo-300 hover:text-indigo-200">
            {email}
          </a>
          <p className="mt-4 flex gap-5">
            <a href={github} className="text-neutral-300 hover:text-white">
              GitHub
            </a>
            <a href={linkedin} className="text-neutral-300 hover:text-white">
              LinkedIn
            </a>
          </p>
        </Section>
      </main>

      <footer className="mx-auto max-w-5xl border-t border-white/10 px-6 py-8 text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} Chaithan
      </footer>
    </>
  );
}
