import { useParams } from "react-router-dom";
import { useDocumentTitle } from '@uidotdev/usehooks'

import { useGetRecipeByLink } from "../hooks/useRecipes";

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
                <div className="flex flex-col space-y-1 w-[500px]">
                    <span className="font-bold text-lg">Description</span>
                    <span className="break-all">{recipe.description}</span>
                </div>
            </div>
            <div>
                <img className="w-[500px] rounded-lg shadow-md" src={recipe.imageLink} />
            </div>
        </div>
    )
}

export default RecipeDetailedPage