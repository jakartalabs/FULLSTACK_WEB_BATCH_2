const supertest = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

describe('Test API Category', () =>{
  let server;
  beforeAll(async() =>{
    server = app.listen(4000, () => { });
  });
  afterAll(async()=>{
    if(server){
      await server.close();
    }
  });

  describe('Get All Category', ()=>{
    it('mau mendapatkan seluruh kategori', async(done)=>{
      const request = await supertest(server);
      request
        .get('/category')
        .expect(200)
        .then((res)=>{
          expect(res.status).toBe(200);
          done();
        })
    });
  })
})