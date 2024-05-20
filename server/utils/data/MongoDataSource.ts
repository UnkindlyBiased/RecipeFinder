import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: 'mongodb',
    host: 'localhost',
    port: Number(process.env.MONGO_PORT) || 27017,
    database: 'RecipeFinderDb',
    entities: [__dirname + '/../../src/models/entity/*Entity.ts'],
    synchronize: true,
    logging: false
})

export default AppDataSource