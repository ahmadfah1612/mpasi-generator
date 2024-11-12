'use client';
import { useState } from 'react';
import { ChefHat } from 'lucide-react';

export default function MenuForm({ onSubmit }) {
    const [ingredients, setIngredients] = useState('');
    const [babyAge, setBabyAge] = useState('6');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(ingredients, babyAge);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-6">
                <ChefHat className="h-6 w-6 text-rose-500 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">Buat Resep MPASI</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bahan-bahan Tersedia
                    </label>
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
                        rows="4"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="Contoh: wortel, kentang, dada ayam"
                        required
                    />
                    <p className="mt-1 text-sm text-gray-500">Pisahkan dengan koma</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Usia Bayi
                    </label>
                    <select
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
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

                <button
                    type="submit"
                    className="w-full bg-rose-500 text-white py-3 px-4 rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors"
                >
                    Buat Resep
                </button>
            </form>
        </div>
    );
}
