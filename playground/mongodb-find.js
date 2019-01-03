const {MongoClient, ObjectID} = require('mongodb');

//create a mongo db object id like "5c2e019b7c1eff35789947a0"
//var obj = new ObjectID(); 




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('unable to connect');
        return;
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos',err);
    // });
    
    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos Count:${count}`);
    }, (err)=>{
        console.log('Unable to fetch todos',err);
    });

   // db.close();
});