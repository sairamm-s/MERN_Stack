const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const articlesRouter = require('./routes/articles');
const userRouter = require('./routes/jwtRoute');
const app = express();
const port = 8080;
//if port is given it runs on tha or runs on 3000
// const uri = process.env.ATLAS_URI;
app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.use('/articles', articlesRouter);
app.use('/users', userRouter);

mongoose.connect(
  'mongodb+srv://sairamm:sairamm04@cluster1.phm2a.mongodb.net/mern_blog?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
const db = mongoose.connection;
db.once('open', () => {
  // we're connected!
  console.log('Connected to mongoDb');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
