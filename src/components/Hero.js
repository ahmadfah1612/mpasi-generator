'use client';
import { Heart, Clock, Baby } from 'lucide-react';

export default function Hero() {
    const scrollToRecipe = (e) => {
        e.preventDefault();
        document.getElementById('recipe-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="pt-24 pb-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <div className="space-y-6">
                    <div className="flex justify-center">
                        <div className="bg-purple-100 p-3 rounded-full">
                            <Baby className="w-10 h-10 text-purple-600" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Buat Menu MPASI yang{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Sehat & Bergizi
            </span>
                    </h1>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Resep MPASI yang aman dan bergizi, disesuaikan dengan usia si kecil
                    </p>

                    <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                        <div className="flex items-center">
                            <Heart className="h-5 w-5 text-pink-500 mr-1" />
                            1000+ Resep
                        </div>
                        <div className="flex items-center">
                            <Clock className="h-5 w-5 text-purple-500 mr-1" />
                            Update Tiap Hari
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={scrollToRecipe}
                            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                        >
                            Buat Resep Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
