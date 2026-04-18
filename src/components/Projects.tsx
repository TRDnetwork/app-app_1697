import { motion } from 'framer-motion'

const projects = [
  {
    title: 'TaskFlow',
    description: 'A productivity app that helps teams manage workflows with real-time updates.',
    link: 'https://taskflow.example.com',
  },
  {
    title: 'DesignKit',
    description: 'A Figma plugin that auto-generates design tokens from brand assets.',
    link: 'https://designkit.example.com',
  },
  {
    title: 'DataViz Studio',
    description: 'Interactive dashboard builder for non-technical users with drag-and-drop tools.',
    link: 'https://dataviz.example.com',
  },
]

const Projects = () => {
  return (
    <section
      className="mb-16"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="text-2xl font-semibold text-[#1a1a1a] mb-8 text-center"
        role="heading"
        aria-level="2"
      >
        Featured Projects
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        role="list"
        aria-label="Project list"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            role="listitem"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3
              className="text-xl font-medium text-[#1a1a1a] mb-3"
              // a11y fix: Semantic heading for card (level 3)
              role="heading"
              aria-level="3"
            >
              {project.title}
            </h3>
            <p className="text-[#6b6b6b] mb-4 leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3a5a40] hover:text-[#a3b18a] font-medium inline-flex items-center gap-1 transition-colors"
              // a11y fix: Indicate external link
              aria-label={`View project: ${project.title} (opens in new tab)`}
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
---