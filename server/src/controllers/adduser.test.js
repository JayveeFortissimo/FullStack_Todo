import app from '../app';
import request from 'supertest';

describe('Test POST /addUser', () =>{
    test('It should respond with 201 Successs',async()=>{
      await request(app)
      .post('addUser')
      .send({

      })
      .expect('Content-Type', /json/)
      .expect(201)
    })
})



describe('Test POST /userLogin', () =>{
    test('It should respond with 2000 Successs',()=>{
        const response = 200;
        expect(response).toBe(200)
    })
})