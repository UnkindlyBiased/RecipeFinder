import RecipeEntity from "../models/entity/RecipeEntity";
import MongoRecipeRepository from "../repository/impl/MongoRecipeRepository";
import IRecipeRepostory from "../repository/IRecipeRepository";
import RecipeInputDto from "../models/dto/RecipeInputDto";
import RecipeHelper from "../../utils/helpers/RecipeHelper";
import { cacheClient } from "../../utils/data/RedisCacheClient";
import RecipeDeleteDto from "../models/dto/RecipeDeleteDto";
import { ObjectId } from "mongodb";

class RecipeService {
    constructor(private repository: IRecipeRepostory) { }

    async getRecipes(): Promise<RecipeEntity[]> {
        const recipes = await this.repository.getRecipes()
        await cacheClient.set('recipes', JSON.stringify(recipes), { EX: 300 })

        return recipes
    }
    async getRecipeByLink(link: string): Promise<RecipeEntity> {
        const cachedRecipe = await cacheClient.get(`recipe-${link}`)
        if (cachedRecipe) {
            return JSON.parse(cachedRecipe) as RecipeEntity
        }

        const recipe = await this.repository.getRecipeByLink(link)
        await cacheClient.set(`recipe-${link}`, JSON.stringify(recipe), { EX: 300 })

        return recipe
    }
    async create(input: RecipeInputDto): Promise<RecipeEntity> {
        input.recipeLink = RecipeHelper.createLink(input.name)

        const createdRecipe = await this.repository.create(input)
        await cacheClient.del('recipes')

        return createdRecipe
    }
    async update(id: ObjectId, input: RecipeInputDto): Promise<void> {
        await this.repository.update(id, input)
        await cacheClient.del(`recipe-${input.recipeLink}`)
    }
    async delete(data: RecipeDeleteDto): Promise<RecipeEntity> {
        await cacheClient.del([`recipe-${data.recipeLink}`, 'recipes'])
        return this.repository.delete(data._id)
    }
}

export default new RecipeService(MongoRecipeRepository)