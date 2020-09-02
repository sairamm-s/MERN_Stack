const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  authorname: { type: String, required: true },
});

const Articles = mongoose.model('article', articleSchema);
// the name 'article' mentioned in the argument must be singular version of the name in the database

module.exports = Articles;
