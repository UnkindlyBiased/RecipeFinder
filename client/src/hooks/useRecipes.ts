import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import RecipeService from "../services/RecipeService";
import TRecipeInput from "@/types/recipe/TRecipeInput";
import { toast } from "@/components/ui/use-toast";

const useGetRecipes = () => useQuery({
    queryKey: ['recipes'],
    queryFn: () => RecipeService.getRecipes()
})

const useGetRecipeByLink = (link: string) => useQuery({
    queryKey: ['recipe', link],
    queryFn: () => RecipeService.getRecipeByLink(link)
})

const useCreateRecipe = (input: TRecipeInput) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: () => RecipeService.create(input),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["recipes"] })
            toast({
                title: "Congratulations",
                description: "You have successfully added the recipe"
            })
        }
    })
}

const useDeleteRecipe = (_id: string, recipeLink: string) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: () => RecipeService.delete(_id, recipeLink),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["recipes"] })
            toast({
                title: "Womp-womp...",
                description: "You have successfully deleted the recipe"
            })
        }
    })
}

export {
    useGetRecipes,
    useGetRecipeByLink,
    useCreateRecipe,
    useDeleteRecipe
}