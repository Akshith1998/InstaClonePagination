const express=require("express");
const app=express();
const fs=require("fs");
const path=require("path")
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors");
const PostModal=require("./User/Modal/PostModal");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const multer = require('multer');

  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage : storage });
app.use('/uploads', express.static(path.join(__dirname+'uploads')));

app.post("/post",upload.single("Image"),(req,res)=>{
    const Post=new PostModal({Author:req.body.Author,Location:req.body.Location,Description:req.body.Description,Image:req.file.filename})
    Post.save().then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(400).send(err)
    })
}) 

app.get("/post",(req,res)=>{
    PostModal.find().then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get("/images/:id",(req,res)=>{
    PostModal.find({Image:req.params.id}).then((data)=>{
        res.status(200).download(path.join(__dirname+'/uploads/'+data[0].Image));
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

mongoose.connect(process.env.connection).then(()=>{
    console.log(`Database is connected`);
}).catch((err)=>{
    console.log(err);
})

app.listen(process.env.PORT || 3001,(err)=>{
    if(!err){
        console.log(`server is running at port ${process.env.PORT}`)
    }else{
        console.log(err)
    }
})