import express from 'express'; 
const app = express(); 
const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.get('/test', (req, res) => { 
  res.send({ express: 'Hello, World!' }); 
}); 