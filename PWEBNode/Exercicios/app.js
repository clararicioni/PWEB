let app = require('./app/config/server.js'); //carregando o modulo do servidor

app.get('/', function (req, res) {
    res.render("home/index");
});
app.get('/formulario_adicionar_usuario', function (req, res) {
    res.render("admin/adicionar_usuario");
});
app.get('/informacao/historia', function (req, res) {
    res.render("informacao/historia");
});
app.get('/informacao/cursos', function (req, res) {
    res.render("informacao/cursos");
});
app.get('/informacao/professores', function (req, res) {
    res.render("informacao/professores");
});
app.get('/informacao/pacoca', function (req, res) {
    res.render("informacao/pacoca");
});
app.listen(3000, function () {
    //console.log(texto);
    console.log("servidor com express foi carregado");
});