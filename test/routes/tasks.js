/*eslint-disable*/
import jwt from "jwt-simple";

describe("Routes: Tasks", () => {

  const Users = app.db.models.Users;
  const Tasks = app.db.models.Tasks;
  const jwtSecrete = app.libs.config.jwtSecrete;

  let token;
  let fakeTask;

  beforeEach(done => {
    Users
      .destroy({where: {}})
      .then(() => Users.create({
        name: "Jose",
        email: "jose@mail.net",
        password: "12345"
      }))
      .then(user => {
        Tasks
          .destroy({where: {}})
          .then(() => Tasks.bulkCreate([
          {
            id: 1,
            title: "Work",
            user_id: user.id
          },
          {
            id: 2,
            title: "Study",
            user_id: user.id
          }]))
          .then(tasks => {
            fakeTask = tasks[0];
            token = jwt.encode({id: user.id}, jwtSecrete);
          });
      })
  });


  describe("GET /tasks", () => {

    describe("status 200", () => {
      it("returns a list of tasks", done =>{
        // retornando uma lista de tasks
      });
    });
  });

  describe("POST /tasks/", () => {
    describe("status 200", () =>  {
      it("creates a new task", done => {
        // cadastrando uma nova task
      });
    });
  });

  describe("GET /tasks/:id", () => {
    describe("status 200", () => {
      it("returns on tasks", done => {
        // retornando um task
      });
    });
  });


  describe("PUT /tasks/:id", () => {
    describe("status 204", () => {
      it("returns a task", done => {
        // atualização das tasks
      });
    });
  });


  describe("DELETE /tasks/:id", () => {
    describe("status 204", () => {
      it("removes a tasks", done => {
        // deletando tasks
      });
    });
  });


});