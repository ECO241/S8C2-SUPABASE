/***
 * in this file, we define the routes for the tasks
 * all crud operations are defined here and the corresponding
 * controller methods are called to perform the operations
*/

import express from 'express';
const router = express.Router();

// Import controller for tasks
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