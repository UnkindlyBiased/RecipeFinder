import { Router } from "express"

import RecipeController from "../controllers/RecipeController"
import cacheMiddleware from "../../utils/middlewares/CacheMiddleware"

const RecipeRouter = Router()

RecipeRouter.get('/', RecipeController.getRecipes)
RecipeRouter.get('/:link', cacheMiddleware('recipes'), RecipeController.getRecipeByLink)
RecipeRouter.post('/', RecipeController.create)
RecipeRouter.put('/', RecipeController.update)
RecipeRouter.delete('/', RecipeController.delete)

export default RecipeRouter