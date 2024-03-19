// Initialize the Express application
import cors from "cors";
import express from "express";
// Import the routes
import { default as tasks }    from "./routes/tasks.js";
// Create an Express application
const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure routes
app.use("/tasks", tasks);

// Export the Express application
export default app;