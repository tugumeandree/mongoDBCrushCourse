
// In this course we are adding and showing added blog articles in a mongo database
const mongoose = require('mongoose');
require('dotenv/config');

// request connection with local serever
mongoose.connect('mongodb://localhost/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true });
// {useNewUrlParser: true,useUnifiedTopology: true }flags for deprecations in the mongodb driver

// connection with cloud based serverless MongoDB Atlas //use dotenv to hide credentials
// mongoose.connect('process.env.DB_CONNECTION');
// in dotenv file DB_CONNECTION =mongodb+srv://userName:<password>@freecluster-t1jay.gcp.mongodb.net/test?retryWrites=true&w=majority

// establish the connection
const db = mongoose.connection;

// use events once open and on error events to show db status
db.once('open', () => {
  console.log('Your db is connected');
});

db.on('error', (err) => {
  console.log(err);
});

// use mongoose.model to create and use models with schemas

// Use internal model
// const Article = mongoose.model('Article',{
//     title:String,//short hand for type casting //you can also use
//     author:String
// });

// Or Use external model
// external models mongoose.Schema with mongoose.model()
const Article = require('./models/articles.model');

const article = new Article({
  title: 'Design Sprint',
  author: 'Google',
});
// save the blog article in the databse
article.save();

// show all the blog articles in the databse
Article.find((err, articles) => {
  if (err) {
    console.log(err);
  } else {
    console.log(articles);
  }
});
