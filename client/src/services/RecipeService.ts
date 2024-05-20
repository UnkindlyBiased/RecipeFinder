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
}

export default new RecipeService()