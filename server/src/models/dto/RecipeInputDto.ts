import RecipeModel from "../domain/RecipeModel"

type RecipeInputDto = Omit<RecipeModel, "_id" | "imageLink">

export default RecipeInputDto