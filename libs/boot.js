import https from "https";
import fs from "fs";

module.exports = app => {
  if(process.env.NODE_ENV !== "test"){

    const credentials = {
      key: fs.readFileSync("ntask.key", "utf8"),
      cert: fs.readFileSync("nstask.cert", "utf8")
    };
    app.db.sequelize.sync().done(() => {

      https.createServer(credentials, app)
        .listen(app.get("port"), () => {
          console.log(`Ntalk rodando na porta ${app.get("port")}`);
        });
    });
  }
};