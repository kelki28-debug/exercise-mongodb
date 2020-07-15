const express = require('express');
const app = express();

const {PORT,db} = require('./config');

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api/users', require('./routes/users'))

app.get('/', (req,res) =>{
    res.send('demo')
})

if(db){
    console.log('connect to db');
    app.listen(PORT, () =>{
        console.log(`server running on port ${PORT}`);
    })
}

