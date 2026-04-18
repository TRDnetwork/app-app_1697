import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="min-h-screen bg-[#f8f7f5] text-[#1a1a1a] font-sans leading-relaxed"
      style={{ fontFamily: 'Satoshi, sans-serif' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        aria-label="Main content" // a11y fix: Landmark role for main content
      >
        <main id="main-content" className="max-w-4xl mx-auto px-6 py-12">
          {children}
        </main>
      </motion.div>
    </div>
  )
}

export default Layout
---