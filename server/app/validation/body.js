const assert = require('assert');

function BodyValidation(){
}

BodyValidation.prototype.assertNotEmpty = function(req, params=[])
{
  var correct = true;
  params.forEach(element => {
    req.checkBody(element, element + ' é obrigatório');
  });    
  return correct;
}

BodyValidation.prototype.emptyError = function(req, res, render){
  var erros = req.validationErrors();
  if (erros) {
    if (render)
      res.json({errors : erros});
    return false;
  }
  return true;
}

module.exports = function(){
  return new BodyValidation();
}