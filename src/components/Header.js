'use client';
import { Milk, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-3">
                        <div className="bg-pink-100 p-2 rounded-full">
                            <Milk className="w-8 h-8 text-pink-600" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">MPASI.ai</h1>
                            <p className="text-sm text-gray-500 hidden sm:block">Asisten Pintar MPASI</p>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <a href="#beranda" className="text-gray-600 hover:text-pink-600">Beranda</a>
                        <a href="#panduan" className="text-gray-600 hover:text-pink-600">Panduan MPASI</a>
                        <a href="#resep" className="text-gray-600 hover:text-pink-600">Resep</a>
                        <a href="#tentang" className="text-gray-600 hover:text-pink-600">Tentang</a>
                    </nav>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden pb-4">
                        <nav className="flex flex-col space-y-4">
                            <a href="#beranda" className="text-gray-600 hover:text-pink-600">Beranda</a>
                            <a href="#panduan" className="text-gray-600 hover:text-pink-600">Panduan MPASI</a>
                            <a href="#resep" className="text-gray-600 hover:text-pink-600">Resep</a>
                            <a href="#tentang" className="text-gray-600 hover:text-pink-600">Tentang</a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
