import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './Router/userRoutes.js';
import blogRoutes from "./Router/blogRoutes.js"
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/blog', blogRoutes);

mongoose.connect("mongodb+srv://gulshan:geIG1ggiDMzpriXX@cluster0.feefsyn.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;