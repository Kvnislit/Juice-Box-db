const express = require('express');
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName, getPostById } = require('../db');

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next(); 
});

tagsRouter.get('/', async (req, res) => {
    const tags = await getAllTags();

  res.send({
    tags
  });
});
 
tagsRouter.get('/:tagName/posts', async (req, res, next) => {
  const { tagname } = req.params;
  try {
      const postByTag = await getPostsByTagName(tagname)
   
//      const posts = allPosts.filter(post => {
//   // the post is active, doesn't matter who it belongs to
//   if (post.active) {
//     return true;
//   }

//   // the post is not active, but it belogs to the current user
//   if (req.user && post.author.id === req.user.id) {
//     return true;
//   }

//   // none of the above are true
//   return false;
// });

    // use our method to get posts by tag name from the db
      res.send ({ posts })
    // send out an object to the client { posts: // the posts }
  } catch ({ name, message }) {
    next({name, message});
  }
});

module.exports = tagsRouter;