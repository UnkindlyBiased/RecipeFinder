class RecipeHelper {
    static createLink(name: string): string {
        const symbols = "!:,\"".split("")
        for (const symbol of symbols) {
            name = name.replace(symbol, "")
        }
        name = name.toLowerCase().split(" ").join('-')
        return name
    }
}

export default RecipeHelper