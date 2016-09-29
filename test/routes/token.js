/*eslint-disable*/
describe("Routes: Token", () => {
  const Users = app.db.models.Users;

  describe("POST /token", () => {    
    beforeEach(done => {
      Users
        .destroy({where: {}})
        .then(() => Users.create({
          name : "Jose",
          email: "jose@mail.com",
          password: "12345"
        }))
        .then(done());      
    });

    describe("status 200", () =>{
      it("return authenticated user token", done =>{
        request.post("/token")
          .send({
            email: "jose@mail.com",
            password: "12345"
          })
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.include.keys("token");
            done(err);
          });
      }); 
    });

  });

});