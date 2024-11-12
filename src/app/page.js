'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import RecipeSection from '@/components/RecipeSection';
import Footer from '@/components/Footer';

export default function Home() {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);

    const generateMenu = async (ingredients, babyAge) => {
        setLoading(true);
        try {
            const response = await fetch('/api/generate-menu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ingredients, babyAge }),
            });
            const data = await response.json();
            setRecipe(data.recipe);

            // First scroll to recipe section if not already there
            if (!document.getElementById('recipe-section')?.getBoundingClientRect().top < window.innerHeight) {
                document.getElementById('recipe-section')?.scrollIntoView({ behavior: 'smooth' });
            }

            // Then scroll to recipe result after a small delay
            setTimeout(() => {
                document.getElementById('recipe-result')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 100);
        } catch (error) {
            console.error('Error:', error);
        }
        setLoading(false);
    };

    return (
        <div className="bg-[#FAFAFA]">
            <Navigation />
            <Hero />
            <Features />
            <div id="recipe-section" className="scroll-mt-16">
                <RecipeSection
                    onSubmit={generateMenu}
                    loading={loading}
                    recipe={recipe}
                />
            </div>
            <Footer />
        </div>
    );
}
