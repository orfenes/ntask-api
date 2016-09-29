module.exports = app => {
  app.db.sequelize.sync().done(() => {

    app.listen(app.get("port"), () => {
      console.log(`Ntalk rodando na porta ${app.get("port")}`);
    });

  });
};