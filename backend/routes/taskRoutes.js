import express from 'express';
import {
  handleCreateTask,
  handleGetTasks,
  handleUpdateTask,
  handleDeleteTask
} from '../controllers/taskController.js';

export default function (db) {
  const router = express.Router();

  router.post('/', (req, res) => handleCreateTask(req, res, db));
  router.get('/', (req, res) => handleGetTasks(req, res, db));
  router.patch('/:id', (req, res) => handleUpdateTask(req, res, db));
  router.delete('/:id', (req, res) => handleDeleteTask(req, res, db));

  return router;
}