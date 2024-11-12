import { ChefHat, Baby, Clock, Heart } from 'lucide-react';

export default function Features() {
    const features = [
        {
            name: 'Mudah Dibuat',
            description: 'Resep yang simpel dan praktis untuk dibuat di rumah',
            icon: ChefHat,
        },
        {
            name: 'Bergizi Seimbang',
            description: 'Nutrisi lengkap untuk tumbuh kembang optimal',
            icon: Heart,
        },
        {
            name: 'Sesuai Usia',
            description: 'Tekstur dan porsi yang tepat sesuai usia bayi',
            icon: Baby,
        },
        {
            name: 'Cepat & Praktis',
            description: 'Dapatkan resep dalam hitungan detik',
            icon: Clock,
        }
    ];

    return (
        <div id="fitur" className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-lg font-semibold text-primary">Fitur Unggulan</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Semua yang Anda Butuhkan untuk MPASI
                    </p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        Dapatkan resep MPASI terbaik dengan bantuan AI yang diintegrasikan dengan panduan dari ahli gizi.
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative group">
                                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity blur" />
                                <div className="relative bg-white p-6 rounded-lg shadow-sm">
                                    <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-primary/10 p-2">
                      <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </span>
                                    </div>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

