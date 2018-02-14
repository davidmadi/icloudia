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
      req.checkBody("email", "Enter a valid email address.").isEmail();
      console.log("cca");
      const accountDAO = global.rootRequire('app/infra/account/accountDAO')();

      var errors = req.validationErrors();
      if (errors) {
        res.json({errors: errors});
        return;
      } else {
        // normal processing here
      }

      //bodyValidation.assertNotEmpty(req, ['email', 'password', 'name']);

      //if (bodyValidation.emptyError(req, res, true))
      //{
      //  const logging = accountDAO.save(req.body, function(error, result){
      //    global.BaseCrud.responseQuery(req, res, error, result);
      //    res.end();
      //  })
      //}
      res.json(req.body);
    }
  );

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
