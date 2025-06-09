let app = require('./app/config/server.js'); //carregando o modulo do servidor

app.listen(3000, function () {
    //console.log(texto);
    console.log("servidor com express foi carregado");
});