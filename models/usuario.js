/**
 * Arquivo: usuario.js
 * Author: Anderson Xavier
 * Description: Arquivo onde trataremos o modelo do projeto.
 * Definição dos esquemas para serem utilizadas na Base de Dados (MongoDb)
 */
 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nome: String,
    login: String,
    senha: String
});
module.exports = mongoose.model('Usuario', UsuarioSchema);

