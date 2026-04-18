import { useState } from 'react';

const BrandKit = () => {
  const [activeTab, setActiveTab] = useState('colors');

  const colors = [
    { name: 'Background', var: '--bg', value: '#f8f7f5' },
    { name: 'Surface', var: '--surface', value: '#ffffff' },
    { name: 'Text', var: '--text', value: '#1a1a1a' },
    { name: 'Muted', var: '--text-dim', value: '#6b6b6b' },
    { name: 'Accent', var: '--accent', value: '#3a5a40' },
    { name: 'Accent Alt', var: '--accent-alt', value: '#a3b18a' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#f8f7f5] min-h-screen">
      <h1 className="text-4xl font-bold mb-2 text-[#1a1a1a]">TRD Portfolio Brand Kit</h1>
      <p className="text-[#6b6b6b] mb-8">Visual identity system for consistent design language.</p>

      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'colors' ? 'text-[#3a5a40] border-b-2 border-[#3a5a40]' : 'text-[#6b6b6b]'}`}
          onClick={() => setActiveTab('colors')}
        >
          Colors
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'typography' ? 'text-[#3a5a40] border-b-2 border-[#3a5a40]' : 'text-[#6b6b6b]'}`}
          onClick={() => setActiveTab('typography')}
        >
          Typography
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'logo' ? 'text-[#3a5a40] border-b-2 border-[#3a5a40]' : 'text-[#6b6b6b]'}`}
          onClick={() => setActiveTab('logo')}
        >
          Logo
        </button>
      </div>

      {activeTab === 'colors' && (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-[#1a1a1a]">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {colors.map((color) => (
              <div key={color.var} className="flex flex-col items-center">
                <div
                  className="w-24 h-24 rounded-lg shadow-sm mb-2"
                  style={{ backgroundColor: color.value }}
                ></div>
                <div className="text-center">
                  <div className="font-medium text-[#1a1a1a] text-sm">{color.name}</div>
                  <div className="text-[#6b6b6b] text-xs">{color.value}</div>
                  <div className="text-[#6b6b6b] text-xs">{color.var}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'typography' && (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-[#1a1a1a]">Typography</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg text-[#6b6b6b] mb-2">Display Font</h3>
              <h1 className="text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Satoshi Bold
              </h1>
            </div>
            <div>
              <h3 className="text-lg text-[#6b6b6b] mb-2">Body Font</h3>
              <p className="text-xl text-[#1a1a1a]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Satoshi Regular — Clean, modern, highly readable typeface with warm proportions.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-[#6b6b6b] mb-2">Scale</h3>
              <div className="space-y-2">
                <p className="text-4xl font-bold" style={{ fontFamily: 'Satoshi, sans-serif' }}>3rem / 48px</p>
                <p className="text-3xl font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>2.25rem / 36px</p>
                <p className="text-2xl font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>1.5rem / 24px</p>
                <p className="text-lg" style={{ fontFamily: 'Satoshi, sans-serif' }}>1.125rem / 18px</p>
                <p className="text-base" style={{ fontFamily: 'Satoshi, sans-serif' }}>1rem / 16px</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'logo' && (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-[#1a1a1a]">Logo</h2>
          <div className="flex flex-col items-center space-y-6">
            <div className="p-8 bg-white rounded-xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                <rect width="100" height="100" rx="20" fill="#3a5a40"/>
                <text x="50" y="70" font-family="Satoshi, sans-serif" font-weight="700" font-size="60" fill="#f8f7f5" text-anchor="middle">P</text>
              </svg>
            </div>
            <p className="text-center text-[#6b6b6b] max-w-md">
              The logo uses the initial "P" from "Portfolio" in bold Satoshi font, set within a softly rounded square 
              in the primary accent color (#3a5a40), creating a memorable and minimal mark.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandKit;