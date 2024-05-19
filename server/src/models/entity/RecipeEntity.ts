import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm'
import RecipeCompletixy from '../../../utils/types/RecipeComplexity'

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
        enum: RecipeCompletixy
    })
    complexity: RecipeCompletixy
}