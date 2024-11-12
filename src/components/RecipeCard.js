export default function RecipeCard({ recipe }) {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
                <div className="prose max-w-none">
                    <div
                        dangerouslySetInnerHTML={{ __html: recipe }}
                        className="space-y-4 [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mb-4 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mb-3 [&>p]:text-gray-600 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5"
                    />
                </div>
            </div>
        </div>
    );
}
