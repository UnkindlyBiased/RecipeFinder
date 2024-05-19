import RecipeEntity from "../models/entity/RecipeEntity";
import RecipeCreateDto from "../models/dto/RecipeCreateDto";

export default interface IRecipeRepostory {
    getRecipes: () => Promise<RecipeEntity[]>
    getRecipeByLink: (link: string) => Promise<RecipeEntity>
    create: (input: RecipeCreateDto) => Promise<RecipeEntity>
}