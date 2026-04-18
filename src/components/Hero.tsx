import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      className="text-center mb-16"
      aria-labelledby="hero-heading"
    >
      <motion.h1
        id="hero-heading"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4"
        // a11y fix: Ensure heading hierarchy and semantic role
        role="heading"
        aria-level="1"
      >
        Jane Doe
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto"
        // a11y fix: Associate with heading as supporting content
        aria-describedby="hero-heading"
      >
        Full-Stack Developer & UI Designer crafting thoughtful digital experiences
      </motion.p>
    </section>
  )
}

export default Hero
---