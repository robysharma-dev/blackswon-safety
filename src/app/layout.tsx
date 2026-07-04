// File: src/app/layout.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./globals.css";

export const metadata = {
  title: 'Blackswon Safety Services',
  description: 'Your trusted partner in safety products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}