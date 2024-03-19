import express from 'express';
const router = express.Router();

import taskController from '../controllers/tasks.js';

// GET all tasks
router.get('/', taskController.getAllTasks);

// GET a specific task by ID
router.get('/:id', taskController.getTaskById);

// POST a new task
router.post('/', taskController.createTask);

// PUT/UPDATE an existing task
router.put('/:id', taskController.updateTask);

// DELETE a task
router.delete('/:id', taskController.deleteTask);

export default router;