/**
 * This file contains the controller for the tasks endpoint.
 * It contains the logic for handling the requests and responses
 * for the tasks endpoint.
 * 
 * The controller interacts with the taskService to perform
 * CRUD operations on the tasks table in the database.
 * 
 * The controller receives the request object from the router,
 * processes the request by calling the appropriate taskService
 * method, and then sends the response back to the router.
 * 
 * The controller is responsible for sending the appropriate
 * status code and response message back to the client.
 * 
 * The controller should not contain any business logic or
 * database operations. It should only call the appropriate
 * methods from the taskService and handle the response.
 * 
 * The controller should also handle any errors that occur
 * during the processing of the request and send an appropriate
 * error response back to the client.
 * 
 * The controller should not contain any database connection
 * logic. It should only call the appropriate methods from the
 * taskService to perform the required operations.
 * 
 * The controller should also not contain any validation logic.
 * It should assume that the request has been validated by the
 * router or middleware before reaching the controller.
 * 
 * controller imports the taskService and calls the appropriate
 */

import taskService from '../services/tasksService.js';

const taskController = {
    getAllTasks: async (req, res) => {
        try {
            const data = await taskService.getAllTasks();
            res.json({ success: true, data });
        } catch (error) {
            console.error("Error retrieving data from Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    },
    getTaskById: async (req, res) => {
        try {
            const data = await taskService.getTaskById(req.params.id);
            res.json({ success: true, data });
        } catch (error) {
            console.error("Error retrieving data from Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    },
    createTask: async (req, res) => {
        try {
            await taskService.createTask(req.body);
            res.json({ success: true, message: "Task created successfully",  });
        } catch (error) {
            console.error("Error creating task in Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    },
    updateTask: async (req, res) => {
        try {
            await taskService.updateTask(req.params.id, req.body);
            res.json({ success: true, message: "Task updated successfully" });
        } catch (error) {
            console.error("Error updating task in Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    },
    deleteTask: async (req, res) => {
        try {
            await taskService.deleteTask(req.params.id);
            res.json({ success: true, message: "Task deleted successfully" });
        } catch (error) {
            console.error("Error deleting task in Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    }
};

export default taskController;