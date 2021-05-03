'use strict';
const superTest = require('supertest');
const server = require('../src/server');
const request = superTest(server.app);

describe('Validator Test', () => {
  it('no name in the query string', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });
  it(' the name is in the query string', async () => {
    const response = await request.get('/person?name=reem');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({name: 'reem'});
  });
});