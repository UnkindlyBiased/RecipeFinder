import { ObjectId } from "mongodb";

import RecipeInputDto from "../models/dto/RecipeInputDto";
import RecipeModel from "../models/domain/RecipeModel";

export default interface IRecipeRepostory {
    getRecipes: () => Promise<RecipeModel[]>
    getRecipeByLink: (link: string) => Promise<RecipeModel>
    create: (input: RecipeInputDto) => Promise<RecipeModel>
    update: (id: ObjectId, input: RecipeInputDto) => Promise<void>
    delete: (id: ObjectId) => Promise<RecipeModel>
}