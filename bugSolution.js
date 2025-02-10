```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:-1}},{upsert:true});
//Check if the value is greater than 0 before decrementing
db.collection('myCollection').updateOne({"_id":ObjectId("someId"), counter:{$gt:0}},{$inc:{counter:-1}});
```