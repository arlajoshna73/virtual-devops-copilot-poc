const request = require('supertest');
const app = require('../index'); // Import the Express app

test('GET / returns 200 and expected message', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toContain('Hello from Node.js running in Azure Web App!');
});
