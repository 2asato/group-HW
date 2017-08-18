console.log('this is working');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/example');

mongoose.connection.once('open', () => {
  // console.log("connected to mongoose");
  Article.create(
    {
      title: "Awesome title",
      author: "Matt"
    },
    (error, createdArticle) =>{
      console.log('article created!');
      console.log(createdArticle);
      mongoose.connection.close();

    }
  )
  Article.update(
    {author: 'Matt' },
    {
      $set: {
        author: 'Matthew'
      }
    },
    {multi: true},
    (error, response) => {
      console.log(response);
      mongoose.connection.close();
    }
  )
  Article.remove(
    {author: 'Matthew'},
    (error, response) => {
      console.log(response);
      mongoose.connection.close();
    }
  )
});
