import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm'
import RecipeComplexity from '../../../utils/enums/RecipeComplexity'

@Entity({ name: 'Recipes' })
export default class RecipeEntity {
    @ObjectIdColumn()
    _id: ObjectId

    @Column({ unique: true })
    name: string

    @Column({ nullable: true })
    description: string

    @Column({ unique: true })
    recipeLink?: string

    @Column({
        type: 'enum',
        enum: RecipeComplexity
    })
    complexity: RecipeComplexity | string
}