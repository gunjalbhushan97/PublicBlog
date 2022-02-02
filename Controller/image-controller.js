import mongoose from 'mongoose';
 import grid from 'gridfs-stream';
//import  path from 'path';


const url = 'http://localhost:6225'
let  gfs;
const conn = mongoose.connection;
conn.once('open', () =>{
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
})


export const uploadImage = (req, res) => {
    try {

        if (!req.file)
            return res.status(404).json("file not found");
        const image = `${url}/file/${req.file.filename}`

        res.status(200).json(image);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getImage = async (req,res) =>  {
    try{
       const file = await gfs.files.findOne({filename: req.params.filename});
       var readStream = gfs.createReadStream(file.filename);
       readStream.pipe(res);
    }catch(error){
        res.status(500).json(" Errorin while getimage",error);
    }

   
} 
