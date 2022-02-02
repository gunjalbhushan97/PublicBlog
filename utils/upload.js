

import multer from 'multer';

import {GridFsStorage} from 'multer-gridfs-storage';




const storage = new GridFsStorage({
     url :'mongodb://Bhushan:bhushan@blog-shard-00-00.eodg3.mongodb.net:27017,blog-shard-00-01.eodg3.mongodb.net:27017,blog-shard-00-02.eodg3.mongodb.net:27017/Public?ssl=true&replicaSet=atlas-zy68dh-shard-0&authSource=admin&retryWrites=true&w=majority',
     options:{ useNewUrlParser: true, useUnifiedTopology: true },
     file:(req,file) => {
     const match=  ["image/png","image/jpg"];
     if(match.indexOf(file.mimeType) === -1)
             return `${Date.now()}-blog-${file.originalname}`;
    
         return{
             bucketName:"photos",
             filename:`${Date.now()}-blog-${file.originalname}`

         }
      }
 }) 

export default multer({storage});