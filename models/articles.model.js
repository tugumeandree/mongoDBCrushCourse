const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const Article = mongoose.model('Article', articleSchema);
module.exports = mongoose.model('Article', articleSchema);
