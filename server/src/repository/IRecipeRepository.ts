import { ObjectId } from "mongodb";

import RecipeEntity from "../models/entity/RecipeEntity";
import RecipeInputDto from "../models/dto/RecipeInputDto";

export default interface IRecipeRepostory {
    getRecipes: () => Promise<RecipeEntity[]>
    getRecipeByLink: (link: string) => Promise<RecipeEntity>
    create: (input: RecipeInputDto) => Promise<RecipeEntity>
    update: (id: ObjectId, input: RecipeInputDto) => Promise<void>
    delete: (id: ObjectId) => Promise<RecipeEntity>
}