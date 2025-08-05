const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello, GitHub Actions!'));

describe('GET /', () => {
  it('should return Hello, GitHub Actions!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, GitHub Actions!');
  });
});

