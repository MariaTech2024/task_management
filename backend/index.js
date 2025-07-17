import express from 'express';
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB().then((db) => {
  app.use('/tasks', taskRoutes(db));

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
