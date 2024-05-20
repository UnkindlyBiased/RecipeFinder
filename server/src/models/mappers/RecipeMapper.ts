import RecipeEntity from "../entity/RecipeEntity";

class RecipeMapper {
    static toDataModel(entity: RecipeEntity) {
        return { ...entity }
    }
}

export default RecipeMapper