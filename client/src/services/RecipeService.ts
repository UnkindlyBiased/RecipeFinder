import TRecipeInput from "@/types/recipe/TRecipeInput"
import api from "../api"
import TRecipe from "../types/recipe/TRecipe"

class RecipeService {
    private ENDPOINT_PREFIX = '/recipes'

    async getRecipes(): Promise<TRecipe[]> {
        return (await api.get<TRecipe[]>(this.ENDPOINT_PREFIX)).data
    }
    async getRecipeByLink(link: string): Promise<TRecipe> {
        return (await api.get(this.ENDPOINT_PREFIX + `/${link}`)).data
    }
    async create(input: TRecipeInput) {
        await api.post(this.ENDPOINT_PREFIX, input)
    }
}

export default new RecipeService()