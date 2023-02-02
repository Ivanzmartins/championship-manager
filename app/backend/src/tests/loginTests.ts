import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../app";

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
  // describe('Testa a rota /login/validate', () => {
  //   it('Verifica se o retorno dessa rota tem o status 200 com o role do usuario', async () => {
  //     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjc1MzY3MzY2LCJleHAiOjE2NzU0NTM3NjZ9.8RKjBXWarQl4zTzSGY13XyNUbvstEabhFEkBZrqOwOE";
  //     const httpRes = await chai
  //     .request(app)
  //     .get('/login/validate')
  //     .set('Authorization', `Bearer ${token}`);
  //   })
  // });
});