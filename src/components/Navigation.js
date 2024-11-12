'use client';
import { useState } from 'react';
import { Baby, Menu, X } from 'lucide-react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="flex items-center gap-x-2">
                                <Baby className="h-8 w-8 text-primary" />
                                <span className="text-xl font-bold text-primary">MPASI.ai</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <NavLink href="#beranda">Beranda</NavLink>
                            <NavLink href="#fitur">Fitur</NavLink>
                            <NavLink href="#resep">Buat Resep</NavLink>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <MobileNavLink href="#beranda">Beranda</MobileNavLink>
                            <MobileNavLink href="#fitur">Fitur</MobileNavLink>
                            <MobileNavLink href="#resep">Buat Resep</MobileNavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

function NavLink({ href, children }) {
    return (
        <a
            href={href}
            className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
            {children}
        </a>
    );
}

function MobileNavLink({ href, children }) {
    return (
        <a
            href={href}
            className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
        >
            {children}
        </a>
    );
}
