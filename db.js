import express from 'express';
import dotenv from 'dotenv';
import postgres from 'postgres'

dotenv.config()

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)

export default sql

const app = express();
const PORT = 8080;

app.get('/', async (req,res) => {
    try {
        const response = await sql`SELECT "prospect-name", "propspect-phone-number" FROM propects`;        
        res.json(response);

    } catch (error) {
        console.error(error.message)
    }

});


app.listen(PORT, () => console.log(`Server running, http://localhost:${PORT}`));