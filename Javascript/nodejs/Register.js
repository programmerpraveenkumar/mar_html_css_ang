var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/fitasample";
//one data insert

  MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
    var dbo =  db.db("fitasample");
    //dbo.collection("user").findOne()
    var email = "testemail2w@gmail.com";
    var data = {
      "name":"test",
      "email":email,
      "city":"chennai"
    }
    //select the record.
    dbo.collection("user").findOne({"email":email},function(err,res){
            //console.log("total records "+res.length);    
            if(res == null){
               
                dbo.collection("user").insertOne(data,function(err,res){
                    db.close();
                });
                console.log("ready to inserted..");
      
            }else{
                db.close();
                console.log("email is exist.");
            }   
          //  dbo.close();
    })
});

