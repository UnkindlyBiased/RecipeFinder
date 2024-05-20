import RecipeModel from "../domain/RecipeModel"

type RecipeInputDto = Omit<RecipeModel, "_id">

export default RecipeInputDto