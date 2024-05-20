import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import RecipeService from "../services/RecipeService";
import TRecipeInput from "@/types/recipe/TRecipeInput";

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
        }
    })
}

export {
    useGetRecipes,
    useGetRecipeByLink,
    useCreateRecipe
}