import express from 'express';
import bodyParser from 'body-parser';
/*import pg from "pg"
import axios from 'axios';*/

const app = express();
const PORT = 3000;

/*const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Portfolio website",
    password: "simplesql",
    port: 5432,
})
db.connect()*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render('index.ejs',{
        
    })
})

/*app.post('/submitContact', async (req,res)=>{
    const email = req.body.email
    const comments = req.body.comment

    try {
        await db.query('INSERT INTO comments(email, comment) VALUES($1, $2)', [email, comments]);
        res.redirect('/');
    } catch (err) {
        console.error('Database insertion error:', err);
        res.status(500).send('An error occurred while saving your comment.');
    }

})*/

app.listen(PORT, () =>{
    console.log("Litening to the server");
})
