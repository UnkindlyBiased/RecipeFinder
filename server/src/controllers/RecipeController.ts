import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";

import RecipeService from "../services/RecipeService";
import { RequestWithBody, RequestWithQuery } from "../../utils/types/DifferentiatedRequests";
import RecipeInputDto from "../models/dto/RecipeInputDto";
import RecipeDeleteDto from "../models/dto/RecipeDeleteDto";

class RecipeController {
    async getRecipes(_req: Request, res: Response, next: NextFunction) {
        try {
            const recipes = await RecipeService.getRecipes()
            return res.send(recipes)
        } catch(e) {
            next(e)
        }
    }
    async getRecipeByLink(req: Request, res: Response, next: NextFunction) {
        try {
            const { link } = req.params
            const recipe = await RecipeService.getRecipeByLink(link)

            return res.send(recipe)
        } catch(e) {
            next(e)
        }
    }
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body)
            const recipe = await RecipeService.create(req.body)
            return res.status(201).send(recipe)
        } catch(e) {
            next(e)
        }
    }
    async update(req: RequestWithBody<RecipeInputDto & { _id: ObjectId }>, res: Response, next: NextFunction) {
        try {
            const dto: RecipeInputDto = {
                name: req.body.name,
                description: req.body.description,
                recipeLink: req.body.recipeLink,
                complexity: req.body.complexity,
            }
            
            await RecipeService.update(new ObjectId(req.body._id), dto)
            res.status(202).send({ message: "Updated completed successfully" })
        } catch(e) {
            next(e)
        }
    }
    async delete(req: RequestWithBody<RecipeDeleteDto>, res: Response, next: NextFunction) {
        try {
            const recipe = await RecipeService.delete({
                _id: new ObjectId(req.body._id),
                recipeLink: req.body.recipeLink
            })
            return res.status(200).send(recipe)
        } catch(e) {
            next(e)
        }
    }
}

export default new RecipeController()