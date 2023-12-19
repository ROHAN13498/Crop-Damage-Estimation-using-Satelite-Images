const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.post('/fetch', async (req, res) => {
  var getArea =require('./authenticate');
  if(req.body.districtName){
    const districtName=req.body.districtName.toUpperCase();
    console.log(districtName);
    var ans=await getArea(districtName);
    res.json(ans);
  }
  else{
    res.json("Send a valid name");
  }
});

app.listen(8080, function () {
  console.log('Server started on port 8080');
});
