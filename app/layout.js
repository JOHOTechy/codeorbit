import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: "CodeOrbit | MERN Stack Training for Students",
  description: "Master the MERN stack with CodeOrbit. Professional web development training for students and aspiring developers.",
  keywords: "MERN Stack, Training, Student, Web Development, MongoDB, Express, React, Node",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
