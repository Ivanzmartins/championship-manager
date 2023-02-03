import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe("Testes da rota /login", () => { 
  describe('POST /login', () => {
    it('Login com as credenciais corretas deve retornar um token com status 200', async () => {
      const httpRes = await chai
        .request(app)
        .post('/login')
        .send({
          email: "admin@admin.com",
          password: "secret_admin"
        });
    expect(httpRes.status).to.be.equal(200);
    expect(httpRes.body).to.have.property('token');
    });
})
  describe('Testa a rota /login/validate', () => {
    it('Verifica se o token da pessoa é válido', async () => {
      const token = "fghfgh";
      const httpRes = await chai
      .request(app)
      .get('/login/validate')
      .set('Authorization', `Bearer ${token}`);
    })
  });
});