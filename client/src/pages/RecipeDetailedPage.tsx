import { useParams } from "react-router-dom";
import { useDocumentTitle } from '@uidotdev/usehooks'

import { useGetRecipeByLink } from "../hooks/useRecipes";
import { Suspense } from "react";

function RecipeDetailedPage() {
    const { link } = useParams()
    const { data: recipe } = useGetRecipeByLink(link || '')

    useDocumentTitle(`Recipe: ${recipe?.name}`)

    if (!recipe) return <p>Loading</p>

    return (
        <div className="flex justify-between">
            <div className="flex flex-col space-y-3">
                <div className="flex flex-col space-y-1">
                    <span className="text-5xl font-bold">{recipe.name}</span>
                    <span>Complexity: {recipe.complexity}</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="font-bold text-lg">Description</span>
                    <span>{recipe.description}</span>
                </div>
            </div>
            <div>
                <Suspense>
                    <img className="w-96 rounded-lg shadow-md" src={recipe.imageLink} />
                </Suspense>
            </div>
        </div>
    )
}

export default RecipeDetailedPage