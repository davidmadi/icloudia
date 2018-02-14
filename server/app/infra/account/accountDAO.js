function AccountDAO() {
}

AccountDAO.prototype.login = function(account, callback) {
  const conn = global.rootRequire('app/infra/db/DBFactory')();
  conn.connect();
  conn.query('SELECT id, name, email from accounts where email=$1::text and pswd=$2::text', [account.email, account.password], 
    (err, res) => {
      conn.end();
      callback(err, res);
    }
  );
}



AccountDAO.prototype.save = function(account, callback) {

  try
  {
    const conn = global.rootRequire('app/infra/db/DBFactory')();
    conn.connect();
    conn.query('BEGIN', (err, res)=>{
      conn.query(
        "insert into accounts (name, email, pswd) values($1::text,$2::text,$3::text);",
        [account.name, account.email, account.password],
      (err, res) =>{
        conn.query(
          "SELECT id, name, email from accounts where id= currval(pg_get_serial_sequence('accounts','id'));",
          [],
          (err, res) => {
            if (err)
              conn.query('ROLLBACK');
            else
              conn.query('COMMIT');
    
            callback(err, res);        
          });
      });
    });
    //conn.end();        
  }
  catch(ex){
    callback(ex, {});
  }
}

module.exports = function() {
  return new AccountDAO();
};