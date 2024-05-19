import { Router } from "express"
import RecipeController from "../controllers/RecipeController"
import cacheMiddleware from "../../utils/middlewares/CacheMiddleware"

const RecipeRouter = Router()

RecipeRouter.get('/', RecipeController.getRecipes)
RecipeRouter.get('/:link', cacheMiddleware('recipes'), RecipeController.getRecipeByLink)
RecipeRouter.post('/', RecipeController.create)

export default RecipeRouter