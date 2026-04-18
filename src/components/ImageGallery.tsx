{/* Placeholder component for future AI-generated image display */}
{/* Not used in MVP */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
      Generated {i + 1}
    </div>
  ))}
</div>
---