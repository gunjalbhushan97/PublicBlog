import mongoose from "mongoose"




const Connection = async () => {
  try {
    const URL = 'mongodb://Bhushan:bhushan@blog-shard-00-00.eodg3.mongodb.net:27017,blog-shard-00-01.eodg3.mongodb.net:27017,blog-shard-00-02.eodg3.mongodb.net:27017/Public?ssl=true&replicaSet=atlas-zy68dh-shard-0&authSource=admin&retryWrites=true&w=majority'

    await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected successfully ');
  } catch (error) {
    console.log('Error in Conneting to Database', error);
  }
}

export default Connection;








