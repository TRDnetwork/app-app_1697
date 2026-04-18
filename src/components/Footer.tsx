const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#e0e0e0] py-6 mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-sm text-[#6b6b6b]">
        <p>
          &copy; {new Date().getFullYear()} Jane Doe. Crafted with care using React & Vite.
        </p>
      </div>
    </footer>
  )
}

export default Footer