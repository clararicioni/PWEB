let app = require('./app/config/server.js'); //carregando o modulo do servidor

let rotaHome = require('./app/routes/home.js');
rotaHome(app);

let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario.js');
rotaAdicionarUsuario(app);

let rotaHistoria = require('./app/routes/historia.js');
rotaHistoria(app);

let rotaCursos = require('./app/routes/cursos.js');
rotaCursos(app);

let rotaProfessores = require('./app/routes/professores.js');
rotaProfessores(app);

app.listen(3000, function () {
    //console.log(texto);
    console.log("servidor com express foi carregado");
});