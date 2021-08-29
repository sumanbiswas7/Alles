const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.static("./public"));


var storage = multer.diskStorage({

destination: "./public/images",
filename: function (req, file, cb) {
cb(null, Date.now() + '-' +file.originalname )
}
})



var upload = multer({ storage: storage }).array('file');


app.post('/upload',function(req, res) {
 
upload(req, res, function (err) {
       if (err instanceof multer.MulterError) {
           return res.status(500).json(err)
       } else if (err) {
           return res.status(500).json(err)
       }
  return res.status(200).send(req.file)

})

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
console.log("server started at port "+PORT);
});