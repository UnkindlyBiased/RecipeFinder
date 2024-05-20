import { ObjectId } from "typeorm"
import RecipeComplexity from "../../../utils/enums/RecipeComplexity"

type RecipeModel = {
    _id: ObjectId
    name: string
    description: string
    recipeLink?: string
    imageLink?: string
    complexity: RecipeComplexity | string
}

export default RecipeModel