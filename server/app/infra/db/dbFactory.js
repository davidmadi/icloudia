const conString = "postgres://root:hagadol23@localhost/icloudia";
const conStringTest = "postgres://root:hagadol23@localhost/icloudia_test";

module.exports = function() {
  const { Client } = require('pg')

  this.getConnString = function()
  {
    if (process.env.NODE_ENV == 'test')
    {
      return conStringTest;
    }
    else
    {
      return conString;
    }      
  }

  var client = new Client({
    connectionString: this.getConnString()
  })
  return client;

}
