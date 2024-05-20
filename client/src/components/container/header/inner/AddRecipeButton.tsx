import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from 'react-hook-form'

import { useCreateRecipe } from "@/hooks/useRecipes";
import TRecipeInput from "@/types/recipe/TRecipeInput"
import RecipeComplexity from "@/types/recipe/RecipeComplexity";

function AddRecipeButton(): React.ReactElement {
    const { register, watch, setValue } = useForm<TRecipeInput>()
    const { mutateAsync: createRecipe } = useCreateRecipe(watch())

    return (
        <Dialog>
            <DialogTrigger>
                <span>Add</span>
            </DialogTrigger>
            <DialogContent className="font-inter">
                <DialogTitle>Add the recipe</DialogTitle>
                <Input placeholder="Recipe's name" {...register('name')} />
                <Textarea placeholder="Recipe's description" {...register('description')} />
                <Select onValueChange={value => setValue('complexity', value as RecipeComplexity)}>
                    <SelectTrigger>
                        <SelectValue placeholder='Select a complexity' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {['Easy', 'Medium', 'Difficult'].map((comp, i) => (
                                <SelectItem value={comp} key={i} children={comp} />
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <DialogFooter>
                    <DialogClose onClick={() => createRecipe()}>
                        Add the recipe
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddRecipeButton  