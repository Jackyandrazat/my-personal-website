import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import NavbarComponent from "../components/NavbarComponent";
import CardList  from "../components/CardListComponent";
import SkillsGrid  from "../components/SkillGridComponent";
import ContactMe  from "../components/ContactComponent";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-30 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <NavbarComponent />
        <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
          {/* Heading */}
          <h1 className="text-5xl font-bold ">
            Hi, I am <span className="">Jacky Andrazat.</span>
          </h1>

          {/* Subheading */}
          <h2 className="mt-2 text-3xl font-bold uppercase text-primary">
            A Full Stack Web Developer.
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-2xl">
            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis
            perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus
            modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores
            minima consectetur.
          </p>

          {/* Buttons & Social Links */}
          <div className="mt-6 flex items-center space-x-4">
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              className="px-6 py-2 border-2 border-primary font-semibold rounded-md hover:bg-primary hover:text-white transition"
            >
              Resume
            </a>

            {/* GitHub Icon */}
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <svg
                className="w-8 h-8 text-info hover:text-primary transition"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.285-.01-1.043-.016-2.05-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.086 1.84 1.237 1.84 1.237 1.07 1.835 2.805 1.304 3.487.998.108-.775.418-1.304.762-1.603-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.221-.125-.303-.536-1.521.117-3.168 0 0 1.007-.322 3.3 1.23.96-.267 1.987-.4 3.009-.404 1.022.004 2.05.137 3.011.404 2.291-1.552 3.296-1.23 3.296-1.23.655 1.647.244 2.865.12 3.168.77.841 1.235 1.911 1.235 3.221 0 4.611-2.805 5.624-5.478 5.921.43.372.823 1.103.823 2.223 0 1.605-.014 2.898-.014 3.293 0 .32.19.694.8.576C20.565 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <svg
                className="w-8 h-8 text-info hover:text-primary transition"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.452 20.452h-3.795v-5.569c0-1.328-.028-3.038-1.854-3.038-1.855 0-2.141 1.45-2.141 2.948v5.659H8.867V9h3.638v1.561h.052c.509-.963 1.753-1.976 3.609-1.976 3.859 0 4.574 2.539 4.574 5.843v6.024zM4.516 7.433c-1.223 0-2.216-.993-2.216-2.216S3.293 3 4.516 3c1.223 0 2.216.993 2.216 2.217s-.993 2.216-2.216 2.216zM6.411 20.452H2.621V9h3.79v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.207 0 22.225 0z"
                />
              </svg>
            </a>
          </div>

          {/* Projects Section Title */}
          <h1 className="text-4xl font-extrabold uppercase mb-10 mt-10">Projects</h1>
          <CardList />

          <h1 className="text-4xl font-extrabold uppercase mb-10 mt-10">Skills</h1>
          <SkillsGrid />
          <ContactMe />
        </section>
      </div>
    </main>
  );
}
