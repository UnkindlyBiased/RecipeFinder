import RecipeEntity from "../entity/RecipeEntity";

type RecipeCreateDto = Omit<RecipeEntity, "_id">

export default RecipeCreateDto