import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'MPASI.ai - Asisten Pintar Menu MPASI',
    description: 'Buat resep MPASI yang sehat dan bergizi untuk si kecil',
};

export default function RootLayout({ children }) {
    return (
        <html lang="id" className="scroll-smooth">
        <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
