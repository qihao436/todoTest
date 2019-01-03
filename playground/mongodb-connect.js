const {MongoClient, ObjectID} = require('mongodb');

//create a mongo db object id like "5c2e019b7c1eff35789947a0"
//var obj = new ObjectID(); 




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('unable to connect');
        return;
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
        text:'something todo1',
        completed:false
    },(err,result)=>{
        if(err){
            console.log('Failed to insert todo',err);
            return;
        }
        console.log(JSON.stringify(result.ops,undefined,2));
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});