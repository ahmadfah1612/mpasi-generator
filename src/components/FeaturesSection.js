import { Shield, Clock, Heart, Apple } from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            icon: Shield,
            title: "Aman & Terpercaya",
            description: "Resep disesuaikan dengan panduan WHO dan rekomendasi ahli gizi"
        },
        {
            icon: Clock,
            title: "Cepat & Praktis",
            description: "Dapatkan resep MPASI dalam hitungan detik"
        },
        {
            icon: Heart,
            title: "Sesuai Usia",
            description: "Tekstur dan porsi disesuaikan dengan usia si kecil"
        },
        {
            icon: Apple,
            title: "Bergizi Seimbang",
            description: "Memenuhi kebutuhan nutrisi untuk tumbuh kembang optimal"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Mengapa Menggunakan MPASI.ai?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kami membantu Bunda membuat menu MPASI yang tepat untuk si kecil
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-pink-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
                        >
                            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                <feature.icon className="w-6 h-6 text-pink-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
