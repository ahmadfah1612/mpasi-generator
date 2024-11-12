'use client';
import RecipeForm from './RecipeForm';
import RecipeResult from './RecipeResult';

export default function RecipeSection({ onSubmit, loading, recipe }) {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Buat Resep MPASI
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Masukkan bahan-bahan yang tersedia dan usia si kecil
                    </p>
                </div>

                {/* Single card with subtle shadow */}
                <div
                    className="bg-white rounded-[24px] p-8"
                    style={{
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.02)'
                    }}
                >
                    <RecipeForm onSubmit={onSubmit} loading={loading} />
                    {recipe && <RecipeResult recipe={recipe} />}
                </div>
            </div>
        </section>
    );
}
