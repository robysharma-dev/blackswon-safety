// File: src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        
        {/* Copyright Section */}
        <p className="text-sm">
          &copy; 2026 Blackswon Safety Services Private Limited. All rights reserved.
        </p>

        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm">
          <p>Email: <a href="mailto:info@blackswon.in" className="hover:text-blue-400 underline">info@blackswon.in</a></p>
          <p>Phone: <a href="tel:+919871333464" className="hover:text-blue-400 underline">+91 987 133 3464</a></p>
        </div>

      </div>
    </footer>
  );
}