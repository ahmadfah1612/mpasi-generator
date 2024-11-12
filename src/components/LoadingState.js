export default function LoadingState() {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-200 border-t-pink-600"></div>
                <div className="text-gray-600 font-medium">Sedang membuat resep...</div>
                <div className="text-sm text-gray-500 text-center max-w-sm">
                    Kami sedang menyiapkan resep MPASI yang sesuai dengan usia si kecil
                    dan bahan-bahan yang tersedia
                </div>
            </div>
        </div>
    );
}

