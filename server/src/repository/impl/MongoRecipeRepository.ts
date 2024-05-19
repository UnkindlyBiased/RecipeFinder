import { Repository } from "typeorm"
import AppDataSource from "../../../utils/data/MongoDataSource"
import RecipeEntity from "../../models/entity/RecipeEntity"
import IRecipeRepostory from "../IRecipeRepository"
import RecipeCreateDto from "../../models/dto/RecipeCreateDto"

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
    async create(input: RecipeCreateDto): Promise<RecipeEntity> {
        const candidate = await this.recipeRep.findOneBy({ name: input.name })
        if (candidate) {
            throw new Error("Recipe with such name exists")
        }

        const entity = this.recipeRep.create(input)
        await this.recipeRep.insert(entity)

        return entity
    }
}

export default new MongoRecipeRepository()