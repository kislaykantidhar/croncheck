const express=require('express');
const cron=require('node-cron');
const deleteAt=require('./deleteAt.js');
cron.schedule('0 35 * * * *',deleteAt.time);
const app=express();
const port=3001;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})