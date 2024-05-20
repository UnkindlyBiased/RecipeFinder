import { useQuery } from "@tanstack/react-query";

import RecipeService from "../services/RecipeService";

const useGetRecipes = () => useQuery({
    queryKey: ['recipes'],
    queryFn: () => RecipeService.getRecipes()
})

const useGetRecipeByLink = (link: string) => useQuery({
    queryKey: ['recipe', link],
    queryFn: () => RecipeService.getRecipeByLink(link)
})

export {
    useGetRecipes,
    useGetRecipeByLink
}