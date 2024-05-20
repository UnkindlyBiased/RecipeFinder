import { useParams } from "react-router-dom";
import { useGetRecipeByLink } from "../hooks/useRecipes";
import { useEffect } from "react";

function RecipeDetailedPage() {
    const { link } = useParams()
    const { data: recipe } = useGetRecipeByLink(link || '')

    useEffect(() => {
        console.log(recipe)
    }, [recipe])

    return (
        <div>
            <span>idk</span>
            <span className="bg-red-400 p-5">{recipe?.name}</span>
        </div>
    )
}

export default RecipeDetailedPage