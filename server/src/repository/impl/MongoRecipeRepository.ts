import { ObjectId, Repository } from "typeorm"
import AppDataSource from "../../../utils/data/MongoDataSource"
import RecipeEntity from "../../models/entity/RecipeEntity"
import IRecipeRepostory from "../IRecipeRepository"
import RecipeInputDto from "../../models/dto/RecipeInputDto"
import { ApiError } from "../../../utils/errors/ApiError"

class MongoRecipeRepository implements IRecipeRepostory {
    private recipeRep: Repository<RecipeEntity>

    constructor() {
        this.recipeRep = AppDataSource.getMongoRepository(RecipeEntity)
    }

    async getRecipes(): Promise<RecipeEntity[]> {
        const entities = await this.recipeRep.find()
        return entities
    }
    async getRecipeByLink(link: string): Promise<RecipeEntity> {
        const candidate = await this.recipeRep.findOneBy({ recipeLink: link })
        if (!candidate) {
            throw new Error("This recipe does not exist")
        }

        return candidate
    }
    async create(input: RecipeInputDto): Promise<RecipeEntity> {
        const candidate = await this.recipeRep.findOneBy({ name: input.name })
        if (candidate) {
            throw new Error("Recipe with such name exists")
        }

        const entity = this.recipeRep.create(input)
        await this.recipeRep.insert(entity)

        return entity
    }
    async update(id: ObjectId, input: RecipeInputDto): Promise<void> {
        const candidate = await this.recipeRep.findOneBy({ _id: id })
        if (!candidate) {
            throw ApiError.NotFound('Such recipe does not exist')
        }

        Object.keys(input).forEach(key => {
            if (key && input[key as keyof RecipeInputDto]) {
                candidate[key as keyof RecipeInputDto] = input[key as keyof RecipeInputDto]
            }
        })

        await this.recipeRep.update(id, candidate)
    }
    async delete(id: ObjectId): Promise<RecipeEntity> {
        const candidate = await this.recipeRep.findOneBy({ _id: id })
        if (!candidate) {
            throw new Error('Such recipe does not exist')
        }

        await this.recipeRep.remove(candidate)
        return candidate
    }
}

export default new MongoRecipeRepository()