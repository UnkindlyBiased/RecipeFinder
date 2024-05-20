import { Link } from "react-router-dom";
import TRecipe from "../../../types/recipe/TRecipe";
import RecipeDelete from "./RecipeDelete";

function Recipe({ recipe }: { recipe: TRecipe }): React.ReactElement {
    return (
        <div className="flex flex-col size-fit space-y-2 bg-slate-200 shadow-md p-5 rounded-md">
            <img className="w-[250px] rounded-lg" src={recipe.imageLink} alt={recipe.name} />
            <Link className="font-bold hover:underline" to={`/${recipe.recipeLink}`}>
                {recipe.name}
            </Link>
            <span>Complexity: {recipe.complexity}</span>
            <RecipeDelete _id={recipe._id} recipeLink={recipe.recipeLink!} />
        </div>
    )
}

export default Recipe