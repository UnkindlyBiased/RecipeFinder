import express from 'express'
import { config } from 'dotenv'
import 'reflect-metadata'
import cors from 'cors'

import AppDataSource from './utils/data/MongoDataSource'
import RecipeRouter from './src/routers/RecipeRouter'
import { connectToCacheClient } from './utils/data/RedisCacheClient'
import errorMiddleware from './utils/middlewares/ErrorMiddleware'

config()

const recipeApp = express()

// Middlewares
recipeApp.use(express.json())
recipeApp.use(cors({
    origin: 'http://localhost:5173'
}))

// Routers
recipeApp.use('/recipes', RecipeRouter)

recipeApp.use(errorMiddleware)

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