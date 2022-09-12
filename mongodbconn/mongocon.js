// const {MongoClient} = require('mongodb');

// const conn = 'mongodb://localhost:27017';

// MongoClient.connect(conn,(err,data)=>{
//     if(err){
//         return console.log(`connection error ${err}`);
//     }
//     console.log(`Connected to the Database ${data} !!`);
// });



// const { MongoClient } = require('mongodb');
const mon = require('mongoose');

const conn = "mongodb+srv://jaym:Shubh1221@cluster0.dfc7om1.mongodb.net/tasked?retryWrites=true&w=majority";
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

mon.connect(conn,connectionParams)
    .then(() => console.log("connected to DB."))
    .catch(err => console.log(err));