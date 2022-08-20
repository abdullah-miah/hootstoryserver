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

//   Get api by user id
app.get('/books/:id', async(req, res) =>{
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const user = await userCollection.findOne(query);
    res.send(user);
  });
//   post api
  app.post('/users', async(req, res) =>{
    const adduser = req.body;
    const users = await usersCollection.insertOne(adduser);
    res.send(users)
});

// delet api by id
app.delete('/deleteUsers/:id', async (req, res)=>{
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const result = await userCollection.deleteOne(query);
    res.send(result);

})

app.get('/', (req, res) => {
    res.send('Hello HootStory!')
  })
  
  app.listen(port, () => {
    console.log(`Tools mart app listening on port ${port}`)
  })