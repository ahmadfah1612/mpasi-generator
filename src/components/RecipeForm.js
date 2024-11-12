'use client';
import { useState } from 'react';

export default function RecipeForm({ onSubmit, loading }) {
    const [ingredients, setIngredients] = useState('');
    const [babyAge, setBabyAge] = useState('6');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(ingredients, babyAge);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-blue-600 text-sm">
                    Bahan-bahan Tersedia
                </label>
                <textarea
                    className="mt-2 w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none placeholder-gray-400"
                    rows="4"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="Contoh: wortel, kentang, dada ayam"
                    required
                />
                <p className="mt-2 text-sm text-gray-500">
                    Pisahkan bahan dengan koma
                </p>
            </div>

            <div>
                <label className="block text-gray-700 text-sm">
                    Usia Bayi
                </label>
                <select
                    className="mt-2 w-full p-4 bg-white border border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none text-gray-700"
                    value={babyAge}
                    onChange={(e) => setBabyAge(e.target.value)}
                >
                    {[6, 7, 8, 9, 10, 11, 12].map((month) => (
                        <option key={month} value={month}>
                            {month} bulan
                        </option>
                    ))}
                </select>
            </div>

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Membuat Resep...' : 'Buat Resep'}
                </button>
            </div>
        </form>
    );
}
