import RecipeComplexity from "./RecipeComplexity"

type TRecipe = {
    _id: string
    name: string
    description: string
    recipeLink?: string
    imageLink?: string
    complexity: RecipeComplexity
}

export default TRecipe