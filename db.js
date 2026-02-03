import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import express from 'express';

dotenv.config()

const app = express()
const PORT = 8080

//Middleware 
app.use(express.json()); // without it, the backend will recieve a raw string. 
app.use(express.static('.')); // used to access html files, like localhost:8080/index.html


const supabaseUrl = 'https://nxuehljrynbmwceqklxa.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


app.post('/senddata', async (req,res) => {
    const { name, cellphone } = req.body;

    const { data, error} = await supabase
    .from('people')
    .insert([
        {name: name, cellphone: cellphone}
    ]);

    if (error) {
        res.status(500).json({error: error.message});
    } else {
        res.json(data)
    }
});

app.get('/', async (req,res) => {
    const { data, error } = await supabase.from('people').select('*')

    if (error) {
        res.status(500).json({error: error.message})
    } else {
        res.json(data)
    }
});


app.listen(PORT, console.log(`Server is running in http://localhost:${PORT}`));