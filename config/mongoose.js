const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);

// Database connection 
mongoose.connect('mongodb://127.0.0.1:27017/hospital_API' , { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// connection Error handling
db.on('error', console.error.bind(console, "Error connection to the database"));

// Connection Error Successful
db.once('open' , function(){
    console.log('Successfully connected to the Database');
})
