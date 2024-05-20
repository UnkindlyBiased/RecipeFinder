import { useDeleteRecipe } from "@/hooks/useRecipes";

function RecipeDelete({ _id, recipeLink }: { _id: string; recipeLink: string }) {
    const { mutateAsync: deleteRecipe } = useDeleteRecipe(_id, recipeLink)

    return (
        <span className="underline cursor-pointer" onClick={() => deleteRecipe()}>Delete</span>
    )
}

export default RecipeDelete