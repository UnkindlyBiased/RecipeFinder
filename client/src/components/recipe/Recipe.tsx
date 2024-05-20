import { Link } from "react-router-dom";
import TRecipe from "../../types/recipe/TRecipe";

function Recipe({ recipe }: { recipe: TRecipe }): React.ReactElement {
    return (
        <div>
            <Link to={`/${recipe.recipeLink}`}>
                {recipe.name}
            </Link>
        </div>
    )
}

export default Recipe