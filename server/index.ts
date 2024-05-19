import express from 'express'
import { config } from 'dotenv'
import 'reflect-metadata'

import AppDataSource from './utils/data/MongoDataSource'
import RecipeRouter from './src/routers/RecipeRouter'
import { connectToCacheClient } from './utils/data/RedisCacheClient'

config()

const recipeApp = express()

// Middlewares
recipeApp.use(express.json())

// Routers
recipeApp.use('/recipes', RecipeRouter)

async function startServer() {
    try {
        const PORT = Number(process.env.APP_PORT) || 4816

        await AppDataSource.initialize()
        await AppDataSource.synchronize()

        await connectToCacheClient()

        recipeApp.listen(PORT, () => console.log('Server part is started'))
    } catch(e) {
        console.log(e)
    }
}

startServer()