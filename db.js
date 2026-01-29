import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import express from 'express';

dotenv.config()

const app = express()
const PORT = 8080

const supabaseUrl = 'https://nxuehljrynbmwceqklxa.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)


app.post('/senddata', async (req,res) => {

    const today = new Date();

    const { data, error} = await supabase
    .from('people')
    .insert([
        {id: 1234, name: 'Camila', current_date: today},
        {id: 6789, name: 'Mario', current_date: today},
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