'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Testing server', () => {

  
  it('should send 404 error on a bad route', async () => {
    const response = await request.get('/wrongroute');
    
    expect(response.status).toEqual(404);
  });
  
  it('should send 404 error on a bad method', async () => {
    const response = await request.post('/person');
    
    expect(response.status).toEqual(404);
  });
  
  it('should send a 500 error when no person is found', async () => {
    const response = await request.get('/person');
    
    expect(response.status).toEqual(500);
  });

  it('should send 200 if the name is in the query string', async () => {
    const response = await request.get('/person/?name=reem');

    expect(response.status).toEqual(200);
  });

  it('should send JSON object with name value if in the query string', async () => {
    const response = await request. get('/person/?name=reem');

    expect(response.body).toEqual({ name: 'reem'});
  });
});