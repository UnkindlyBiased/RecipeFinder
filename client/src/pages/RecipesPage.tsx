import { useGetRecipes } from "../hooks/useRecipes"

import Recipe from "../components/recipe/Recipe"
import { useDocumentTitle } from "@uidotdev/usehooks"

function RecipesPage(): React.ReactElement {
    useDocumentTitle('Recipe Finder: find your recipe')

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