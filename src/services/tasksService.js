/***
 * this file contains the service layer for the tasks endpoint. It contains the logic for interacting with
 * the database to perform CRUD operations on the tasks table.
 * 
 * The service layer is responsible for handling the database connection and performing the required
 * operations on the database. It should contain all the business logic and database operations required
 * to perform the CRUD operations on the tasks table.
 * 
 * The service layer should not contain any validation logic. It should assume that the data has been
 * validated by the controller or router before reaching the service layer.
 * 
 * The service layer should also not contain any error handling logic. It should throw an error if an
 * operation fails and let the controller handle the error and send an appropriate response back to the
 * client.
 * 
 * The service layer should not contain any response logic. It should only perform the required operations
 * on the database and return the result back to the controller.
 * 
 * The service layer should also not contain any request or response objects. It should only contain
 * the logic for interacting with the database and performing the required operations.
 * 
 * The service layer should also not contain any reference to the express framework or any other
 * web server framework. It should be a standalone module that can be used in any environment.
  * */

// database connection
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

// Load environment variables from .env file
const supabaseUrl = process.env.SUPABASE_TEAM;
const supabaseKey = process.env.SUPABASE_KEY;

// Check if the environment variables are set
if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase URL or key is missing. Make sure to set SUPABASE_TEAM and SUPABASE_KEY environment variables.");
    process.exit(1);
}

// Create a new Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

const taskService = {
    getAllTasks: async () => {
        const { data, error } = await supabase
            .from('Tasks')
            .select();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    },

    getTaskById: async (id) => {
        const { data, error } = await supabase
            .from('Tasks')
            .select()
            .eq('id', id);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    },

    createTask: async (task) => {
        const { error } = await supabase
            .from('Tasks')
            .insert(task);
        if (error) {
            throw new Error(error.message);
        }
    },

    updateTask: async (id, task) => {
        const { error } = await supabase
            .from('Tasks')
            .update(task)
            .eq('id', id);
        if (error) {
            throw new Error(error.message);
        }
    },

    deleteTask: async (id) => {
        const { error } = await supabase
            .from('Tasks')
            .delete()
            .eq('id', id);
        if (error) {
            throw new Error(error.message);
        }
    },
};

export default taskService;
