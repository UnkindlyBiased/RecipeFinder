import { ObjectId } from "mongodb";

import MongoRecipeRepository from "../repository/impl/MongoRecipeRepository";
import IRecipeRepostory from "../repository/IRecipeRepository";
import RecipeInputDto from "../models/dto/RecipeInputDto";
import RecipeHelper from "../../utils/helpers/RecipeHelper";
import { cacheClient } from "../../utils/data/RedisCacheClient";
import RecipeDeleteDto from "../models/dto/RecipeDeleteDto";
import RecipeModel from "../models/domain/RecipeModel";

class RecipeService {
    constructor(private repository: IRecipeRepostory) { }

    async getRecipes(): Promise<RecipeModel[]> {
        const recipes = await this.repository.getRecipes()
        await cacheClient.set('recipes', JSON.stringify(recipes), { EX: 300 })

        return recipes
    }
    async getRecipeByLink(link: string): Promise<RecipeModel> {
        const cachedRecipe = await cacheClient.get(`recipe-${link}`)
        if (cachedRecipe) {
            return JSON.parse(cachedRecipe) as RecipeModel
        }

        const recipe = await this.repository.getRecipeByLink(link)
        await cacheClient.set(`recipe-${link}`, JSON.stringify(recipe), { EX: 300 })

        return recipe
    }
    async create(input: RecipeInputDto): Promise<RecipeModel> {
        input.recipeLink = RecipeHelper.createLink(input.name)

        const createdRecipe = await this.repository.create(input)
        await cacheClient.del('recipes')

        return createdRecipe
    }
    async update(id: ObjectId, input: RecipeInputDto): Promise<void> {
        input.recipeLink = RecipeHelper.createLink(input.name)
        
        await this.repository.update(id, input)
        await cacheClient.del(`recipe-${input.recipeLink}`)
    }
    async delete(data: RecipeDeleteDto): Promise<RecipeModel> {
        await cacheClient.del([`recipe-${data.recipeLink}`, 'recipes'])
        return this.repository.delete(data._id)
    }
}

export default new RecipeService(MongoRecipeRepository)