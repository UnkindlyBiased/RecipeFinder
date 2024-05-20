import { ObjectId } from "typeorm"
import RecipeComplexity from "../../../utils/enums/RecipeComplexity"

type RecipeModel = {
    _id: ObjectId
    name: string
    description: string
    recipeLink: string
    complexity: RecipeComplexity
}

export default RecipeModel