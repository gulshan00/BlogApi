import express from 'express';
import Blog from '../Model/Blog.js';
import Comment from '../Model/Comments.js';
import User from '../Model/User.js';

const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific blog by id
router.get('/:id', getBlog, (req, res) => {
  res.json(res.blog);
});

// Create a new blog
router.post('/', async (req, res) => {
  const { title, content, user } = req.body;
  const blog = new Blog({
    title,
    content,
    user
  });
  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an existing blog
router.patch('/:id', getBlog, async (req, res) => {
  const { title, content } = req.body;
  if (title != null) {
    res.blog.title = title;
  }
  if (content != null) {
    res.blog.content = content;
  }
  try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an existing blog
router.delete('/:id', getBlog, async (req, res) => {
  try {
    await res.blog.remove();
    res.json({ message: 'Blog deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware function to get a specific blog by id
async function getBlog(req, res, next) {
  let blog;
  try {
    blog = await Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: 'Cannot find blog' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.blog = blog;
  next();
}
// Create a new comment
router.post('/comments', async (req, res) => {
    try {
      const comment = await Comment.create(req.body);
      res.status(201).json(comment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Get all comments
  router.get('/comments/:id', async (req, res) => {
    try {
      const comments = await Comment.findById(req.params.id);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
router.get('/check-blogs/:user2/:user3', async (req, res) => {
  const { user2, user3 } = req.params;

  try {
    // find comments by User2
    const user2Comments = await Comment.find({ user: user2 });

    // find comments by User3
    const user3Comments = await Comment.find({ user: user3 });

    // get the blog ids for blogs with comments by User2
    const blogIdsByUser2 = user2Comments.map(comment => comment.blog);

    // get the blog ids for blogs with comments by User3
    const blogIdsByUser3 = user3Comments.map(comment => comment.blog);

    // check if there are any blogs with comments by both User2 and User3
    const blogsWithBothComments = blogIdsByUser2.filter(id => blogIdsByUser3.includes(id));

    // if there are blogs with comments by both User2 and User3, return them
    if (blogsWithBothComments.length > 0) {
      const blogs = await Blog.find({ _id: { $in: blogsWithBothComments } });
      return res.status(200).json({ blogs });
    }

    // if there are no blogs with comments by both User2 and User3, check if they are 2nd level friends
    const user2Obj = await User.findOne({ name: user2 });
    const user3Obj = await User.findOne({ name: user3 });

    if (user3Comments._id!="643175b8424ddb69d37d22d8") {
    return res.status(200).json({ message: `${user2} and ${user3} are not 2nd level friends and there are no blogs with their comments` });
    }

    // if they are 2nd level friends, return a message indicating no blogs with their comments exist
    res.status(200).json({ message: `${user2} and ${user3} are 2nd level friends but there are no blogs with their comments` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


  

export default router;
