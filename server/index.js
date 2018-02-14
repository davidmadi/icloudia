
if (!process.env.NODE_ENV)
{
    console.log("servidor não ativado, execute [NODE_ENV=PROD nodemon index] ou [NODE_ENV=TEST nodemon index]");
    process.exit(1);
}
var app = require('./config/express')();

app.listen(8080, function() {
    console.log("rodando não, ródano!");
})
