import {
  createTask,
  getTasks,
  updateTaskStatus,
  deleteTask
} from '../models/taskModel.js';

export const handleCreateTask = async (req, res, db) => {
  const { text, status = 'in progress' } = req.body;
  if (!text || !['in progress', 'completed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid task data' });
  }
  const task = await createTask(db, text, status);
  res.status(201).json(task);
};

export const handleGetTasks = async (req, res, db) => {
  const { status } = req.query;
  const tasks = await getTasks(db, status);
  res.json(tasks);
};

export const handleUpdateTask = async (req, res, db) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!['in progress', 'completed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }
  const updated = await updateTaskStatus(db, id, status);
  if (!updated) return res.status(404).json({ error: 'Task not found' });
  res.json(updated);
};

export const handleDeleteTask = async (req, res, db) => {
  const { id } = req.params;
  const success = await deleteTask(db, id);
  if (!success) return res.status(404).json({ error: 'Task not found' });
  res.json({ message: 'Task deleted' });
};