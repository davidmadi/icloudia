const dbFac = global.rootRequire('app/infra/db/dbFactory');
const bodyValidation = global.rootRequire('app/validation/body')();
const { check, validationResult } = require('express-validator/check');
const util = require('util');


function AccountCRUD(app)
{

  app.get("/create", function(req, res){
    console.log("david");
    res.json({david:1});
  });

  app.post("/signup/create", function(req, res){
    req.checkBody("email", "Por favor preencha o email.").isEmail();
    req.checkBody("name", "Por favor preencha o Nome.").exists();
    const accountDAO = global.rootRequire('app/infra/account/accountDAO')();

    var errors = req.validationErrors();
    if (errors) {
      res.json({errors: errors});
    } else {
      accountDAO.save(req.body, function(err, result){
        if (err)
          res.json({errors:[{msg: err.message}]});
        else  
          res.json(result.rows);
      });
    }
  });

  app.post("/login", function(req, res){
    const accountDAO = global.rootRequire('app/infra/account/accountDAO')();

    bodyValidation.assertNotEmpty(req, ['email', 'password']);
    console.log(JSON.stringify(req));
    if (bodyValidation.emptyError(req, res, true))
    {
      const logging = accountDAO.login(req.query, function(error, result){
        global.BaseCrud.responseQuery(req, res, error, result);
        res.end();
      })
    }
  });
}

module.exports = AccountCRUD;
