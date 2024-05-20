import { useGetRecipes } from "../hooks/useRecipes"

import Recipe from "../components/recipe/Recipe"

function RecipesPage(): React.ReactElement {
    const { data: recipes } = useGetRecipes()
    return (
        <div>
            {recipes?.map(recipe => (
                <Recipe key={recipe._id} recipe={recipe}  />
            ))}
        </div>
    )
}

export default RecipesPage