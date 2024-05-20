import RecipeEntity from "../entity/RecipeEntity";

type RecipeDeleteDto = Pick<RecipeEntity, "_id" | "recipeLink">

export default RecipeDeleteDto