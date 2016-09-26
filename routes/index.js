module.exports = app => {

  /**
  * @api {get} /API Status
  * @apiGroup Status
  * @apiSucess {String} status Mensagem de status API
  * @apiSucessExample {json} Sucesso
  * HTTP/1.1 200 OK
  *   {status: "Ntalk Api"}
  */ 

  app.get("/", (req, res) => {    
    res.json({status: "Ntalk Api"});
  });
};