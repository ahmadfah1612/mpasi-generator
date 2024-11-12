import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span>Tentang Kami</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span>Kebijakan Privasi</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span>Syarat & Ketentuan</span>
                        </a>
                    </div>
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        © 2024 MPASI.ai. Dibuat dengan{' '}
                        <Heart className="inline-block h-4 w-4 text-red-500" /> untuk si kecil.
                    </p>
                </div>
            </div>
        </footer>
    );
}
