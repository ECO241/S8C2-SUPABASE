import request from 'supertest';
import { app } from '../src/index.js';

describe('Task API', () => {

    let createdTaskID = 0;

    it('should create a new task', async () => {
        const response = await request(app)
            .post('/api/tasks')
            .send({ title: 'Task 1', description: 'This is task 1', status: 'SELECCIONADO'});
        
        createdTaskID = response.body.data[0].id;

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('Task 1');
        expect(response.body.description).toBe('This is task 1');
        
    });

    it('should get all tasks', async () => {
        const response = await request(app).get('/api/tasks');

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('should get a single task', async () => {
        const taskId = 'task_id'; // Replace 'task_id' with the actual task ID

        const response = await request(app).get(`/api/tasks/${taskId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('title');
        expect(response.body).toHaveProperty('description');
    });

    it('should update a task', async () => {
        const taskId = taskId; // Replace 'task_id' with the actual task ID

        const response = await request(app)
            .put(`/api/tasks/${taskId}`)
            .send({ title: 'Updated Task', description: 'This task has been updated' });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('Updated Task');
        expect(response.body.description).toBe('This task has been updated');
    });

    it('should delete a task', async () => {
        const taskId = taskId; 

        const response = await request(app).delete(`/api/tasks/${taskId}`);

        expect(response.statusCode).toBe(204);
    });
});
