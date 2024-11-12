// src/components/RecipeResult.js
export default function RecipeResult({ recipe }) {
    // Remove ```html and ``` tags from the response
    const cleanRecipe = recipe.replace(/```html|```/g, '');

    return (
        <div className="prose max-w-none">
            <div
                dangerouslySetInnerHTML={{ __html: cleanRecipe }}
                className="[&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mb-4
                   [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mb-3
                   [&>p]:text-gray-600 [&>p]:mb-4
                   [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4 [&>ul]:space-y-1
                   [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-4 [&>ol]:space-y-1"
            />
        </div>
    );
}
