const About = () => {
  return (
    <section
      className="mb-16"
      aria-labelledby="about-heading"
    >
      <h2
        id="about-heading"
        className="text-2xl font-semibold text-[#1a1a1a] mb-6 border-b pb-2 border-[#e0e0e0] inline-block"
        // a11y fix: Semantic heading (level 2) in document flow
        role="heading"
        aria-level="2"
      >
        About Me
      </h2>
      <p
        className="text-[#6b6b6b] leading-7"
        // a11y fix: Associate paragraph with section heading
        aria-labelledby="about-heading"
      >
        I'm a passionate developer with over 5 years of experience building scalable web
        applications. I specialize in React, TypeScript, and modern CSS practices. When I'm
        not coding, you can find me hiking, reading design books, or contributing to open-source
        projects. I believe in clean code, intuitive interfaces, and continuous learning.
      </p>
    </section>
  )
}

export default About
---