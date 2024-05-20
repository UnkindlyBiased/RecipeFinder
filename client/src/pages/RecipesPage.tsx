import { useGetRecipes } from "../hooks/useRecipes"

import Recipe from "../components/pages/recipe/Recipe"
import { useDocumentTitle } from "@uidotdev/usehooks"

function RecipesPage(): React.ReactElement {
    useDocumentTitle('Recipe Finder: find your recipe')

    const { data: recipes } = useGetRecipes()

    return (
        <div className="grid grid-cols-3 w-full gap-y-3">
            {recipes?.map(recipe => (
                <Recipe key={recipe._id} recipe={recipe}  />
            ))}
        </div>
    )
}

export default RecipesPage