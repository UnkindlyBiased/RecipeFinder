import { Request, Response } from "express";
import RecipeService from "../services/RecipeService";
import { RequestWithBody } from "../../utils/types/DifferentiatedRequests";
import RecipeCreateDto from "../models/dto/RecipeCreateDto";

// TODO: remove boilerplate catch-code
class RecipeController {
    async getRecipes(_req: Request, res: Response) {
        try {
            const recipes = await RecipeService.getRecipes()
            return res.send(recipes)
        } catch(e) {
            res.status(400).send(e)
        }
    }
    async getRecipeByLink(req: Request, res: Response) {
        try {
            const { link } = req.params
            const recipe = await RecipeService.getRecipeByLink(link)

            return res.send(recipe)
        } catch(e) {
            res.status(400).send(e)
        }
    }
    async create(req: RequestWithBody<RecipeCreateDto>, res: Response) {
        try {
            const recipe = await RecipeService.create(req.body)
            return res.status(201).send(recipe)
        } catch(e) {
            console.log(e)
            res.status(400).send(e)
        }
    }
}

export default new RecipeController()