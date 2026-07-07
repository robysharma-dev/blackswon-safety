// File: src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Address Section */}
        <div className="space-y-4">
          <h4 className="text-white font-black uppercase tracking-widest text-sm">Headquarters</h4>
          <p className="text-sm leading-relaxed">
            Plot No. 335, Defence Colony,<br />
            Near Honda Chowk, Khandsa, Gurugram,<br />
            Sadar Bazar, Haryana, India (122001)
          </p>
        </div>

        {/* Navigation Section */}
        <div className="space-y-4">
          <h4 className="text-white font-black uppercase tracking-widest text-sm">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Home</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">About</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Products</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-white font-black uppercase tracking-widest text-sm">Connect</h4>
          <div className="text-sm space-y-2">
            <p>Email: <a href="mailto:info@blackswon.in" className="hover:text-blue-400 underline">info@blackswon.in</a></p>
            <p>Phone: <a href="tel:+919871333464" className="hover:text-blue-400 underline">+91 987 133 3464</a></p>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs gap-4 text-gray-500">
        <p>&copy; 2026 Blackswon Safety Services Private Limited. All rights reserved.</p>
        <p>
          Design by{' '}
          <a 
            href="https://www.arisysglobal.xyz/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-white transition-colors"
          >
            Arisys Global
          </a>
        </p>
      </div>
    </footer>
  );
}