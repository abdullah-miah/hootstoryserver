const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT||5000;

// midleware
app.use(cors());
app.use(express.json());



// some Api Declare
app.get('/user/:id', async(req, res) =>{
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const user = await userCollection.findOne(query);
    res.send(user);
  })

app.get('/', (req, res) => {
    res.send('Hello HootStory!')
  })
  
  app.listen(port, () => {
    console.log(`Tools mart app listening on port ${port}`)
  })