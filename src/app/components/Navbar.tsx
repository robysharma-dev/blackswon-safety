// File: src/components/Navbar.tsx
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 absolute top-0 w-full z-50 bg-transparent text-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image 
          src="/logo.png" 
          alt="Blackswon Logo" 
          width={60} 
          height={30} 
          priority
          style={{ width: 'auto', height: 'auto' }}
          className="object-contain"
        />
      </div>

      {/* Menu Items */}
      <ul className="flex gap-8 font-medium text-white text-sm">
        <li className="hover:text-blue-300 cursor-pointer transition-colors">Home</li>
        <li className="hover:text-blue-300 cursor-pointer transition-colors">About</li>
        <li className="hover:text-blue-300 cursor-pointer transition-colors">Products</li>
        <li className="hover:text-blue-300 cursor-pointer transition-colors">Contact</li>
      </ul>
    </nav>
  );
}