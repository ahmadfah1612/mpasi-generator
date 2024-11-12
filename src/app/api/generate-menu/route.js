// src/app/api/generate-menu/route.js
import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
    try {
        const { ingredients, babyAge } = await request.json();

        const prompt = `Buatkan resep MPASI menggunakan bahan-bahan berikut: ${ingredients}. 
    Usia bayi ${babyAge} bulan.
    
    Berikan informasi dalam format berikut (gunakan tag HTML untuk formatting):
    <h1>Nama Resep</h1>
    <h2>Bahan-bahan</h2>
    (dengan takaran yang tepat)
    
    <h2>Cara Pembuatan</h2>
    (langkah-langkah detail)
    
    <h2>Manfaat Gizi</h2>
    (jelaskan kandungan gizi dan manfaatnya)
    
    <h2>Tips Keamanan</h2>
    (sesuai usia bayi)
    
    Catatan penting:
    - Tekstur makanan harus sesuai dengan usia bayi
    - Untuk 6 bulan: tekstur pure halus
    - Untuk 7-9 bulan: tekstur lebih kental dengan sedikit tekstur
    - Untuk 9-12 bulan: tekstur kasar dengan potongan kecil
    - Hindari garam dan gula untuk bayi di bawah 1 tahun
    - Pastikan porsi sesuai dengan usia bayi`;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Anda adalah ahli gizi yang spesialis dalam makanan bayi (MPASI). Berikan respon dalam Bahasa Indonesia yang mudah dipahami oleh orang tua. Utamakan keamanan dan nilai gizi dalam setiap resep. Gunakan format HTML untuk struktur konten."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7,
        });

        const recipe = completion.choices[0].message.content;

        return NextResponse.json({ recipe });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { message: 'Terjadi kesalahan saat membuat resep' },
            { status: 500 }
        );
    }
}
